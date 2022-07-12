import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import crypto from "crypto";

// DEFINO EL ESQUEMA DE USUARIOS
const usersSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    validate: [validator.isEmail, " Please enter valid email email"],
    password: {
      type: String,
      required: [true, "Please enter your password"],
      minLength: [6, "Your password must be longer than 6 characters"],
      select: false,
    },
  },
});

// FUNCION PARA ENCRIPTAR LA CONTRASEÑA DEL USUARIO
usersSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// FUNCION PARA COMPARAR  CONTRASEÑA
usersSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// GENERAR TOKEN PARA CAMBIAR O RESTABLECER LACONTRASEÑA
usersSchema.methods.getResetPasswordToken = function () {
  // GENERAR EL TOKEN
  const resetToken = crypto.randomBytes(20).toString("hex");

  // GUARDANDO EL TOKEN EN EL PERFIL DEL USUARIO
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // AGREGANDO TIEMPO DE EXPIRACION AL TOKEN
  this.resetPasswordExpire = Date.now() + 30 * 60 * 1000;

  return resetToken;
};

// ANTES EXPORTAR EL ESQUEMA COMPRUEBA QUE EN LA BASE DE DATOS NO EXISTA ESTE MODELO

const Users = mongoose.models.Users || mongoose.model("Users", usersSchema);

export default Users;

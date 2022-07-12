import Users from "../models/users";
import cloudinary from "cloudinary";
import ErrorHandler from "../utils/errorHandler";
import catchAsyncErrors from "../middleware/catchAsyncErrors";
import absoluteUrl from "next-absolute-url";
import crypto from "crypto";

// CONFIGURACION DE CLOUDINARY PARA GUARDAR IMAGENES
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// FUNCION PARA REGISTRO DE USUARIOS
const registerUsers = catchAsyncErrors(async (req, res) => {
  const { email, password } = req.body;

  await Users.create({
    email,
    password,
  })
    .then((user) => {
      res.json({
        message: "Tú Registro ha sido exitoso",
      });
    })
    .catch((error) => {
      res.status(500).json({ message: "ha ocurrido un error" });
    });
});

export { registerUsers };

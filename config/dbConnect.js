import mongoose from "mongoose";

//~ CONECCION A LA BASE DE DATOS
const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  mongoose.connect(
    process.env.DB_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) throw err;
      console.log("Connected successfully");
    }
  );
};

export default dbConnect;

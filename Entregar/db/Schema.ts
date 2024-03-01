import mongoose from "npm:mongoose";
import { Libro } from "../types.ts";

if (mongoose.connection.readyState === 0) {
  await mongoose.connect("mongodb+srv://jmviajero:12345@cluster0.mfoc843.mongodb.net/Libros?retryWrites=true&w=majority&appName=Cluster0");
}

const schema = new mongoose.Schema<Libro>({
  autor: String,
  titulo: String,
  descripcion: String
});

export default mongoose.model<Libro>("Libro", schema);
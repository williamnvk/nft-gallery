import mongoose from "mongoose";
import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL as string);
    console.info("[MongoDB] Banco de dados conectado!");
  } catch (error) {
    console.error(
      "[MongoDB] Falha na conexão com o banco de dados. Isso causará falhas em todo o sistema.",
      error
    );
  }
};

export default connectDB;

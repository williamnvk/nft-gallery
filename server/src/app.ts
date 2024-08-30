import express, { Express } from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import compression from "compression";
import routes from "./routes/v1";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const app: Express = express();

app.set("trust proxy", true);
app.disable("x-powered-by");
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(compression());

app.use("/api", routes);

mongoose.Promise = global.Promise;
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.DATABASE_URL as string)
  .then(() => {
    console.info("[MongoDB] Banco de dados conectado!");
  })
  .catch((e) => {
    console.error(
      "[MongoDB] Falha na conexão com o banco de dados. Isso causará falhas em todo o sistema."
    );
  });

export default app;

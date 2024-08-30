import express, { Express } from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import compression from "compression";
import routes from "./routes/v1";
import connectDB from "./config/db";

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

connectDB();

export default app;

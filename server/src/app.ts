import express, { Express } from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import compression from "compression";
import routes from "./routes/v1";
import connectDB from "./config/db";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

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

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API de Coleções",
      version: "1.0.0",
      description: "Documentação da API para gerenciamento de coleções",
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}/api`,
      },
    ],
  },
  apis: ["./src/controllers/**/schemas.ts", "./src/routes/v1/*.routes.ts"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

connectDB();

export default app;

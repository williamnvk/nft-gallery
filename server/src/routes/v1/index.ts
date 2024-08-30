import { default as TestRouter } from "./test.routes";
import { Router } from "express";

const router = Router();

router.use("/v1", TestRouter);

export default router;

import { default as TestRouter } from "./test.routes";
import { default as CollectionsRouter } from "./collections.routes";
import { Router } from "express";

const router = Router();

router.use("/v1", TestRouter);
router.use("/v1", CollectionsRouter);

export default router;

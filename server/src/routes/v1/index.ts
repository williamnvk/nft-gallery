import { default as TestRouter } from "./test.routes";
import { default as CollectionsRouter } from "./collections.routes";
import { default as NetworksRouter } from "./networks.routes";
import { Router } from "express";

const router = Router();

router.use("/v1", TestRouter);
router.use("/v1", CollectionsRouter);
router.use("/v1", NetworksRouter);

export default router;

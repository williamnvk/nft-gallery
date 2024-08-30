import { Router } from "express";
import ColelctionsController from "../../controllers/collections";

const router = Router();

router.route("/collections").get(ColelctionsController.getAllCollections);

export default router;

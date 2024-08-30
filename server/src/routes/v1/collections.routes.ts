import { Router } from "express";
import CollectionsController from "../../controllers/collections";
import CollectionsValidator from "src/controllers/collections/validators";

const router = Router();

router.route("/collections").get(CollectionsController.getAllCollections);
router
  .route("/collections")
  .post(
    CollectionsValidator.createCollection,
    CollectionsController.createCollection
  );

export default router;

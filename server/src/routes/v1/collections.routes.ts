import { Router } from "express";
import CollectionsController from "../../controllers/collections";
import CollectionsValidator from "src/controllers/collections/validators";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Collections
 *   description: Gerenciamento de coleções
 */

/**
 * @swagger
 * /collections:
 *   get:
 *     summary: Listar todas as coleções
 *     tags: [Collections]
 *     responses:
 *       200:
 *         description: Lista de coleções
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Collection'
 */
router.route("/collections").get(CollectionsController.getAllCollections);

/**
 * @swagger
 * /collections:
 *   post:
 *     summary: Criar uma nova coleção
 *     tags: [Collections]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Collection'
 *     responses:
 *       201:
 *         description: Coleção criada com sucesso
 *       400:
 *         description: Erro de validação
 */
router
  .route("/collections")
  .post(
    CollectionsValidator.createCollection,
    CollectionsController.createCollection
  );

export default router;

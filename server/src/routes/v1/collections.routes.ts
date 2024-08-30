import { Router } from "express";
import CollectionsController from "../../controllers/collections";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Collections
 *   description: Gerenciamento de coleções
 */

/**
 * @swagger
 * /v1/collections:
 *   get:
 *     summary: Listar todas as coleções
 *     tags: [Collections]
 *     parameters:
 *       - in: query
 *         name: search
 *         required: false
 *         description: Termo para buscar coleções pelo nome ou descrição.
 *         schema:
 *           type: string
 *       - in: query
 *         name: network
 *         required: false
 *         description: Rede para filtrar as coleções
 *         schema:
 *           type: string
 *       - in: query
 *         name: provider
 *         required: false
 *         description: Fonte dos dados (reservoir ou opensea)
 *         schema:
 *           type: string
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

export default router;

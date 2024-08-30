import { Router } from "express";
import NetworksController from "../../controllers/networks";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Networks
 *   description: Redes disponíveis
 */

/**
 * @swagger
 * /v1/networks:
 *   get:
 *     summary: Listar todas as redes disponíveis
 *     tags: [Networks]
 *     responses:
 *       200:
 *         description: Lista de redes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Network'
 */
router.route("/networks").get(NetworksController.getAvailableNetworks);

export default router;

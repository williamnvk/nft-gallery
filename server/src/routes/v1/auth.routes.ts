import { Router } from "express";
import AuthController from "../../controllers/auth";
import AuthValidator from "../../controllers/auth/validators";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Gerenciamento de sessão
 */

/**
 * @swagger
 * /v1/sign-in:
 *   post:
 *     summary: Fazer login
 *     description: Faz login com uma carteira e retorna um JWT
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AuthRequest'
 *     responses:
 *       '200':
 *         description: Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       '400':
 *         description: Carteira não fornecida
 *       '500':
 *         description: Erro interno do servidor
 */
router.route("/sign-in").post(AuthValidator.signIn, AuthController.signIn);

export default router;

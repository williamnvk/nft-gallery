import { Router } from "express";
import UsersController from "../../controllers/users";
import { isAuthenticated } from "../../middlewares/auth.middleware";
import UsersValidator from "../../controllers/users/validators";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Usuários
 */

/**
 * @swagger
 * /v1/users/collections:
 *   post:
 *     summary: Monitora uma coleção de usuários
 *     description: Esta rota permite que um usuário monitore uma coleção específica baseada no slug fornecido. É necessário fornecer um token JWT válido no cabeçalho da requisição.
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Collection'
 *     responses:
 *       200:
 *         description: Coleção monitorada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Coleção monitorada com sucesso."
 *       401:
 *         description: Não autorizado. O usuário não está autenticado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Usuário não autenticado."
 *       404:
 *         description: Coleção não encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Coleção não encontrada."
 *       500:
 *         description: Erro interno do servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Erro interno do servidor."
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

// Swagger documentation for getUserCollections endpoint
/**
 * @swagger
 * /v1/users/collections:
 *   get:
 *     summary: Obtém as coleções de um usuário
 *     description: Retorna todas as coleções associadas a um usuário específico.
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Sucesso. Retorna a lista de coleções do usuário.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: ID da coleção
 *                     example: 60d21b4667d0d8992e610c85
 *                   name:
 *                     type: string
 *                     description: Nome da coleção
 *                     example: Minha Coleção de NFTs
 *                   slug:
 *                     type: string
 *                     description: Slug da coleção
 *                     example: minha-colecao-de-nfts
 *                   description:
 *                     type: string
 *                     description: Descrição da coleção
 *                     example: Esta é minha coleção pessoal de NFTs.
 *                   cover:
 *                     type: string
 *                     description: URL da imagem de capa da coleção
 *                     example: https://example.com/capa.jpg
 *                   isNsfw:
 *                     type: boolean
 *                     description: Indica se a coleção contém conteúdo NSFW
 *                     example: false
 *                   contracts:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         address:
 *                           type: string
 *                           description: Endereço do contrato
 *                           example: 0x123456789abcdef
 *                         chain:
 *                           type: number
 *                           description: ID da cadeia de blocos
 *                           example: 1
 *                   origin:
 *                     type: string
 *                     description: Origem da coleção
 *                     enum:
 *                       - PROVIDER_OPEN_SEA
 *                       - PROVIDER_RESERVOIR
 *                     example: PROVIDER_OPEN_SEA
 *       400:
 *         description: Requisição inválida. Ocorreu um erro de validação.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       msg:
 *                         type: string
 *                         description: Mensagem de erro
 *                         example: Token inválido
 *       401:
 *         description: Não autorizado. O token JWT está ausente ou inválido.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Descrição do erro de autorização
 *                   example: Usuário não autenticado.
 *       404:
 *         description: Usuário não encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensagem de erro de usuário não encontrado
 *                   example: Usuário não encontrado.
 *       409:
 *         description: Conflito. A coleção já está sendo monitorada pelo usuário.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensagem de erro de conflito
 *                   example: Coleção já monitorada pelo usuário.
 *       500:
 *         description: Erro interno no servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensagem de erro interno
 *                   example: Erro inesperado no servidor.
 */

router
  .route("/users/collections")
  .post(
    isAuthenticated,
    UsersValidator.addCollectionToUser,
    UsersController.addCollectionToUser
  )
  .get(isAuthenticated, UsersController.getUserCollections);

export default router;

/**
 * @swagger
 * components:
 *   schemas:
 *     Collection:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         symbol:
 *           type: string
 *         description:
 *           type: string
 *         cover:
 *           type: string
 *         isNsfw:
 *           type: boolean
 *         contracts:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               address:
 *                 type: string
 *               chain:
 *                 type: integer
 *         origin:
 *           type: string
 *           enum: [opensea, reservoir]
 *       required:
 *         - name
 *         - symbol
 *         - description
 *         - cover
 *         - contracts
 *         - origin
 */

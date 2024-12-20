import { Router } from "express";
import { createFilling, getFillings } from "../controllers/fillingController";

const router = Router();

/**
 * @swagger
 * /preenchimentos:
 *   get:
 *     summary: Recupera todos os preenchimentos de campos
 *     tags: [Fillings]
 *     responses:
 *       200:
 *         description: Lista de preenchimentos recuperada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID do preenchimento
 *                   fieldId:
 *                     type: string
 *                     description: ID do campo preenchido
 *                   value:
 *                     type: string
 *                     description: Valor preenchido
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     description: Data de criação do preenchimento
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/", getFillings);

/**
 * @swagger
 * /preenchimentos:
 *   post:
 *     summary: Cria um novo preenchimento de campo
 *     tags: [Fillings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fieldId:
 *                 type: string
 *                 description: ID do campo que será preenchido
 *               value:
 *                 type: string
 *                 description: Valor a ser preenchido no campo
 *               isRequired:
 *                 type: boolean
 *                 description: Define se o campo é obrigatório
 *     responses:
 *       201:
 *         description: Preenchimento criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID do preenchimento
 *                 fieldId:
 *                   type: string
 *                   description: ID do campo preenchido
 *                 value:
 *                   type: string
 *                   description: Valor preenchido
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   description: Data de criação do preenchimento
 *       400:
 *         description: Erro de validação dos dados enviados
 *       500:
 *         description: Erro interno do servidor
 */
router.post("/", createFilling);

export default router;

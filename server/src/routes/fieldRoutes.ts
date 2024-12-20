import { Router } from "express";
import { createField, getFields } from "../controllers/fieldController";

const router = Router();

/**
 * @swagger
 * /campos:
 *   get:
 *     summary: Recupera todos os campos
 *     tags: [Fields]
 *     responses:
 *       200:
 *         description: Lista de campos recuperada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID do campo
 *                   name:
 *                     type: string
 *                     description: Nome do campo
 *                   datatype:
 *                     type: string
 *                     description: Tipo de dado do campo
 *                   isRequired:
 *                     type: boolean
 *                     description: Define se o campo é obrigatório
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     description: Data de criação do campo
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/", getFields);

/**
 * @swagger
 * /campos:
 *   post:
 *     summary: Cria um novo campo
 *     tags: [Fields]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nome do campo
 *               datatype:
 *                 type: string
 *                 description: Tipo de dado do campo
 *               isRequired:
 *                 type: boolean
 *                 description: Define se o campo é obrigatório
 *     responses:
 *       201:
 *         description: Campo criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID do campo
 *                 name:
 *                   type: string
 *                   description: Nome do campo
 *                 datatype:
 *                   type: string
 *                   description: Tipo de dado do campo
 *                 isRequired:
 *                   type: boolean
 *                   description: Define se o campo é obrigatório
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   description: Data de criação do campo
 *       400:
 *         description: Erro de validação dos dados enviados
 *       500:
 *         description: Erro interno do servidor
 */
router.post("/", createField);

export default router;

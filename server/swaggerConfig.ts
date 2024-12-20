import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Desafio Brasão",
    version: "1.0.0",
    description: "Documentação da API para gerenciamento de campos e preenchimentos.",
  },
  servers: [
    {
      url: "http://localhost:4001",
    },
  ],
  components: {
    schemas: {
      Field: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            description: "ID do campo",
          },
          name: {
            type: "string",
            description: "Nome do campo",
          },
          datatype: {
            type: "string",
            description: "Tipo de dado do campo",
          },
          createdAt: {
            type: "string",
            format: "date",
            description: "Data de criação",
          },
          isRequired: {
            type: "boolean",
            description: "Define se o campo é obrigatório",
          },
        },
      },
      FieldInput: {
        type: "object",
        required: ["name", "datatype", "isRequired"],
        properties: {
          name: {
            type: "string",
            description: "Nome do campo",
          },
          datatype: {
            type: "string",
            description: "Tipo de dado do campo",
          },
          isRequired: {
            type: "boolean",
            description: "Define se o campo é obrigatório",
          },
        },
      },
    },
  },
};

const options = {
  swaggerDefinition,
  apis: ["./src/routes/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

const setupSwagger = (app: Express) => {
  app.use("/documentacao", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/swagger.json", (req, res) => {
    res.json(swaggerSpec);
  });
};

export default setupSwagger;

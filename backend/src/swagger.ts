import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Crowdfunding API",
      version: "1.0.0",
      description: "Crowdfunding API documentation",
    },
    servers: [
      {
        url: "http://localhost:5001",
      },
    ],
  },
  apis: ["./src/routes/*.ts", "./src/models/*.ts"], // Paths to files containing OpenAPI definitions
};

const specs = swaggerJsdoc(options);

export const setupSwagger = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};

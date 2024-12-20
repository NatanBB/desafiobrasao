import express from "express";
import fieldRoutes from "./routes/fieldRoutes";
import fillingRoutes from "./routes/fillingRoutes";
import setupSwagger from "../swaggerConfig";

const app = express();

setupSwagger(app);

app.use(express.json());

app.use("/campos", fieldRoutes);
app.use("/preenchimentos", fillingRoutes);

export default app;

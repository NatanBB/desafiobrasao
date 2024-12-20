import { DataSource } from "typeorm";
import { Field } from "../models/field";
import { Filling } from "../models/filling";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  logging: false,
  entities: [Field, Filling],
});

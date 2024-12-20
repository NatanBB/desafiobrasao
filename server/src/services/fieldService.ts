import { AppDataSource } from "../database";
import { Field } from "../models/field";

const fieldRepository = AppDataSource.getRepository(Field);

export const createFieldService = async (name: string, datatype: string, isRequired: boolean) => {
  const existingField = await fieldRepository.findOneBy({ name });
  if (existingField) {
    throw new Error("Field with this name already exists");
  }

  const field = fieldRepository.create({ name, datatype, isRequired });
  await fieldRepository.save(field);

  return field;
};

export const getFieldsService = async () => {
  const fields = await fieldRepository.find();
  return fields;
};

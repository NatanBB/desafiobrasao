import { AppDataSource } from "../database";
import { Filling } from "../models/filling";
import { Field } from "../models/field";

const fillingRepository = AppDataSource.getRepository(Filling);
const fieldRepository = AppDataSource.getRepository(Field);

export const createFillingService = async (fieldId: string, value: any) => {
  const field = await fieldRepository.findOneBy({ id: fieldId });

  if (!field) {
    throw new Error("Field not found.");
  }

  const isTypeMatch =
    typeof value === field.datatype ||
    (field.datatype === "date" && !isNaN(Date.parse(value)));

  if (!isTypeMatch) {
    throw new Error(
      `Value type does not match the field datatype: ${field.datatype}`
    );
  }

  const filling = fillingRepository.create({ fieldId, value });
  await fillingRepository.save(filling);

  return filling;
};

export const getFillingsService = async () => {
  const fillings = await fillingRepository.find();
  return fillings;
};

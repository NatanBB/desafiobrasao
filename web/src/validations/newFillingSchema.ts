import { z } from 'zod';

export const newFillingSchema = z.object({
  fieldId: z.string().min(1, { message: "O ID do campo é obrigatório" }),
  fieldType: z.string().min(1, { message: "O tipo de campo é obrigatório" }),
  value: z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.date()
  ]).refine(value => {
    if (value instanceof Date && isNaN(value.getTime())) {
      return false;
    }
    return true;
  }, { message: "Valor inválido" }),
  isRequired: z.boolean(),
});

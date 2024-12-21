import { z } from 'zod';

export const newFieldSchema = z.object({
  name: z.string().min(1, { message: "O nome é obrigatório" }),
  datatype: z.string().min(1, { message: "O tipo de dado é obrigatório" }),
  isRequired: z.boolean(),
});

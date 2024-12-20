import { z } from "zod";

export const fillingSchema = z.object({
  fieldId: z
    .string()
    .min(1, "Field ID must be a non-empty string."),
  value: z
    .union([
      z.string(),
      z.number(),
      z.boolean(),
      z.date()
    ]),
  isRequired: z.boolean(),
});

export type FillingSchema = z.infer<typeof fillingSchema>;

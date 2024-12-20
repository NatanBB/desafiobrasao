import { z } from "zod";

export const fieldSchema = z.object({
  name: z
    .string()
    .min(1, "Field name is required")
    .max(50, "Field name must be at most 50 characters"),
  datatype: z.enum(["string", "number", "boolean", "date"], {
    errorMap: () => ({
      message: "Invalid datatype. Must be one of: string, number, boolean, date.",
    }),
  }),
  isRequired: z.boolean(),
});

export type FieldSchema = z.infer<typeof fieldSchema>;

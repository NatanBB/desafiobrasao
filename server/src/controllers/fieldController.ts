import { Request, Response } from "express";
import { createFieldService, getFieldsService } from "../services/fieldService";
import { fieldSchema } from "../schemas/fieldSchema";

export const createField = async (req: Request, res: Response) => {
  try {
    const validatedData = fieldSchema.parse(req.body);

    const field = await createFieldService(
      validatedData.name,
      validatedData.datatype,
      validatedData.isRequired
    );

    res.status(201).json(field);
  } catch (error: unknown) {
    if (error instanceof Error) {
      if (error.name === "ZodError") {
        res.status(400).json({ errors: (error as any).issues });
        return;
      }
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unexpected error occurred." });
    }
  }
};

export const getFields = async (req: Request, res: Response) => {
  try {
    const fields = await getFieldsService();

    res.status(200).json(fields);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unexpected error occurred." });
    }
  }
};

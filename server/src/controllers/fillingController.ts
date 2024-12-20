import { Request, Response } from "express";
import { createFillingService, getFillingsService } from "../services/fillingService";
import { fillingSchema } from "../schemas/fillingSchema";

export const createFilling = async (req: Request, res: Response) => {
  try {
    const validatedData = fillingSchema.parse(req.body);

    const filling = await createFillingService(validatedData.fieldId, validatedData.value);

    res.status(201).json(filling);
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

export const getFillings = async (req: Request, res: Response) => {
  try {
    const fillings = await getFillingsService();
    res.status(200).json(fillings);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unexpected error occurred." });
    }
  }
};

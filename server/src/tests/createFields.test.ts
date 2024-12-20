import { createField } from "../controllers/fieldController";
import { Request, Response } from "express";
import { createFieldService } from "../services/fieldService";

jest.mock("../services/fieldService");

describe("Field Controller - createField", () => {
  it("should create a new field successfully", async () => {
    const mockCreateFieldService = createFieldService as jest.Mock;
    mockCreateFieldService.mockResolvedValue({
      id: "1",
      name: "Test Field",
      datatype: "string",
      isRequired: true,
    });

    const req = {
      body: {
        name: "Test Field",
        datatype: "string",
        isRequired: true,
      },
    } as Request;

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    await createField(req, res);

    expect(mockCreateFieldService).toHaveBeenCalledWith("Test Field", "string", true);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      id: "1",
      name: "Test Field",
      datatype: "string",
      isRequired: true,
    });
  });

  it("should return an error if field creation fails", async () => {
    const mockCreateFieldService = createFieldService as jest.Mock;
    mockCreateFieldService.mockRejectedValue(new Error("Database error"));

    const req = {
      body: {
        name: "Test Field",
        datatype: "string",
        isRequired: true,
      },
    } as Request;

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    await createField(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: "Database error" });
  });
});

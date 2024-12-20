import { createFilling } from "../controllers/fillingController";
import { Request, Response } from "express";
import { createFillingService } from "../services/fillingService";

jest.mock("../services/fillingService");

describe("Filling Controller - createFilling", () => {

  it("should create a new filling successfully", async () => {
    const mockCreateFillingService = createFillingService as jest.Mock;
    mockCreateFillingService.mockResolvedValue({
      id: "1",
      fieldId: "123",
      value: "Test Value",
      isRequired: true,
      createdAt: new Date(),
    });

    const req = {
      body: {
        fieldId: "123",
        value: "Test Value",
        isRequired: true,
      },
    } as Request;

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    await createFilling(req, res);

    expect(mockCreateFillingService).toHaveBeenCalledWith("123", "Test Value");

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      id: "1",
      fieldId: "123",
      value: "Test Value",
      isRequired: true,
      createdAt: expect.any(Date),
    });
  });

  it("should return an error if filling creation fails", async () => {
    const mockCreateFillingService = createFillingService as jest.Mock;
    mockCreateFillingService.mockRejectedValue(new Error("Database error"));

    const req = {
      body: {
        fieldId: "123",
        value: "Test Value",
        isRequired: true,
      },
    } as Request;

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    await createFilling(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: "Database error" });
  });
});

import { fillingSchema } from "../schemas/fillingSchema";
describe("Filling Schema Validation", () => {

  it("should validate a valid filling", () => {
    const filling = {
      fieldId: "123",
      value: "Some value",
      isRequired: true,
    };

    const result = fillingSchema.safeParse(filling);
    expect(result.success).toBe(true);
  });

  it("should fail if fieldId is empty", () => {
    const filling = {
      fieldId: "",
      value: "Some value",
      isRequired: true,
    };

    const result = fillingSchema.safeParse(filling);
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe("Field ID must be a non-empty string.");
  });

  it("should fail if value is not a valid type", () => {
    const filling = {
      fieldId: "1",
      value: [],
      isRequired: true,
    };

    const result = fillingSchema.safeParse(filling);
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe("Invalid input");
  });

  it("should fail if value is a string but isRequired is not a boolean", () => {
    const filling = {
      fieldId: "123",
      value: "Some value",
      isRequired: "yes",
    };

    const result = fillingSchema.safeParse(filling);
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe("Expected boolean, received string");
  });

  it("should fail if value is a number and fieldId is empty", () => {
    const filling = {
      fieldId: "",
      value: 42,
      isRequired: true,
    };

    const result = fillingSchema.safeParse(filling);
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe("Field ID must be a non-empty string.");
  });
});

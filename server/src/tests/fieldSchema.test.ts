import { fieldSchema } from "../schemas/fieldSchema";

describe("Field Schema Validation", () => {
  it("should validate a valid field", () => {
    const field = {
      name: "Field Name",
      datatype: "string",
      isRequired: true,
    };

    const result = fieldSchema.safeParse(field);
    expect(result.success).toBe(true);
  });

  it("should fail if name is empty", () => {
    const field = {
      name: "",
      datatype: "string",
      isRequired: true,
    };

    const result = fieldSchema.safeParse(field);
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe("Field name is required");
  });

  it("should fail if datatype is empty", () => {
    const field = {
      name: "Field Name",
      datatype: "",
      isRequired: true,
    };

    const result = fieldSchema.safeParse(field);
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe("Invalid datatype. Must be one of: string, number, boolean, date.");
  });

  it("should fail if isRequired is not a boolean", () => {
    const field = {
      name: "Field Name",
      datatype: "string",
      isRequired: "true",
    };

    const result = fieldSchema.safeParse(field);
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe("Expected boolean, received string");
  });
});

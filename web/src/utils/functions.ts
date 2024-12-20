
/**
 * Validates if name is fill
 * @param newName Field Name
 * @returns True / False
 */
export const validateInsert = (
  newName: string,
): boolean => {
  if (
    (newName == null || newName == "")
  ) {
    return true;
  }
  return false;
}

/**
 * Format Field Values
 * @param datatype Date Type (string | number | boolean | date)
 * @param value Value (string | number | boolean | Date)
 * @returns Converted field to String
 */
export function formatFieldValue(
  datatype: string,
  value: string | number | boolean | Date
): string {
  if (datatype === "date") {
    return new Date(value as Date).toLocaleString();
  } else if (datatype === "boolean") {
    return value === "1" || value === true ? "Verdadeiro" : "Falso";
  }
  return String(value);
}

import { formatFieldValue, validateInsert } from "../utils/functions";


describe('validateInsert', () => {
  it('should return true when the name is null', () => {
    expect(validateInsert(null)).toBe(true);
  });

  it('should return true when the name is an empty string', () => {
    expect(validateInsert('')).toBe(true);
  });

  it('should return false when the name is a non-empty string', () => {
    expect(validateInsert('John')).toBe(false);
  });

  it('should return true when the name is undefined', () => {
    expect(validateInsert(undefined)).toBe(true);
  });
});

describe('formatFieldValue', () => {
  it('should format a date correctly', () => {
    const date = new Date('2024-12-01T00:00:00Z');
    expect(formatFieldValue('date', date)).toBe(date.toLocaleString());
  });

  it('should format a boolean value as "Verdadeiro" for truthy values', () => {
    expect(formatFieldValue('boolean', true)).toBe('Verdadeiro');
    expect(formatFieldValue('boolean', '1')).toBe('Verdadeiro');
  });

  it('should format a boolean value as "Falso" for falsy values', () => {
    expect(formatFieldValue('boolean', false)).toBe('Falso');
    expect(formatFieldValue('boolean', '0')).toBe('Falso');
  });

  it('should return the string value when the datatype is not "date" or "boolean"', () => {
    expect(formatFieldValue('string', 'Test')).toBe('Test');
    expect(formatFieldValue('number', 123)).toBe('123');
    expect(formatFieldValue('other', 45)).toBe('45');
  });
});

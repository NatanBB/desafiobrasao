export interface FillingModel {
  id: string;
  fieldId: string;
  value: string | number | boolean | Date;
  createdAt: Date;
  isRequired: boolean;
  convertedField?: string;
}
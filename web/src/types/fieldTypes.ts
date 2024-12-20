export interface FieldModel {
  id: string;
  name: string;
  datatype: string | number | boolean | Date;
  createdAt: Date;
  isRequired: boolean;
}

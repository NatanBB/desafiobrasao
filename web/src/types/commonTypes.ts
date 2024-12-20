export type SelectOptionsModel = {
  value: string;
  label: string;
  datatype?: string;
}

export type NewFieldModel = {
  name: string,
  datatype: string,
  isRequired: boolean,
}

export type NewFillingModel = {
  fieldId: string
  fieldType: string,
  value: string | number | boolean | Date;
  isRequired: boolean;
}
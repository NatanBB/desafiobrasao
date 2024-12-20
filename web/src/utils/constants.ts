const STRING_OP = "string";
const NUMBER_OP = "number";
const BOOLEAN_OP = "boolean";
const DATE_OP = "date";

export function createSelectOptions() {
  return [
    { label: "Texto", value: STRING_OP },
    { label: "Número", value: NUMBER_OP },
    { label: "Booleano", value: BOOLEAN_OP },
    { label: "Data", value: DATE_OP }
  ];
}

export const SELECTOPTIONS = {
  options: () => createSelectOptions(),
  STRING_OP,
  NUMBER_OP,
  BOOLEAN_OP,
  DATE_OP
};

export const datatypeMap: Record<string, string> = {
  string: 'Texto',
  boolean: 'Booleano',
  number: 'Número',
  date: 'Data',
};
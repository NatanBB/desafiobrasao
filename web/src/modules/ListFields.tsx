import Table from "../components/Table";
import { FieldModel } from "../types/fieldTypes";

interface ListFieldsProps {
  listData: FieldModel[];
  loading: boolean;
}

export default function ListFields({
  listData,
  loading
}: ListFieldsProps) {
  const columns = [
    { header: "Nome", key: "name" },
    { header: "Tipo de Dado", key: "datatype" },
    { header: "Data de Criação", key: "createdAt" },
  ];

  return (
    <Table
      columns={columns}
      data={listData}
      loading={loading}
    />
  )
}
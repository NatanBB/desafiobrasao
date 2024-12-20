import Table from "../components/Table";
import { FillingModel } from "../types/fillingTypes";

interface ListFillingsProps {
  listData: FillingModel[];
  loading: boolean;
}

export default function ListFillings({
  listData,
  loading
}: ListFillingsProps) {
  const columns = [
    { header: "Campo", key: "convertedField" },
    { header: "Valor", key: "value" },
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
interface InputDateProps {
  value: Date;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function InputDate({
  onChange,
  value
}: InputDateProps) {
  return (
    <input
      type="date"
      className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md"
      value={value ? (value)?.toISOString().split("T")[0] : ""}
      onChange={onChange}
    />
  )
}
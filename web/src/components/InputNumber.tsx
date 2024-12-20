interface InputNumberProps {
  value: number;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

export default function InputNumber({
  value,
  placeholder,
  onChange
}: InputNumberProps) {
  return (
    <input
      type="number"
      className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}
import { ChangeEventHandler } from "react";

interface CheckboxProps {
  description: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  controlId: string;
  value: boolean;
}

export default function Checkbox({
  description,
  handleChange,
  controlId,
  value
}: CheckboxProps): JSX.Element {
  return (
    <div className="flex items-center mb-4 w-28">
      <input
        id={controlId}
        name={controlId}
        type="checkbox"
        value=""
        checked={value}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        onChange={handleChange}
      />
      <label
        htmlFor={controlId}
        className="ms-2 text-sm flex font-medium text-gray-900 dark:text-gray-300"
      >
        {description}
      </label>
    </div>
  )
}
import { ChangeEventHandler } from "react";

const fixedInputClass = "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-gray-950"

interface InputProps {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  type: "text" | "email" | "password";
  placeholder: string;
  label?: string;
  styles?: string;
  controlId: string;
}

export const Input = ({
  handleChange,
  value,
  type,
  placeholder,
  label,
  styles,
  controlId
}: InputProps): JSX.Element => {
  return (
    <>
      <div>
        {label ? <div> {label} </div> : <></>}
        <div className={label ? "mb-5" : "my-5"}>
          <input
            onChange={handleChange}
            value={value}
            type={type}
            className={fixedInputClass + ` ${styles}`}
            placeholder={placeholder}
            maxLength={50}
            id={controlId}
            name={controlId}
          />
        </div>
      </div>
    </>
  )
}
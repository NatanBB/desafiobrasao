import { ChangeEventHandler } from "react";

const fixedTextAreaClass = "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-gray-950"

interface TextAreaProps {
  handleChange: ChangeEventHandler<HTMLTextAreaElement>;
  value: string;
  placeholder: string;
  label?: string;
  styles?: string;
}

export const TextArea = ({
  handleChange,
  value,
  placeholder,
  label,
  styles
}: TextAreaProps): JSX.Element => {
  return (
    <>
      <div>
        {label ? <div> {label} </div> : <></>}
        <div className={label ? "mb-5" : "my-5"}>
          <textarea
            onChange={handleChange as any}
            value={value}
            className={fixedTextAreaClass + ` ${styles}`}
            placeholder={placeholder}
            style={{
              height: '10rem'
            }}
            maxLength={500}
          />
        </div>
      </div>
    </>
  )
}
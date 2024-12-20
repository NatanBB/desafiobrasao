import { ChangeEventHandler } from "react";
import { SelectOptionsModel } from "../types/commonTypes";

interface SelectOptionsProps {
  label: string;
  listOptions: SelectOptionsModel[];
  handleChange: ChangeEventHandler<HTMLSelectElement>;
  controlId: string;
  value: string;
}

const fixedInputClass =
  "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-gray-950";

export default function SelectOptions({
  label,
  listOptions,
  handleChange,
  controlId,
  value
}: SelectOptionsProps): JSX.Element {
  return (
    <>
      <div>
        {label && <div>{label}</div>}
        <div className={label ? "mb-5" : "my-5"}>
          <select
            className={fixedInputClass}
            onChange={handleChange}
            id={controlId}
            name={controlId}
            value={value}
          >
            {
              listOptions.map(o => {
                return (
                  <option value={o.value}>{o.label}</option>
                )
              })
            }
          </select>
        </div>
      </div>
    </>
  );
}

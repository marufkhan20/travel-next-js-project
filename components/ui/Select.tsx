"use client";
import { Dispatch, FC, SetStateAction, useState } from "react";

type SetStateFunction = Dispatch<SetStateAction<string>>;

interface IProps {
  options: string[];
  value?: string;
  onChange: SetStateFunction;
  type?: string;
}

const Select: FC<IProps> = ({ options, value, onChange, type }) => {
  const [openOpt, setOpenOpt] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <div className="relative">
      <div
        className={`border border-light text-base cursor-pointer bg-white ${
          type === "secondary"
            ? "rounded-full px-4 py-[6px]"
            : "rounded-md py-6 px-3"
        }`}
        onClick={() => setOpenOpt(!openOpt)}
      >
        {value || "Select"}
      </div>
      <div
        className={`transition-all duration-300 ${
          openOpt ? "opacity-100 visible" : "opacity-0 invisible"
        } z-50 absolute top-[84px] left-0 right-0 w-fit border border-light rounded-md py-4 px-5 shadow-xl shadow-gray-100 bg-white`}
      >
        {type !== "secondary" && (
          <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="inline-block w-full py-3 px-5 rounded-sm outline-none bg-[#F5F5F5]"
        />
        )}

        <div className="max-h-[220px] overflow-y-auto">
          {options
            ?.filter((value) =>
              value?.toLowerCase()?.includes(search?.toLocaleLowerCase())
            )
            ?.map((option) => (
              <li
                key={option}
                className={`block transition-all hover:text-primary cursor-pointer pt-5`}
                onClick={() => onChange(option)}
              >
                {option}
              </li>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Select;

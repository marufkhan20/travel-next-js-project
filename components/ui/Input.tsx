/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { FC, useEffect, useState } from "react";

interface IProps {
  type: string;
  value: string;
  id: string;
  onChange?: () => void;
  placeholder: string;
}

const Input: FC<IProps> = ({ type, value, placeholder, onChange, id }) => {
  const [cursorActive, setCursorActive] = useState(false);

  useEffect(() => {
    const handleCursorActivity = () => {
      setCursorActive(document?.activeElement?.id === id);
    };

    document.addEventListener("focusin", handleCursorActivity);
    document.addEventListener("focusout", handleCursorActivity);

    return () => {
      document.removeEventListener("focusin", handleCursorActivity);
      document.removeEventListener("focusout", handleCursorActivity);
    };
  }, []);

  return (
    <div
      className={`pb-1 border pt-3 transition-all rounded-md ${
        cursorActive ? "border-gray-950" : "border-light"
      } relative`}
    >
      <label
        htmlFor=""
        className={`absolute transition-all duration-200 left-[14px] ${
          cursorActive || value ? "top-3" : "top-[50%] translate-y-[-50%]"
        } text-body text-base`}
      >
        {placeholder}
      </label>
      <input
        type={type}
        value={value}
        id={id}
        onChange={onChange}
        className="block w-full outline-none pb-3 mt-5 px-[14px]"
      />
    </div>
  );
};

export default Input;

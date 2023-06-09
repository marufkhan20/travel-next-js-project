/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { FC, useEffect, useState } from "react";

interface IProps {
  value: string;
  id: string;
  onChange?: () => void;
  placeholder: string;
  height?: string;
}

const Textarea: FC<IProps> = ({ value, placeholder, onChange, id, height }) => {
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
          cursorActive || value ? "top-3" : "top-9 translate-y-[-50%]"
        } text-body text-base`}
      >
        {placeholder}
      </label>
      <textarea
        value={value}
        id={id}
        onChange={onChange}
        className={`block w-full outline-none pb-3 mt-5 px-[14px] ${
          height ? `min-h-[${height}]` : "min-h-[140px]"
        }`}
      />
    </div>
  );
};

export default Textarea;

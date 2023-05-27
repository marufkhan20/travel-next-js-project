"use client";
import { FC, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface IProps {
  message: string;
  type: string;
}

const Notify: FC<IProps> = ({ message, type }) => {
  const [showMessage, setShowMessage] = useState(true);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (!showMessage) {
      setTimeout(() => {
        setHide(true);
      }, 300);
    }
  }, [showMessage]);

  const styles = `${hide && "hidden"} transition-all duration-200 ${
    showMessage ? "opacity-100 visible" : "opacity-0 invisible"
  }
    py-6 px-3 pl-6 rounded-md flex justify-between gap-5 items-center font-medium
    ${
      type === "info"
        ? "text-[#4780aa] bg-[#CDE9F6]"
        : type === "warn"
        ? "text-[#927238] bg-[#F7F3D7]"
        : type === "error"
        ? "text-[#ab3331] bg-[#ECC8C5]"
        : type === "success"
        ? "text-[#5b7052] bg-[#DEF2D7]"
        : ""
    }
  `;

  return (
    <div className={styles}>
      <span>{message}</span>
      <AiOutlineClose
        onClick={() => setShowMessage(false)}
        className="text-xl cursor-pointer"
      />
    </div>
  );
};

export default Notify;

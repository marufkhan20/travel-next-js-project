import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const RadioBox: FC<IProps> = ({ children }) => {
  return (
    <div className="flex items-center gap-3">
      <input className="scale-125" type="radio" id={`${children}`} />
      <label
        className="text-heading text-[15px] cursor-pointer"
        htmlFor={`${children}`}
      >
        {children}
      </label>
    </div>
  );
};

export default RadioBox;

import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
  position?: string;
}

const Col: FC<IProps> = ({ children, className, position }) => {
  return (
    <td
      className={`${className} py-4 text-[15px] text-heading border-b border-light border-dashed ${
        position === "first" && "pl-6"
      } ${position === "last" && "pr-6"}`}
    >
      {children}
    </td>
  );
};

export default Col;

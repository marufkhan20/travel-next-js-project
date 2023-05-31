import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
}

const Col: FC<IProps> = ({ children, className }) => {
  return (
    <div className={`py-6 whitespace-nowrap ${className}`}>{children}</div>
  );
};

export default Col;

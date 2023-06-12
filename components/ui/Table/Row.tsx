import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Row: FC<IProps> = ({ children }) => {
  return <tr>{children}</tr>;
};

export default Row;

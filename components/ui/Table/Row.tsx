import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Row: FC<IProps> = ({ children }) => {
  return (
    <div className="flex justify-between gap-3 text-[15px] border-b border-dashed border-gray-300 px-6">
      {children}
    </div>
  );
};

export default Row;

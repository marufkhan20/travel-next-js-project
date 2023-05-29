import { FC, ReactNode } from "react";

interface IProps {
  title: string;
  children: ReactNode;
}

const OptionLayout: FC<IProps> = ({ title, children }) => {
  return (
    <div className="pb-6 border-b border-light">
      <h3 className="mt-6 mb-5 text-heading text-lg font-medium">{title}</h3>
      {children}
    </div>
  );
};

export default OptionLayout;

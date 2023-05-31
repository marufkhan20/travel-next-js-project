import { FC } from "react";

interface IProps {
  title: string;
  balance: string;
  description: string;
  icon: string;
}

const InfoItem: FC<IProps> = ({ title, balance, description, icon }) => {
  return (
    <div className="bg-white p-8 rounded flex items-center justify-between gap-5 shadow shadow-gray-100">
      <div>
        <h4 className="text-base text-heading font-medium mb-1">{title}</h4>
        <h2 className="text-[26px] font-semibold text-heading">${balance}</h2>
        <span className="text-[15px] text-body">{description}</span>
      </div>
      <img src={`/icons/info/${icon}.svg`} alt="info" />
    </div>
  );
};

export default InfoItem;

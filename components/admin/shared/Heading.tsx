import { FC } from "react";

interface IProps {
  title: string;
  subTitle: string;
}

const Heading: FC<IProps> = ({ title, subTitle }) => {
  return (
    <div className="mb-[65px]">
      <h2 className="text-3xl font-semibold text-heading mb-2">{title}</h2>
      <p className="text-[15px] text-body">{subTitle}</p>
    </div>
  );
};

export default Heading;

import { FC } from "react";

interface IProps {
  heading: string | React.ReactNode;
  subHeading: string | React.ReactNode;
}

const Heading: FC<IProps> = ({ heading, subHeading }) => {
  return (
    <div>
      <h2 className="text-heading text-3xl font-semibold mb-[10px] leading-[44px]">
        {heading}
      </h2>
      <p className="text-body">{subHeading}</p>
    </div>
  );
};

export default Heading;

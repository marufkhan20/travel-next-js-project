import { FC, ReactNode } from "react";

interface IProps {
  type?: string;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: FC<IProps> = ({
  type = "primary",
  children,
  onClick,
  className,
}) => {
  const styles = `inline-block px-6 py-3 rounded-[4px] text-[15px] font-medium tranistion-all duration-200 ${
    type === "primary"
      ? "bg-primary text-white hover:bg-dark"
      : type === "border-less"
      ? "bg-[#F5F6FD] text-primary hover:bg-primary hover:text-white"
      : type === "border"
      ? "border border-primary text-primary hover:bg-primary hover:text-white"
      : type === "secondary"
      ? "bg-secondary text-white hover:bg-primary"
      : type === "warn"
      ? "bg-[#F8D448] text-heading hover:bg-dark hover:text-white"
      : type === "light"
      ? "bg-white text-heading font-normal border border-white"
      : type === "light-hover"
      ? "bg-transparent border border-white text-white hover:bg-white hover:text-heading font-normal"
      : ""
  } ${className}`;

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
};

export default Button;

import { FC, ReactNode } from "react";

interface IProps {
  headings: string[];
  children: ReactNode;
}

const Table: FC<IProps> = ({ headings, children }) => {
  return (
    <table className="min-w-full bg-white">
      <thead className="bg-light-thirdary">
        <tr>
          {headings?.map((item, idx) => (
            <th
              key={item}
              className={`text-left py-4 ${
                idx === 0 && "pl-6 rounded-tl-lg rounded-bl-lg"
              } ${
                idx + 1 === headings?.length &&
                "pr-6 rounded-tr-lg rounded-br-lg"
              } text-base text-heading font-medium`}
            >
              {item === "checkbox" ? (
                <input type="checkbox" className="bg-transparent" />
              ) : (
                item
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;

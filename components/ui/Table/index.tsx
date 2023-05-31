import { FC, ReactNode } from "react";

interface IProps {
  headings: string[];
  children: ReactNode;
}

const Table: FC<IProps> = ({ headings, children }) => {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <div
                className={`flex items-center justify-between gap-3 bg-[#f5f5f5] rounded-xl px-6`}
              >
                {headings?.map((item) => (
                  <div
                    key={item}
                    className="py-4 whitespace-nowrap font-medium text-gray-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;

import { FC } from "react";

interface IProps {
  activeTab: number;
  setActiveTab(tab: number): void;
}

const Tabs: FC<IProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex items-center gap-9">
      <li
        className={`text-lg font-medium cursor-pointer text-body transition-all hover:text-primary pb-2 border-b-2 ${
          activeTab === 1 ? "border-primary text-primary" : "border-transparent"
        }`}
        onClick={() => setActiveTab(1)}
      >
        1. Content
      </li>
      <li
        className={`text-lg font-medium cursor-pointer text-body transition-all hover:text-primary pb-2 border-b-2 ${
          activeTab === 2 ? "border-primary text-primary" : "border-transparent"
        }`}
        onClick={() => setActiveTab(2)}
      >
        2. Location
      </li>
      <li
        className={`text-lg font-medium cursor-pointer text-body transition-all hover:text-primary pb-2 border-b-2 ${
          activeTab === 3 ? "border-primary text-primary" : "border-transparent"
        }`}
        onClick={() => setActiveTab(3)}
      >
        3. Pricing
      </li>
      <li
        className={`text-lg font-medium cursor-pointer text-body transition-all hover:text-primary pb-2 border-b-2 ${
          activeTab === 4 ? "border-primary text-primary" : "border-transparent"
        }`}
        onClick={() => setActiveTab(4)}
      >
        4. Attributes
      </li>
    </div>
  );
};

export default Tabs;

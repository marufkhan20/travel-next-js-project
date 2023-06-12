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
        All Booking
      </li>
      <li
        className={`text-lg font-medium cursor-pointer text-body transition-all hover:text-primary pb-2 border-b-2 ${
          activeTab === 2 ? "border-primary text-primary" : "border-transparent"
        }`}
        onClick={() => setActiveTab(2)}
      >
        Completed
      </li>
      <li
        className={`text-lg font-medium cursor-pointer text-body transition-all hover:text-primary pb-2 border-b-2 ${
          activeTab === 3 ? "border-primary text-primary" : "border-transparent"
        }`}
        onClick={() => setActiveTab(3)}
      >
        Processing
      </li>
      <li
        className={`text-lg font-medium cursor-pointer text-body transition-all hover:text-primary pb-2 border-b-2 ${
          activeTab === 4 ? "border-primary text-primary" : "border-transparent"
        }`}
        onClick={() => setActiveTab(4)}
      >
        Confirmed
      </li>
      <li
        className={`text-lg font-medium cursor-pointer text-body transition-all hover:text-primary pb-2 border-b-2 ${
          activeTab === 4 ? "border-primary text-primary" : "border-transparent"
        }`}
        onClick={() => setActiveTab(4)}
      >
        Cancelled
      </li>
      <li
        className={`text-lg font-medium cursor-pointer text-body transition-all hover:text-primary pb-2 border-b-2 ${
          activeTab === 4 ? "border-primary text-primary" : "border-transparent"
        }`}
        onClick={() => setActiveTab(4)}
      >
        Paid
      </li>
      <li
        className={`text-lg font-medium cursor-pointer text-body transition-all hover:text-primary pb-2 border-b-2 ${
          activeTab === 4 ? "border-primary text-primary" : "border-transparent"
        }`}
        onClick={() => setActiveTab(4)}
      >
        Unpaid
      </li>
      <li
        className={`text-lg font-medium cursor-pointer text-body transition-all hover:text-primary pb-2 border-b-2 ${
          activeTab === 4 ? "border-primary text-primary" : "border-transparent"
        }`}
        onClick={() => setActiveTab(4)}
      >
        Partial Payment
      </li>
    </div>
  );
};

export default Tabs;

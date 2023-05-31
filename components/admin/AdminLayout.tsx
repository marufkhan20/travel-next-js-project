"use client";
import { FC, ReactNode, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface IProps {
  children: ReactNode;
}

const AdminLayout: FC<IProps> = ({ children }) => {
  const [fullScreen, setFullScreen] = useState(true);

  return (
    <main className="bg-light-thirdary min-h-screen">
      <Header setFullScreen={setFullScreen} fullScreen={fullScreen} />

      <div className="flex justify-between mt-[87px]">
        <div
          className={`transition-all duration-300 ${
            fullScreen ? "w-0 invisible overflow-hidden" : "w-[17%] visible"
          }`}
        >
          <Sidebar />
        </div>
        <div
          className={`transition-all duration-300 ${
            fullScreen ? "w-full" : "w-[83%]"
          } pt-16 px-14`}
        >
          {children}
        </div>
      </div>
    </main>
  );
};

export default AdminLayout;

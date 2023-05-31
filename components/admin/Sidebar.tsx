"use client";
import { useState } from "react";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState("");
  return (
    <aside className="min-h-screen bg-white px-9 pt-[70px] flex flex-col shadow-lg shadow-light-secondary">
      <li className="flex items-center gap-3 font-medium text-[15px] cursor-pointer transition-all text-primary px-2 rounded bg-light-secondary py-4">
        <img src="/icons/dashboard.svg" alt="icon" />
        <span>Dashboard</span>
      </li>
      <li className="flex items-center gap-3 font-medium text-[15px] text-heading cursor-pointer transition-all hover:text-primary px-2 rounded hover:bg-light-secondary py-4">
        <img src="/icons/booking.svg" alt="icon" />
        <span>Booking Manager</span>
      </li>
      <div>
        <li
          className="flex items-center gap-3 font-medium text-[15px] text-heading cursor-pointer transition-all hover:text-primary px-2 rounded hover:bg-light-secondary py-4"
          onClick={() =>
            setOpenMenu(openMenu === "/manage-hotel" ? "" : "/manage-hotel")
          }
        >
          <img src="/icons/hotel.svg" alt="icon" />
          <span>Manage Hotel</span>
        </li>
        <div
          className={`transition-all duration-1000 ${
            openMenu === "/manage-hotel"
              ? "h-fit overflow-auto"
              : "h-0 overflow-hidden"
          }`}
        >
          <div className={`ml-9 mt-5 mb-2 flex flex-col gap-2`}>
            <li className="list-disc cursor-pointer transition-all hover:text-primary">
              All Hotels
            </li>
            <li className="list-disc cursor-pointer transition-all hover:text-primary">
              Add Hotel
            </li>
            <li className="list-disc cursor-pointer transition-all hover:text-primary">
              Recovery
            </li>
          </div>
        </div>
      </div>
      <li className="flex items-center gap-3 font-medium text-[15px] text-heading cursor-pointer transition-all hover:text-primary px-2 rounded hover:bg-light-secondary py-4">
        <img src="/icons/map.svg" alt="icon" />
        <span>Manage Tour</span>
      </li>
      <li className="flex items-center gap-3 font-medium text-[15px] text-heading cursor-pointer transition-all hover:text-primary px-2 rounded hover:bg-light-secondary py-4">
        <img src="/icons/sneakers.svg" alt="icon" />
        <span>Manage Activity</span>
      </li>
      <li className="flex items-center gap-3 font-medium text-[15px] text-heading cursor-pointer transition-all hover:text-primary px-2 rounded hover:bg-light-secondary py-4">
        <img src="/icons/house.svg" alt="icon" />
        <span>Manage Holiday Rental</span>
      </li>
      <li className="flex items-center gap-3 font-medium text-[15px] text-heading cursor-pointer transition-all hover:text-primary px-2 rounded hover:bg-light-secondary py-4">
        <img src="/icons/taxi.svg" alt="icon" />
        <span>Manage Car</span>
      </li>
      <li className="flex items-center gap-3 font-medium text-[15px] text-heading cursor-pointer transition-all hover:text-primary px-2 rounded hover:bg-light-secondary py-4">
        <img src="/icons/canoe.svg" alt="icon" />
        <span>Manage Cruise</span>
      </li>
      <li className="flex items-center gap-3 font-medium text-[15px] text-heading cursor-pointer transition-all hover:text-primary px-2 rounded hover:bg-light-secondary py-4">
        <img src="/icons/airplane.svg" alt="icon" />
        <span>Manage Flights</span>
      </li>
      <li className="flex items-center gap-3 font-medium text-[15px] text-heading cursor-pointer transition-all hover:text-primary px-2 rounded hover:bg-light-secondary py-4">
        <img src="/icons/log-out.svg" alt="icon" />
        <span>Logout</span>
      </li>
    </aside>
  );
};

export default Sidebar;

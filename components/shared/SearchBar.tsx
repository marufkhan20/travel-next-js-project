"use client";
import { FC, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { HiMinus, HiPlus } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { RiMapPinLine } from "react-icons/ri";
import Button from "../ui/Button";

interface IProps {
  type?: string;
}

const SearchBar: FC<IProps> = ({ type }) => {
  const [locationBox, setLocationBox] = useState(false);
  const [location, setLocation] = useState("");
  const [showGuestBox, setShowGuestBox] = useState(false);

  return (
    <div
      className={`justify-between mx-auto flex flex-wrap items-center bg-white ${
        type === "secondary" ? "rounded-md" : "rounded-full"
      } px-3`}
    >
      <div className="flex flex-col gap-1 ml-7 py-1 relative">
        <label
          className="text-[15px] font-medium text-heading"
          onClick={() => setLocationBox(!locationBox)}
        >
          Location
        </label>
        <div className="flex items-center">
          <input
            className="outline-none text-heading placeholder:text-body text-[15px]"
            type="text"
            placeholder="Where are you going?"
            onClick={() => setLocationBox(!locationBox)}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          {location && (
            <IoClose
              className="text-primary font-semibold cursor-pointer"
              onClick={() => setLocation("")}
            />
          )}
        </div>

        {/* location list */}
        <div
          className={`transition-all duration-500 ${
            locationBox ? "visible opacity-100" : "invisible opacity-0"
          } absolute top-[80px] -left-8 rounded-md min-w-[500px] bg-white p-7 z-50 shadow-lg`}
        >
          <div
            className="p-4 flex gap-2 transition-all hover:bg-light-secondary rounded-md cursor-pointer"
            onClick={() => {
              setLocation("London");
              setLocationBox(false);
            }}
          >
            <RiMapPinLine className="text-body text-2xl" />
            <div>
              <h4 className="text-heading text-[15px] font-medium m-0">
                London
              </h4>
              <span className="text-body text-sm">
                Greater London, United Kingdom
              </span>
            </div>
          </div>
          <div
            className="p-4 flex gap-2 transition-all hover:bg-light-secondary rounded-md cursor-pointer"
            onClick={() => {
              setLocation("Peris");
              setLocationBox(false);
            }}
          >
            <RiMapPinLine className="text-body text-2xl" />
            <div>
              <h4 className="text-heading text-[15px] font-medium m-0">
                London
              </h4>
              <span className="text-body text-sm">
                Greater London, United Kingdom
              </span>
            </div>
          </div>
          <div
            className="p-4 flex gap-2 transition-all hover:bg-light-secondary rounded-md cursor-pointer"
            onClick={() => {
              setLocation("New York");
              setLocationBox(false);
            }}
          >
            <RiMapPinLine className="text-body text-2xl" />
            <div>
              <h4 className="text-heading text-[15px] font-medium m-0">
                London
              </h4>
              <span className="text-body text-sm">
                Greater London, United Kingdom
              </span>
            </div>
          </div>
          <div
            className="p-4 flex gap-2 transition-all hover:bg-light-secondary rounded-md cursor-pointer"
            onClick={() => {
              setLocation("Madrid");
              setLocationBox(false);
            }}
          >
            <RiMapPinLine className="text-body text-2xl" />
            <div>
              <h4 className="text-heading text-[15px] font-medium m-0">
                London
              </h4>
              <span className="text-body text-sm">
                Greater London, United Kingdom
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-l border-light h-12"></div>
      <div className="flex flex-col gap-1 ml-5 py-1">
        <label className="text-[15px] font-medium text-heading">
          Check in - Check out
        </label>
        <span className="outline-none text-body text-[15px]">
          Thu 12 May - Wed 15 Jun
        </span>
      </div>
      <div className="border-l border-light h-12"></div>
      <div className="flex flex-col gap-1 ml-5 py-1 relative">
        <label
          className="text-[15px] font-medium text-heading"
          onClick={() => setShowGuestBox(!showGuestBox)}
        >
          Guest
        </label>
        <span
          className="outline-none text-body text-[15px]"
          onClick={() => setShowGuestBox(!showGuestBox)}
        >
          6 adults - 4 childeren - 2 room
        </span>

        {/* guest info */}
        <div
          className={`transition-all duration-500 ${
            showGuestBox ? "visible opacity-100" : "invisible opacity-0"
          } absolute top-[80px] -left-14 rounded-md min-w-[400px] bg-white px-7 z-50 shadow-lg`}
        >
          <div className="text-heading py-6 flex items-center justify-between gap-5 border-b border-light">
            <h3 className="text-[15px] font-medium">Adults</h3>
            <div className="flex items-center gap-5">
              <div className="w-[38px] h-[38px] border-[1.5px] flex items-center justify-center text-primary border-primary rounded-md transition-all hover:bg-primary hover:text-white cursor-pointer">
                <HiMinus className="text-lg" />
              </div>
              <span>7</span>
              <div className="w-[38px] h-[38px] border-[1.5px] flex items-center justify-center text-primary border-primary rounded-md transition-all hover:bg-primary hover:text-white cursor-pointer">
                <HiPlus className="text-lg" />
              </div>
            </div>
          </div>
          <div className="text-heading py-6 flex items-center justify-between gap-5 border-b border-light">
            <div>
              <h3 className="text-[15px] font-medium">Adults</h3>
              <span className="text-sm text-body">Ages 0 - 17</span>
            </div>
            <div className="flex items-center gap-5">
              <div className="w-[38px] h-[38px] border-[1.5px] flex items-center justify-center text-primary border-primary rounded-md transition-all hover:bg-primary hover:text-white cursor-pointer">
                <HiMinus className="text-lg" />
              </div>
              <span>7</span>
              <div className="w-[38px] h-[38px] border-[1.5px] flex items-center justify-center text-primary border-primary rounded-md transition-all hover:bg-primary hover:text-white cursor-pointer">
                <HiPlus className="text-lg" />
              </div>
            </div>
          </div>
          <div className="text-heading py-6 flex items-center justify-between gap-5">
            <h3 className="text-[15px] font-medium">Adults</h3>
            <div className="flex items-center gap-5">
              <div className="w-[38px] h-[38px] border-[1.5px] flex items-center justify-center text-primary border-primary rounded-md transition-all hover:bg-primary hover:text-white cursor-pointer">
                <HiMinus className="text-lg" />
              </div>
              <span>7</span>
              <div className="w-[38px] h-[38px] border-[1.5px] flex items-center justify-center text-primary border-primary rounded-md transition-all hover:bg-primary hover:text-white cursor-pointer">
                <HiPlus className="text-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-2">
        <Button
          className={`${
            type === "secondary"
              ? "rounded-md py-4 px-10"
              : "rounded-full py-5 px-9"
          } flex items-center gap-2`}
        >
          <BiSearch className="text-xl" />
          <span>Search</span>
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;

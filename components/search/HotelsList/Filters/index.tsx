import Button from "@/components/ui/Button";
import CheckBox from "@/components/ui/CheckBox";
import RadioBox from "@/components/ui/RadioBox";
import { BsFillPinMapFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import OptionLayout from "../OptionLayout";

const Filters = () => {
  return (
    <div>
      <div className="relative">
        <img src="/icons/map.png" className="w-full" alt="map" />
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <Button type="border-less">
            <div className="flex items-center gap-2">
              <BsFillPinMapFill />
              <span>Show on map</span>
            </div>
          </Button>
        </div>
      </div>

      {/* search box start */}
      <OptionLayout title="Search by property name">
        <div className="flex items-center gap-4 border border-light rounded-md p-3">
          <FiSearch className="text-2xl" />
          <input
            className="w-full outline-none"
            type="text"
            placeholder="e.g. Best Western"
          />
        </div>
      </OptionLayout>
      {/* search box end */}

      {/* deals box start */}
      <OptionLayout title="Deals">
        <ul className="flex flex-col gap-3 ml-1">
          <CheckBox>Free cancellation</CheckBox>
          <CheckBox>Reserve now, pay at stay</CheckBox>
          <CheckBox>Properties with special offers</CheckBox>
        </ul>
      </OptionLayout>
      {/* deals box end */}

      {/* Popular Filters start */}
      <OptionLayout title="Popular Filters">
        <ul className="flex flex-col gap-3 ml-1">
          <li className="flex items-center justify-between">
            <CheckBox>Free cancellation</CheckBox>
            <span className="text-[15px] text-body">92</span>
          </li>
          <li className="flex items-center justify-between">
            <CheckBox>Romantic</CheckBox>
            <span className="text-[15px] text-body">45</span>
          </li>
          <li className="flex items-center justify-between">
            <CheckBox>Airport Transfer</CheckBox>
            <span className="text-[15px] text-body">21</span>
          </li>
          <li className="flex items-center justify-between">
            <CheckBox>WiFi Included</CheckBox>
            <span className="text-[15px] text-body">78</span>
          </li>
          <li className="flex items-center justify-between">
            <CheckBox>5 Star</CheckBox>
            <span className="text-[15px] text-body">679</span>
          </li>
        </ul>
      </OptionLayout>
      {/* Popular Filters end */}

      {/* Amenities start */}
      <OptionLayout title="Amenities">
        <ul className="flex flex-col gap-3 ml-1">
          <li className="flex items-center justify-between">
            <CheckBox>Breakfast Included</CheckBox>
            <span className="text-[15px] text-body">92</span>
          </li>
          <li className="flex items-center justify-between">
            <CheckBox>WiFi Included</CheckBox>
            <span className="text-[15px] text-body">45</span>
          </li>
          <li className="flex items-center justify-between">
            <CheckBox>Pool</CheckBox>
            <span className="text-[15px] text-body">21</span>
          </li>
          <li className="flex items-center justify-between">
            <CheckBox>Restaurant</CheckBox>
            <span className="text-[15px] text-body">78</span>
          </li>
          <li className="flex items-center justify-between">
            <CheckBox>Air conditioning</CheckBox>
            <span className="text-[15px] text-body">679</span>
          </li>
        </ul>
      </OptionLayout>
      {/* Amenities end */}

      {/* Star Rating start */}
      <OptionLayout title="Star Rating">
        <ul className="flex items-center justify-between">
          <li className="py-[5px] px-6 cursor-pointer font-medium text-primary text-[15px] transition-all hover:text-white hover:bg-primary rounded-full bg-[#F5F6FD] inline-block">
            1
          </li>
          <li className="py-[5px] px-6 cursor-pointer font-medium text-primary text-[15px] transition-all hover:text-white hover:bg-primary rounded-full bg-[#F5F6FD] inline-block">
            2
          </li>
          <li className="py-[5px] px-6 cursor-pointer font-medium text-primary text-[15px] transition-all hover:text-white hover:bg-primary rounded-full bg-[#F5F6FD] inline-block">
            3
          </li>
          <li className="py-[5px] px-6 cursor-pointer font-medium text-primary text-[15px] transition-all hover:text-white hover:bg-primary rounded-full bg-[#F5F6FD] inline-block">
            4
          </li>
          <li className="py-[5px] px-6 cursor-pointer font-medium text-primary text-[15px] transition-all hover:text-white hover:bg-primary rounded-full bg-[#F5F6FD] inline-block">
            5
          </li>
        </ul>
      </OptionLayout>
      {/* Star Rating end */}

      {/* Guest Rating start */}
      <OptionLayout title="Guest Rating">
        <ul className="flex flex-col gap-3 ml-1">
          <li className="flex items-center justify-between">
            <RadioBox>Any</RadioBox>
            <span className="text-[15px] text-body">92</span>
          </li>
          <li className="flex items-center justify-between">
            <RadioBox>Wonderful 4.5+</RadioBox>
            <span className="text-[15px] text-body">45</span>
          </li>
          <li className="flex items-center justify-between">
            <RadioBox>Very good 4+</RadioBox>
            <span className="text-[15px] text-body">21</span>
          </li>
          <li className="flex items-center justify-between">
            <RadioBox>Good 3.5+</RadioBox>
            <span className="text-[15px] text-body">78</span>
          </li>
        </ul>
      </OptionLayout>
      {/* Guest Rating end */}

      {/* Style start */}
      <OptionLayout title="Style">
        <ul className="flex flex-col gap-3 ml-1">
          <li className="flex items-center justify-between">
            <CheckBox>Budget</CheckBox>
            <span className="text-[15px] text-body">92</span>
          </li>
          <li className="flex items-center justify-between">
            <CheckBox>Mid-range</CheckBox>
            <span className="text-[15px] text-body">45</span>
          </li>
          <li className="flex items-center justify-between">
            <CheckBox>Luxury</CheckBox>
            <span className="text-[15px] text-body">21</span>
          </li>
          <li className="flex items-center justify-between">
            <CheckBox>Family-friendly</CheckBox>
            <span className="text-[15px] text-body">78</span>
          </li>
          <li className="flex items-center justify-between">
            <CheckBox>Business</CheckBox>
            <span className="text-[15px] text-body">679</span>
          </li>
        </ul>
      </OptionLayout>
      {/* Style end */}

      {/* Neighborhood start */}
      <OptionLayout title="Neighborhood">
        <ul className="flex flex-col gap-3 ml-1">
          <li className="flex items-center justify-between">
            <CheckBox>Central London</CheckBox>
            <span className="text-[15px] text-body">92</span>
          </li>
          <li className="flex items-center justify-between">
            <CheckBox>Guests favourite area</CheckBox>
            <span className="text-[15px] text-body">45</span>
          </li>
          <li className="flex items-center justify-between">
            <CheckBox>Westminster Borough</CheckBox>
            <span className="text-[15px] text-body">21</span>
          </li>
          <li className="flex items-center justify-between">
            <CheckBox>Kensington and Chelsea</CheckBox>
            <span className="text-[15px] text-body">78</span>
          </li>
          <li className="flex items-center justify-between">
            <CheckBox>Oxford Street</CheckBox>
            <span className="text-[15px] text-body">679</span>
          </li>
        </ul>
      </OptionLayout>
      {/* Neighborhood end */}
    </div>
  );
};

export default Filters;

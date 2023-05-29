import { BsArrowDownUp } from "react-icons/bs";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import HotelItem from "./HotelItem";

const Hotels = () => {
  return (
    <section>
      {/* filters */}
      <div className="flex items-center justify-between pb-8 border-b border-light">
        <span className="text-lg text-heading font-medium">
          3,269 properties <span className="font-normal">in Europe</span>
        </span>
        <button className="flex items-center gap-2 text-[15px] font-medium text-primary bg-light-secondary px-6 py-[10px] rounded-full transition-all hover:bg-primary hover:text-white">
          <BsArrowDownUp />
          <span>Top picks for your search</span>
        </button>
      </div>

      {/* hotels list */}
      <div>
        <HotelItem />
        <HotelItem />
        <HotelItem />
        <HotelItem />
        <HotelItem />
        <HotelItem />
        <HotelItem />
      </div>

      {/* paginations */}
      <div className="flex items-center justify-between gap-5 mt-8">
        <li className="w-10 h-10 flex items-center justify-center text-xs transition-all hover:bg-primary hover:border-primary hover:text-white cursor-pointer rounded-full border border-light">
          <SlArrowLeft />
        </li>
        <div className="flex items-center gap-4">
          <li className="w-10 h-10 flex items-center justify-center text-xs transition-all hover:bg-heading hover:text-white cursor-pointer rounded-full text-heading">
            <span className="text-base">1</span>
          </li>
          <li className="w-10 h-10 flex items-center justify-center text-xs transition-all bg-light-thirdary rounded-full text-heading">
            <span className="text-base">2</span>
          </li>
          <li className="w-10 h-10 flex items-center justify-center text-xs transition-all hover:bg-heading hover:text-white cursor-pointer rounded-full text-heading">
            <span className="text-base">3</span>
          </li>
          <li className="w-10 h-10 flex items-center justify-center text-xs transition-all hover:bg-heading hover:text-white cursor-pointer rounded-full text-heading">
            <span className="text-base">4</span>
          </li>
          <li className="w-10 h-10 flex items-center justify-center text-xs transition-all hover:bg-heading hover:text-white cursor-pointer rounded-full text-heading">
            <span className="text-base">5</span>
          </li>
          <li className="w-10 h-10 flex items-center justify-center text-xs transition-all rounded-full text-heading">
            <span className="text-base">...</span>
          </li>
          <li className="w-10 h-10 flex items-center justify-center text-xs transition-all hover:bg-heading hover:text-white cursor-pointer rounded-full text-heading">
            <span className="text-base">20</span>
          </li>
        </div>
        <li className="w-10 h-10 flex items-center justify-center text-xs transition-all hover:bg-primary hover:border-primary hover:text-white cursor-pointer rounded-full border border-light">
          <SlArrowRight />
        </li>
      </div>

      <div className="mt-7 text-center mb-14">
        <span className="text-body text-sm">
          1 – 20 of 300+ properties found
        </span>
      </div>
    </section>
  );
};

export default Hotels;

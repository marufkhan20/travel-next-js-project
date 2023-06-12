import Paginations from "@/components/admin/shared/Paginations";
import { BsArrowDownUp } from "react-icons/bs";
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
      <Paginations />

      <div className="mt-7 text-center mb-14">
        <span className="text-body text-sm">
          1 – 20 of 300+ properties found
        </span>
      </div>
    </section>
  );
};

export default Hotels;

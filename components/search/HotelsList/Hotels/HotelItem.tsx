import Button from "@/components/ui/Button";
import { FiArrowUpRight } from "react-icons/fi";

const HotelItem = () => {
  return (
    <div className="py-6 border-b border-light flex gap-5 w-full">
      <div className="w-[22%]">
        <img
          src="https://creativelayers.net/themes/gotrip-html/img/lists/hotel/1/1.png"
          className="w-full rounded-md h-full"
          alt="hotel image"
        />
      </div>

      <div className="flex justify-between gap-5 w-[78%]">
        <div>
          <h3 className="font-medium text-lg text-heading mb-3">
            Great Northern Hotel, a Tribute Portfolio Hotel, London
          </h3>
          <div className="flex items-center text-body text-sm gap-2">
            <span>Westminster Borough, London</span>
            <a href="#" className="text-primary underline">
              Show on map
            </a>
            <span>2 km to city center</span>
          </div>
          <div className="mt-7">
            <h5 className="text-sm font-medium text-heading">King Room</h5>
            <span className="text-sm text-body">1 extra-large double bed</span>
          </div>
          <div className="mt-4 flex flex-col">
            <span className="text-sm font-medium text-[#008009]">
              Free cancellation
            </span>
            <span className="text-sm text-[#008009]">
              You can cancel later, so lock in this great price today.
            </span>
          </div>
          <div className="mt-6 flex items-center gap-2">
            <li className="px-5 py-[6px] border border-light rounded-full block text-sm text-heading">
              Breakfast
            </li>
            <li className="px-5 py-[6px] border border-light rounded-full block text-sm text-heading">
              WiFi
            </li>
            <li className="px-5 py-[6px] border border-light rounded-full block text-sm text-heading">
              Spa
            </li>
            <li className="px-5 py-[6px] border border-light rounded-full block text-sm text-heading">
              Bar
            </li>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-end gap-2">
            <div className="text-right">
              <h6 className="text-heading text-sm font-medium">Exceptional</h6>
              <span className="text-body text-sm">3,014 reviews</span>
            </div>
            <div className="text-white font-semibold text-sm w-10 h-10 bg-primary rounded-md flex items-center justify-center">
              4.8
            </div>
          </div>

          <div className="mt-14 text-right mb-8">
            <span className="text-body text-sm">8 nights, 2 adult</span>
            <h2 className="text-[22px] text-heading font-semibold">US$72</h2>
            <span className="text-body text-sm">+US$828 taxes and charges</span>
          </div>

          <Button className="flex items-center gap-3">
            <span>See Availability</span>
            <FiArrowUpRight className="text-2xl" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HotelItem;

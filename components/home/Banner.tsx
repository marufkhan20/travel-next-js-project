import SearchBar from "../shared/SearchBar";

const Banner = () => {
  return (
    <section
      style={{ backgroundImage: "url(/bg.webp)" }}
      className="min-h-[92vh] w-full"
    >
      <div className="w-full min-h-[92vh] bg-dark bg-opacity-80 flex flex-col items-center justify-center text-white">
        <h2 className="text-[60px] text-white mt-28">
          Find Next Place To Visit
        </h2>
        <span>Discover amzaing places at exclusive deals</span>

        <div className="mt-[70px]">
          <ul className="flex items-center gap-5">
            <li className="text-[15px] font-medium transition-all hover:text-primary cursor-pointer border-b border-white pb-1">
              Hotel
            </li>
            <li className="text-[15px] font-medium transition-all hover:text-primary cursor-pointer pb-1">
              Tour
            </li>
            <li className="text-[15px] font-medium transition-all hover:text-primary cursor-pointer pb-1">
              Activity
            </li>
            <li className="text-[15px] font-medium transition-all hover:text-primary cursor-pointer pb-1">
              Holiday Rentals
            </li>
            <li className="text-[15px] font-medium transition-all hover:text-primary cursor-pointer pb-1">
              Car
            </li>
            <li className="text-[15px] font-medium transition-all hover:text-primary cursor-pointer pb-1">
              Cruise
            </li>
            <li className="text-[15px] font-medium transition-all hover:text-primary cursor-pointer pb-1">
              Flights
            </li>
          </ul>
        </div>

        <div className="mt-8 w-[48%]">
          <SearchBar />
        </div>
      </div>
    </section>
  );
};

export default Banner;

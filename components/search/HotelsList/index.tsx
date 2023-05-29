import Filters from "./Filters";
import Hotels from "./Hotels";

const HotelsList = () => {
  return (
    <section className="py-[60px] bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between gap-6">
          <div className="w-[22%]">
            <Filters />
          </div>
          <div className="w-[78%]">
            <Hotels />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelsList;

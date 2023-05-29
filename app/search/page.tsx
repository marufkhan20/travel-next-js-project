import HotelsList from "@/components/search/HotelsList";
import SearchBox from "@/components/search/SearchBox";

const page = () => {
  return (
    <main className="mt-[85px]">
      <SearchBox />
      <HotelsList />
    </main>
  );
};

export default page;

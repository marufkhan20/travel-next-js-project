import SearchBar from "../shared/SearchBar";

const SearchBox = () => {
  return (
    <section className="bg-[#F5F5F5] py-10">
      <div className="container mx-auto">
        <h2 className="text-center text-heading text-3xl font-semibold mb-8">
          Find Your Dream Luxury Hotel
        </h2>
        <SearchBar type="secondary" />
      </div>
    </section>
  );
};

export default SearchBox;

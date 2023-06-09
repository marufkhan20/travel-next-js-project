import Heading from "../shared/Heading";

const Blogs = () => {
  return (
    <section className="px-10 sm:px-0">
      <div className="container mx-auto py-32">
        <div className="text-center">
          <Heading
            heading="Get inspiration for your next trip"
            subHeading="Interdum et malesuada fames"
          />
        </div>

        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-7">
          <div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://creativelayers.net/themes/gotrip-html/img/blog/1.png"
                alt="thumbnail"
                className="w-full rounded-lg transition-all duration-500 hover:scale-110"
              />
            </div>
            <h2 className="text-lg font-medium text-heading mt-6">
              10 European ski destinations you should visit this winter
            </h2>
            <span className="text-[15px] text-body block">April 06, 2022</span>
          </div>
          <div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://creativelayers.net/themes/gotrip-html/img/blog/2.png"
                alt="thumbnail"
                className="w-full rounded-lg transition-all duration-500 hover:scale-110"
              />
            </div>
            <h2 className="text-lg font-medium text-heading mt-6">
              10 European ski destinations you should visit this winter
            </h2>
            <span className="text-[15px] text-body block">April 06, 2022</span>
          </div>
          <div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://creativelayers.net/themes/gotrip-html/img/blog/3.png"
                alt="thumbnail"
                className="w-full rounded-lg transition-all duration-500 hover:scale-110"
              />
            </div>
            <h2 className="text-lg font-medium text-heading mt-6">
              10 European ski destinations you should visit this winter
            </h2>
            <span className="text-[15px] text-body block">April 06, 2022</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;

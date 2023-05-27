/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import Heading from "../shared/Heading";

const Destinations = () => {
  return (
    <section className="py-[130px]">
      <div className="container mx-auto">
        <div className="flex justify-between gap-5 items-end">
          <Heading
            heading="Popular Destinations"
            subHeading="These popular destinations have a lot to offer"
          />
          <Link
            href="#"
            className="flex items-center gap-3 px-7 py-3 bg-light-secondary rounded text-primary text-[15px] font-medium transition-all hover:bg-primary hover:text-white"
          >
            View All Destinations <BsArrowUpRight className="text-lg" />
          </Link>
        </div>

        {/* destinations list */}
        <div className="grid grid-cols-4 gap-[30px] mt-10">
          <div className="relative">
            <Link href="#">
              <img
                className="w-full rounded-md"
                src="/destinations/1.webp"
                alt="destinations"
              />
              <div></div>
            </Link>
          </div>
          <div className="relative">
            <Link href="#">
              <img
                className="w-full rounded-md"
                src="https://creativelayers.net/themes/gotrip-html/img/destinations/1/2.webp"
                alt="destinations"
              />
              <div></div>
            </Link>
          </div>
          <div className="relative">
            <Link href="#">
              <img
                className="w-full rounded-md"
                src="https://creativelayers.net/themes/gotrip-html/img/destinations/1/3.webp"
                alt="destinations"
              />
              <div></div>
            </Link>
          </div>
          <div className="relative">
            <Link href="#">
              <img
                className="w-full rounded-md"
                src="https://creativelayers.net/themes/gotrip-html/img/destinations/1/4.webp"
                alt="destinations"
              />
              <div></div>
            </Link>
          </div>
        </div>

        {/* offer list */}
        <div className="grid grid-cols-2 gap-8 mt-28">
          <div className="relative">
            <img
              src="https://creativelayers.net/themes/gotrip-html/img/backgrounds/1.png"
              alt="destination"
              className="w-full rounded-md"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full py-20 px-16 rounded-md bg-dark/50">
              <h3 className="text-white text-[40px] leading-[58px]">
                Things to do on
                <br />
                your trip
              </h3>
              <Link
                href="#"
                className="bg-white rounded text-heading py-4 px-11 text-[15px] font-medium inline-block mt-7 transition-all hover:bg-primary hover:text-white"
              >
                Experiences
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://creativelayers.net/themes/gotrip-html/img/backgrounds/2.png"
              alt="destination"
              className="w-full rounded-md"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full py-20 px-16 rounded-md bg-dark/50">
              <span className="inline-block text-[15px] font-medium text-white mb-2">
                Enjoy Summer Deals
              </span>
              <h3 className="text-white text-[40px] leading-[58px]">
                Up to 70% Discount!
              </h3>
              <Link
                href="#"
                className="bg-white rounded text-heading py-4 px-11 text-[15px] font-medium inline-block mt-7 transition-all hover:bg-primary hover:text-white"
              >
                Experiences
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;

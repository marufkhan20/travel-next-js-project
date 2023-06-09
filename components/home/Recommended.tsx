"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import Heading from "../shared/Heading";

const Recommended = () => {
  const [showOpt, setShowOpt] = useState(false);
  return (
    <section className="pb-28 px-10 sm:px-0">
      <div className="container mx-auto">
        <div className="flex justify-between gap-5 items-end flex-wrap">
          <Heading
            heading="Recommended"
            subHeading="Interdum et malesuada fames ac ante ipsum"
          />
          <div className="relative">
            <button
              className="flex items-center w-[134px] py-3 px-[18px] border border-light rounded justify-between text-[15px] font-medium text-heading"
              onClick={() => setShowOpt(!showOpt)}
            >
              Hotel{" "}
              <AiOutlineCaretDown
                className={`transition-all duration-500 ${
                  showOpt ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            <div
              className={`transition-all duration-500 ${
                showOpt ? "opacity-100 visible" : "opacity-0 invisible"
              } absolute top-[120%] left-[50%] translate-x-[-50%] shadow-lg w-[160px] bg-white border border-light rounded flex flex-col gap-6 z-50 py-4`}
            >
              <li className="block px-4 cursor-pointer transition-all hover:text-primary">
                Animation
              </li>
              <li className="block px-4 cursor-pointer transition-all hover:text-primary">
                Design
              </li>
              <li className="block px-4 cursor-pointer transition-all hover:text-primary">
                Illustration
              </li>
              <li className="block px-4 cursor-pointer transition-all hover:text-primary">
                Lifestyle
              </li>
              <li className="block px-4 cursor-pointer transition-all hover:text-primary">
                Business
              </li>
            </div>
          </div>
        </div>

        {/* recommended list */}
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7">
          <div>
            <div className="relative overflow-hidden rounded-md">
              <img
                src="https://creativelayers.net/themes/gotrip-html/img/hotels/1.png"
                alt="image"
                className="rounded-md w-full transition-all hover:scale-125 duration-700"
              />
              <div className="absolute top-4 left-0 right-0 w-full flex items-center justify-between">
                <span className="inline-block bg-dark text-white font-medium text-xs px-3 py-2 rounded-tr rounded-br">
                  BREAKFAST INCLUDED
                </span>
                <div className="mr-4 w-[30px] h-[30px] rounded-full bg-white text-heading flex items-center justify-center cursor-pointer transition-all hover:bg-primary hover:text-white">
                  <FaRegHeart className="text-xs" />
                </div>
              </div>
            </div>

            <div className="mt-3">
              <h3 className="text-heading text-lg font-medium transition-all hover:underline">
                <Link href="#">The Montcalm At Brewery London City</Link>
              </h3>
              <span className="mt-3 text-sm text-body">
                Westminster Borough, London
              </span>
              <div className="flex items-center gap-2 mt-4">
                <span className="text-xs font-semibold py-[6px] px-[5px] rounded bg-primary text-white inline-block">
                  4.8
                </span>
                <span className="text-sm text-heading font-medium">
                  Exceptional
                </span>
                <span className="text-sm text-body">3,014 reviews</span>
              </div>

              <h3 className="text-base text-heading font-medium mt-2 transition-all hover:text-primary">
                Starting from <span className="text-primary">US$72</span>
              </h3>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden rounded-md">
              <img
                src="https://creativelayers.net/themes/gotrip-html/img/hotels/2.png"
                alt="image"
                className="rounded-md w-full transition-all hover:scale-125 duration-700"
              />
              <div className="absolute top-4 left-0 right-0 w-full flex items-center justify-between">
                <span className="inline-block bg-dark text-white font-medium text-xs px-3 py-2 rounded-tr rounded-br">
                  BREAKFAST INCLUDED
                </span>
                <div className="mr-4 w-[30px] h-[30px] rounded-full bg-white text-heading flex items-center justify-center cursor-pointer transition-all hover:bg-primary hover:text-white">
                  <FaRegHeart className="text-xs" />
                </div>
              </div>
            </div>

            <div className="mt-3">
              <h3 className="text-heading text-lg font-medium transition-all hover:underline">
                <Link href="#">The Montcalm At Brewery London City</Link>
              </h3>
              <span className="mt-3 text-sm text-body">
                Westminster Borough, London
              </span>
              <div className="flex items-center gap-2 mt-4">
                <span className="text-xs font-semibold py-[6px] px-[5px] rounded bg-primary text-white inline-block">
                  4.8
                </span>
                <span className="text-sm text-heading font-medium">
                  Exceptional
                </span>
                <span className="text-sm text-body">3,014 reviews</span>
              </div>

              <h3 className="text-base text-heading font-medium mt-2 transition-all hover:text-primary">
                Starting from <span className="text-primary">US$72</span>
              </h3>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden rounded-md">
              <img
                src="https://creativelayers.net/themes/gotrip-html/img/hotels/3.png"
                alt="image"
                className="rounded-md w-full transition-all hover:scale-125 duration-700"
              />
              <div className="absolute top-4 left-0 right-0 w-full flex items-center justify-between">
                <span className="inline-block bg-dark text-white font-medium text-xs px-3 py-2 rounded-tr rounded-br">
                  BREAKFAST INCLUDED
                </span>
                <div className="mr-4 w-[30px] h-[30px] rounded-full bg-white text-heading flex items-center justify-center cursor-pointer transition-all hover:bg-primary hover:text-white">
                  <FaRegHeart className="text-xs" />
                </div>
              </div>
            </div>

            <div className="mt-3">
              <h3 className="text-heading text-lg font-medium transition-all hover:underline">
                <Link href="#">The Montcalm At Brewery London City</Link>
              </h3>
              <span className="mt-3 text-sm text-body">
                Westminster Borough, London
              </span>
              <div className="flex items-center gap-2 mt-4">
                <span className="text-xs font-semibold py-[6px] px-[5px] rounded bg-primary text-white inline-block">
                  4.8
                </span>
                <span className="text-sm text-heading font-medium">
                  Exceptional
                </span>
                <span className="text-sm text-body">3,014 reviews</span>
              </div>

              <h3 className="text-base text-heading font-medium mt-2 transition-all hover:text-primary">
                Starting from <span className="text-primary">US$72</span>
              </h3>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden rounded-md">
              <img
                src="https://creativelayers.net/themes/gotrip-html/img/hotels/4.png"
                alt="image"
                className="rounded-md w-full transition-all hover:scale-125 duration-700"
              />
              <div className="absolute top-4 left-0 right-0 w-full flex items-center justify-between">
                <span className="inline-block bg-dark text-white font-medium text-xs px-3 py-2 rounded-tr rounded-br">
                  BREAKFAST INCLUDED
                </span>
                <div className="mr-4 w-[30px] h-[30px] rounded-full bg-white text-heading flex items-center justify-center cursor-pointer transition-all hover:bg-primary hover:text-white">
                  <FaRegHeart className="text-xs" />
                </div>
              </div>
            </div>

            <div className="mt-3">
              <h3 className="text-heading text-lg font-medium transition-all hover:underline">
                <Link href="#">The Montcalm At Brewery London City</Link>
              </h3>
              <span className="mt-3 text-sm text-body">
                Westminster Borough, London
              </span>
              <div className="flex items-center gap-2 mt-4">
                <span className="text-xs font-semibold py-[6px] px-[5px] rounded bg-primary text-white inline-block">
                  4.8
                </span>
                <span className="text-sm text-heading font-medium">
                  Exceptional
                </span>
                <span className="text-sm text-body">3,014 reviews</span>
              </div>

              <h3 className="text-base text-heading font-medium mt-2 transition-all hover:text-primary">
                Starting from <span className="text-primary">US$72</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommended;

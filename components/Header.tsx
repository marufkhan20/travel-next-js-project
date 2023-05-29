"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineCaretDown, AiOutlineClose } from "react-icons/ai";
import Button from "./ui/Button";

const Header = () => {
  const [showCurrencyModal, setShowCurrencyModal] = useState(false);
  const [showCountryModal, setShowCountryModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsScrolled(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`transition-all duration-300 ${
        isScrolled ? "bg-dark" : "bg-secondary"
      } py-5 fixed top-0 left-0 right-0 w-full z-50`}
    >
      <div className="relative">
        <div className="px-6 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <Link href="/">
              <img
                className="filter invert brightness-100"
                src="/logo-dark.svg"
                alt="logo"
              />
            </Link>
            <nav className="flex items-center gap-3 text-[15px] text-white">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">Categories</Link>
              </li>
              <li>
                <Link href="#">Destinations</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Pages</Link>
              </li>
              <li>
                <Link href="#">Dashboard</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </nav>
          </div>
          <div className="flex items-center gap-5">
            <li
              className="flex items-center text-white gap-1 text-sm cursor-pointer"
              onClick={() => setShowCurrencyModal(true)}
            >
              <span>USD</span>
              <AiOutlineCaretDown />
            </li>
            <li className="border-l border-gray-600 h-5"></li>
            <li
              className="flex items-center text-white gap-2 text-sm cursor-pointer"
              onClick={() => setShowCountryModal(true)}
            >
              <img
                src="/icons/flag.webp"
                alt="flag"
                className="w-5 h-5 rounded-full"
              />
              <span>USA</span>
              <AiOutlineCaretDown />
            </li>
            <Button type="light">Become An Expert</Button>
            <Button type="light-hover">Sign In / Register</Button>
          </div>
        </div>

        {/* currency modal */}
        <div
          className={`transition-all duration-500 ${
            showCurrencyModal ? "visible opacity-100" : "invisible opacity-0"
          } fixed top-0 left-0 right-0 flex justify-center bg-opacity-40 bg-dark h-full w-full`}
          onClick={() => setShowCurrencyModal(false)}
        >
          <div
            className="w-[60%] bg-white rounded-md mt-32 h-fit"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-light">
              <h3 className="text-xl text-heading font-medium">
                Select your currency
              </h3>
              <AiOutlineClose
                className="text-heading text-2xl cursor-pointer"
                onClick={() => setShowCurrencyModal(false)}
              />
            </div>

            <div className="grid grid-cols-5 gap-10 p-6">
              <div className="p-3 text-heading cursor-pointer hover:bg-[#F5F6FD] hover:text-primary transition-all">
                <h4 className="text-[15px] font-medium">
                  United States dollar
                </h4>
                <span className="text-heading text-sm">USD - $</span>
              </div>
              <div className="p-3 text-heading cursor-pointer hover:bg-[#F5F6FD] hover:text-primary transition-all">
                <h4 className="text-[15px] font-medium">
                  United States dollar
                </h4>
                <span className="text-heading text-sm">USD - $</span>
              </div>
              <div className="p-3 text-heading cursor-pointer hover:bg-[#F5F6FD] hover:text-primary transition-all">
                <h4 className="text-[15px] font-medium">
                  United States dollar
                </h4>
                <span className="text-heading text-sm">USD - $</span>
              </div>
              <div className="p-3 text-heading cursor-pointer hover:bg-[#F5F6FD] hover:text-primary transition-all">
                <h4 className="text-[15px] font-medium">
                  United States dollar
                </h4>
                <span className="text-heading text-sm">USD - $</span>
              </div>
              <div className="p-3 text-heading cursor-pointer hover:bg-[#F5F6FD] hover:text-primary transition-all">
                <h4 className="text-[15px] font-medium">
                  United States dollar
                </h4>
                <span className="text-heading text-sm">USD - $</span>
              </div>
              <div className="p-3 text-heading cursor-pointer hover:bg-[#F5F6FD] hover:text-primary transition-all">
                <h4 className="text-[15px] font-medium">
                  United States dollar
                </h4>
                <span className="text-heading text-sm">USD - $</span>
              </div>
              <div className="p-3 text-heading cursor-pointer hover:bg-[#F5F6FD] hover:text-primary transition-all">
                <h4 className="text-[15px] font-medium">
                  United States dollar
                </h4>
                <span className="text-heading text-sm">USD - $</span>
              </div>
              <div className="p-3 text-heading cursor-pointer hover:bg-[#F5F6FD] hover:text-primary transition-all">
                <h4 className="text-[15px] font-medium">
                  United States dollar
                </h4>
                <span className="text-heading text-sm">USD - $</span>
              </div>
              <div className="p-3 text-heading cursor-pointer hover:bg-[#F5F6FD] hover:text-primary transition-all">
                <h4 className="text-[15px] font-medium">
                  United States dollar
                </h4>
                <span className="text-heading text-sm">USD - $</span>
              </div>
              <div className="p-3 text-heading cursor-pointer hover:bg-[#F5F6FD] hover:text-primary transition-all">
                <h4 className="text-[15px] font-medium">
                  United States dollar
                </h4>
                <span className="text-heading text-sm">USD - $</span>
              </div>
              <div className="p-3 text-heading cursor-pointer hover:bg-[#F5F6FD] hover:text-primary transition-all">
                <h4 className="text-[15px] font-medium">
                  United States dollar
                </h4>
                <span className="text-heading text-sm">USD - $</span>
              </div>
              <div className="p-3 text-heading cursor-pointer hover:bg-[#F5F6FD] hover:text-primary transition-all">
                <h4 className="text-[15px] font-medium">
                  United States dollar
                </h4>
                <span className="text-heading text-sm">USD - $</span>
              </div>
              <div className="p-3 text-heading cursor-pointer hover:bg-[#F5F6FD] hover:text-primary transition-all">
                <h4 className="text-[15px] font-medium">
                  United States dollar
                </h4>
                <span className="text-heading text-sm">USD - $</span>
              </div>
              <div className="p-3 text-heading cursor-pointer hover:bg-[#F5F6FD] hover:text-primary transition-all">
                <h4 className="text-[15px] font-medium">
                  United States dollar
                </h4>
                <span className="text-heading text-sm">USD - $</span>
              </div>
              <div className="p-3 text-heading cursor-pointer hover:bg-[#F5F6FD] hover:text-primary transition-all">
                <h4 className="text-[15px] font-medium">
                  United States dollar
                </h4>
                <span className="text-heading text-sm">USD - $</span>
              </div>
              <div className="p-3 text-heading cursor-pointer hover:bg-[#F5F6FD] hover:text-primary transition-all">
                <h4 className="text-[15px] font-medium">
                  United States dollar
                </h4>
                <span className="text-heading text-sm">USD - $</span>
              </div>
              <div className="p-3 text-heading cursor-pointer hover:bg-[#F5F6FD] hover:text-primary transition-all">
                <h4 className="text-[15px] font-medium">
                  United States dollar
                </h4>
                <span className="text-heading text-sm">USD - $</span>
              </div>
              <div className="p-3 text-heading cursor-pointer hover:bg-[#F5F6FD] hover:text-primary transition-all">
                <h4 className="text-[15px] font-medium">
                  United States dollar
                </h4>
                <span className="text-heading text-sm">USD - $</span>
              </div>
              <div className="p-3 text-heading cursor-pointer hover:bg-[#F5F6FD] hover:text-primary transition-all">
                <h4 className="text-[15px] font-medium">
                  United States dollar
                </h4>
                <span className="text-heading text-sm">USD - $</span>
              </div>
              <div className="p-3 text-heading cursor-pointer hover:bg-[#F5F6FD] hover:text-primary transition-all">
                <h4 className="text-[15px] font-medium">
                  United States dollar
                </h4>
                <span className="text-heading text-sm">USD - $</span>
              </div>
            </div>
          </div>
        </div>

        {/* country modal */}
        <div
          className={`transition-all duration-500 ${
            showCountryModal ? "visible opacity-100" : "invisible opacity-0"
          } fixed top-0 left-0 right-0 flex justify-center bg-opacity-40 bg-dark h-full w-full`}
          onClick={() => setShowCountryModal(false)}
        >
          <div
            className="w-[60%] bg-white rounded-md mt-32 h-fit z-50"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-light">
              <h3 className="text-xl text-heading font-medium">
                Select your language
              </h3>
              <AiOutlineClose
                className="text-heading text-2xl cursor-pointer"
                onClick={() => setShowCountryModal(false)}
              />
            </div>

            <div className="grid grid-cols-5 gap-10 p-6">
              <div className="p-3 text-heading cursor-pointer hover:bg-[#F5F6FD] hover:text-primary transition-all">
                <h4 className="text-[15px] font-medium">
                  United States dollar
                </h4>
                <span className="text-heading text-sm">USD - $</span>
              </div>
              <div className="p-3 text-heading cursor-pointer hover:bg-[#F5F6FD] hover:text-primary transition-all">
                <h4 className="text-[15px] font-medium">
                  United States dollar
                </h4>
                <span className="text-heading text-sm">USD - $</span>
              </div>
              <div className="p-3 text-heading cursor-pointer hover:bg-[#F5F6FD] hover:text-primary transition-all">
                <h4 className="text-[15px] font-medium">
                  United States dollar
                </h4>
                <span className="text-heading text-sm">USD - $</span>
              </div>
              <div className="p-3 text-heading cursor-pointer hover:bg-[#F5F6FD] hover:text-primary transition-all">
                <h4 className="text-[15px] font-medium">
                  United States dollar
                </h4>
                <span className="text-heading text-sm">USD - $</span>
              </div>
              <div className="p-3 text-heading cursor-pointer hover:bg-[#F5F6FD] hover:text-primary transition-all">
                <h4 className="text-[15px] font-medium">
                  United States dollar
                </h4>
                <span className="text-heading text-sm">USD - $</span>
              </div>
              <div className="p-3 text-heading cursor-pointer hover:bg-[#F5F6FD] hover:text-primary transition-all">
                <h4 className="text-[15px] font-medium">
                  United States dollar
                </h4>
                <span className="text-heading text-sm">USD - $</span>
              </div>
              <div className="p-3 text-heading cursor-pointer hover:bg-[#F5F6FD] hover:text-primary transition-all">
                <h4 className="text-[15px] font-medium">
                  United States dollar
                </h4>
                <span className="text-heading text-sm">USD - $</span>
              </div>
              <div className="p-3 text-heading cursor-pointer hover:bg-[#F5F6FD] hover:text-primary transition-all">
                <h4 className="text-[15px] font-medium">
                  United States dollar
                </h4>
                <span className="text-heading text-sm">USD - $</span>
              </div>
              <div className="p-3 text-heading cursor-pointer hover:bg-[#F5F6FD] hover:text-primary transition-all">
                <h4 className="text-[15px] font-medium">
                  United States dollar
                </h4>
                <span className="text-heading text-sm">USD - $</span>
              </div>
              <div className="p-3 text-heading cursor-pointer hover:bg-[#F5F6FD] hover:text-primary transition-all">
                <h4 className="text-[15px] font-medium">
                  United States dollar
                </h4>
                <span className="text-heading text-sm">USD - $</span>
              </div>
              <div className="p-3 text-heading cursor-pointer hover:bg-[#F5F6FD] hover:text-primary transition-all">
                <h4 className="text-[15px] font-medium">
                  United States dollar
                </h4>
                <span className="text-heading text-sm">USD - $</span>
              </div>
              <div className="p-3 text-heading cursor-pointer hover:bg-[#F5F6FD] hover:text-primary transition-all">
                <h4 className="text-[15px] font-medium">
                  United States dollar
                </h4>
                <span className="text-heading text-sm">USD - $</span>
              </div>
              <div className="p-3 text-heading cursor-pointer hover:bg-[#F5F6FD] hover:text-primary transition-all">
                <h4 className="text-[15px] font-medium">
                  United States dollar
                </h4>
                <span className="text-heading text-sm">USD - $</span>
              </div>
              <div className="p-3 text-heading cursor-pointer hover:bg-[#F5F6FD] hover:text-primary transition-all">
                <h4 className="text-[15px] font-medium">
                  United States dollar
                </h4>
                <span className="text-heading text-sm">USD - $</span>
              </div>
              <div className="p-3 text-heading cursor-pointer hover:bg-[#F5F6FD] hover:text-primary transition-all">
                <h4 className="text-[15px] font-medium">
                  United States dollar
                </h4>
                <span className="text-heading text-sm">USD - $</span>
              </div>
              <div className="p-3 text-heading cursor-pointer hover:bg-[#F5F6FD] hover:text-primary transition-all">
                <h4 className="text-[15px] font-medium">
                  United States dollar
                </h4>
                <span className="text-heading text-sm">USD - $</span>
              </div>
              <div className="p-3 text-heading cursor-pointer hover:bg-[#F5F6FD] hover:text-primary transition-all">
                <h4 className="text-[15px] font-medium">
                  United States dollar
                </h4>
                <span className="text-heading text-sm">USD - $</span>
              </div>
              <div className="p-3 text-heading cursor-pointer hover:bg-[#F5F6FD] hover:text-primary transition-all">
                <h4 className="text-[15px] font-medium">
                  United States dollar
                </h4>
                <span className="text-heading text-sm">USD - $</span>
              </div>
              <div className="p-3 text-heading cursor-pointer hover:bg-[#F5F6FD] hover:text-primary transition-all">
                <h4 className="text-[15px] font-medium">
                  United States dollar
                </h4>
                <span className="text-heading text-sm">USD - $</span>
              </div>
              <div className="p-3 text-heading cursor-pointer hover:bg-[#F5F6FD] hover:text-primary transition-all">
                <h4 className="text-[15px] font-medium">
                  United States dollar
                </h4>
                <span className="text-heading text-sm">USD - $</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

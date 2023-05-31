import Link from "next/link";
import { Dispatch, FC, SetStateAction } from "react";
import { FiSearch } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { IoNotificationsOutline } from "react-icons/io5";

type SetStateFunction = Dispatch<SetStateAction<boolean>>;

interface IProps {
  setFullScreen: SetStateFunction;
  fullScreen: boolean;
}

const Header: FC<IProps> = ({ setFullScreen, fullScreen }) => {
  return (
    <header className="px-7 bg-white fixed top-0 left-0 right-0 w-full z-50 py-5 flex items-center justify-between gap-5">
      <div className="flex items-center gap-[190px]">
        <Link href="/admin">
          <img
            className="w-[150px]"
            src="https://creativelayers.net/themes/gotrip-html/img/general/logo-dark.svg"
            alt="logo"
          />
        </Link>

        <div className="flex items-center gap-8">
          <HiOutlineBars3CenterLeft
            onClick={() => setFullScreen(!fullScreen)}
            className="text-3xl cursor-pointer"
          />
          <div className="flex items-center gap-5 w-[220px] border border-light rounded p-3">
            <FiSearch className="text-xl" />
            <input
              type="text"
              placeholder="Search"
              className="outline-none text-[15px] text-heading"
            />
          </div>
        </div>
      </div>

      {/* navigation */}
      <div className="flex items-center gap-7">
        <nav className="flex items-center gap-5 text-[15px] text-heading font-medium">
          <li className="transition-all hover:text-primary">
            <Link href="#">Home</Link>
          </li>
          <li className="transition-all hover:text-primary">
            <Link href="#">Categories</Link>
          </li>
          <li className="transition-all hover:text-primary">
            <Link href="#">Destinations</Link>
          </li>
          <li className="transition-all hover:text-primary">
            <Link href="#">Blog</Link>
          </li>
          <li className="transition-all hover:text-primary">
            <Link href="#">Pages</Link>
          </li>
          <li className="transition-all hover:text-primary">
            <Link href="#">Dashboard</Link>
          </li>
          <li className="transition-all hover:text-primary">
            <Link href="#">Contact</Link>
          </li>
        </nav>

        <div className="flex items-center gap-3">
          <li className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:bg-light-thirdary hover:text-primary cursor-pointer">
            <HiOutlineMail className="text-xl" />
          </li>
          <li className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:bg-light-thirdary hover:text-primary cursor-pointer">
            <IoNotificationsOutline className="text-xl" />
          </li>
          <img
            className="w-12 h-12 rounded-full cursor-pointer"
            src="https://creativelayers.net/themes/gotrip-html/img/avatars/3.png"
            alt="avatar"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

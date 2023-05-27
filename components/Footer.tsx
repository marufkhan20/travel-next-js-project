import Link from "next/link";
import { BsApple } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";
import Subscribe from "./shared/Subscribe";

const Footer = () => {
  return (
    <footer>
      <Subscribe />

      <section className="py-16">
        <div className="container mx-auto grid grid-cols-5 gap-8">
          <div>
            <h3 className="font-medium text-heading mb-8">Contact Us</h3>
            <div>
              <span className="text-heading text-sm">
                Toll Free Customer Care
              </span>
              <h3 className="text-lg font-medium text-primary cursor-pointer mt-1">
                +(1) 123 456 7890
              </h3>
            </div>
            <div className="mt-10">
              <span className="text-heading text-sm">Need live support?</span>
              <h3 className="text-lg font-medium text-primary cursor-pointer mt-1">
                hi@gotrip.com
              </h3>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-heading mb-8">Company</h3>
            <ul className="flex flex-col gap-5">
              <li className="text-heading transition-all hover:text-primary">
                <Link href="#">About Us</Link>
              </li>
              <li className="text-heading transition-all hover:text-primary">
                <Link href="#">Careers</Link>
              </li>
              <li className="text-heading transition-all hover:text-primary">
                <Link href="#">Careers</Link>
              </li>
              <li className="text-heading transition-all hover:text-primary">
                <Link href="#">Careers</Link>
              </li>
              <li className="text-heading transition-all hover:text-primary">
                <Link href="#">Careers</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-heading mb-8">Support</h3>
            <ul className="flex flex-col gap-5">
              <li className="text-heading transition-all hover:text-primary">
                <Link href="#">About Us</Link>
              </li>
              <li className="text-heading transition-all hover:text-primary">
                <Link href="#">Careers</Link>
              </li>
              <li className="text-heading transition-all hover:text-primary">
                <Link href="#">Careers</Link>
              </li>
              <li className="text-heading transition-all hover:text-primary">
                <Link href="#">Careers</Link>
              </li>
              <li className="text-heading transition-all hover:text-primary">
                <Link href="#">Careers</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-heading mb-8">Other Services</h3>
            <ul className="flex flex-col gap-5">
              <li className="text-heading transition-all hover:text-primary">
                <Link href="#">About Us</Link>
              </li>
              <li className="text-heading transition-all hover:text-primary">
                <Link href="#">Careers</Link>
              </li>
              <li className="text-heading transition-all hover:text-primary">
                <Link href="#">Careers</Link>
              </li>
              <li className="text-heading transition-all hover:text-primary">
                <Link href="#">Careers</Link>
              </li>
              <li className="text-heading transition-all hover:text-primary">
                <Link href="#">Careers</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-heading mb-8">Mobile</h3>
            <div className="flex flex-col gap-4">
              <div className="flex gap-5 items-center py-3 px-5 border border-light rounded w-fit transition-all cursor-pointer">
                <BsApple className="text-3xl" />
                <div>
                  <span className="text-sm text-body">Download on the</span>
                  <h3 className="text-[15px] font-medium m-0 text-heading">
                    Apple Store
                  </h3>
                </div>
              </div>
              <div className="flex gap-5 items-center py-3 px-5 border border-light rounded w-fit transition-all cursor-pointer">
                <FaGooglePlay className="text-3xl" />
                <div>
                  <span className="text-sm text-body">Download on the</span>
                  <h3 className="text-[15px] font-medium m-0 text-heading">
                    Google Play
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

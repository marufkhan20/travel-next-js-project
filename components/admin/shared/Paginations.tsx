import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Paginations = () => {
  return (
    <div className="flex items-center justify-between gap-5 mt-8">
      <li className="w-10 h-10 flex items-center justify-center text-xs transition-all hover:bg-primary hover:border-primary hover:text-white cursor-pointer rounded-full border border-light">
        <SlArrowLeft />
      </li>
      <div className="flex items-center gap-4">
        <li className="w-10 h-10 flex items-center justify-center text-xs transition-all hover:bg-heading hover:text-white cursor-pointer rounded-full text-heading">
          <span className="text-base">1</span>
        </li>
        <li className="w-10 h-10 flex items-center justify-center text-xs transition-all bg-light-thirdary rounded-full text-heading">
          <span className="text-base">2</span>
        </li>
        <li className="w-10 h-10 flex items-center justify-center text-xs transition-all hover:bg-heading hover:text-white cursor-pointer rounded-full text-heading">
          <span className="text-base">3</span>
        </li>
        <li className="w-10 h-10 flex items-center justify-center text-xs transition-all hover:bg-heading hover:text-white cursor-pointer rounded-full text-heading">
          <span className="text-base">4</span>
        </li>
        <li className="w-10 h-10 flex items-center justify-center text-xs transition-all hover:bg-heading hover:text-white cursor-pointer rounded-full text-heading">
          <span className="text-base">5</span>
        </li>
        <li className="w-10 h-10 flex items-center justify-center text-xs transition-all rounded-full text-heading">
          <span className="text-base">...</span>
        </li>
        <li className="w-10 h-10 flex items-center justify-center text-xs transition-all hover:bg-heading hover:text-white cursor-pointer rounded-full text-heading">
          <span className="text-base">20</span>
        </li>
      </div>
      <li className="w-10 h-10 flex items-center justify-center text-xs transition-all hover:bg-primary hover:border-primary hover:text-white cursor-pointer rounded-full border border-light">
        <SlArrowRight />
      </li>
    </div>
  );
};

export default Paginations;

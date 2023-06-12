import { RiDeleteBin6Line } from "react-icons/ri";

const ImageBox = () => {
  return (
    <div className="h-[200px] rounded-md relative">
      <img
        className="h-full w-full rounded-md"
        src="/hotel.jpg"
        alt="hotel-image"
      />
      <div className="absolute top-3 right-3 bg-white h-9 w-9 rounded-md flex items-center justify-center cursor-pointer transition-all hover:text-white hover:bg-primary">
        <RiDeleteBin6Line />
      </div>
    </div>
  );
};

export default ImageBox;

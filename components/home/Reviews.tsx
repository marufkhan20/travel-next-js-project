import { AiFillStar } from "react-icons/ai";
import Heading from "../shared/Heading";

const Reviews = () => {
  return (
    <section className="bg-[#E5F0FD] py-32 px-10 sm:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-[50%]">
            <Heading
              heading={
                <span>
                  What our customers are <br />
                  saying us?
                </span>
              }
              subHeading={
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas varius <br />
                  tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim
                  justo.
                </span>
              }
            />

            <div className="flex gap-32 mt-16">
              <div>
                <h3 className="text-heading mb-1 text-3xl font-semibold">
                  13m+
                </h3>
                <span className="text-body">Happy People</span>
              </div>
              <div>
                <h3 className="text-heading mb-1 text-3xl font-semibold">
                  4.88
                </h3>
                <span className="text-body">Overall rating</span>
                <div className="flex text-primary text-xs mt-3">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[50%]">
            <div className="flex items-center gap-7">
              <img
                src="https://creativelayers.net/themes/gotrip-html/img/avatars/1.png"
                alt="user"
                className="w-20 h-20 rounded-full"
              />
              <div>
                <h4 className="text-heading font-medium">Mr. John Doe</h4>
                <span className="text-[15px] text-body">UX / UI Designer</span>
              </div>
            </div>
            <p className="mt-7 text-lg text-heading font-medium leading-[34px]">
              The place is in a great location in Gumbet. The area is safe and
              beautiful. The apartment was comfortable and the host was kind and
              responsive to our requests.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

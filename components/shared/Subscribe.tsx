import Button from "../ui/Button";

/* eslint-disable react/no-unescaped-entities */
const Subscribe = () => {
  return (
    <section className="py-[60px] bg-[#0D2857]">
      <div className="container mx-auto flex items-center justify-between gap-10">
        <div className="flex items-center gap-6">
          <img src="/icons/mail.png" alt="mail icon" />
          <div className="text-white">
            <h2 className="text-[26px] font-semibold">
              Your Travel Journey Starts Here
            </h2>
            <span>Sign up and we'll send the best deals to you</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="text"
            className="bg-white rounded-md p-5 outline-none w-[400px]"
            placeholder="Your Email"
          />
          <Button className="py-5 px-7">Subscribe</Button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;

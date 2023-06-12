import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import { BsArrowUpRight } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import ImageBox from "./ImageBox";
import UploadBox from "./UploadBox";

const Content = () => {
  return (
    <div>
      <form action="">
        {/* hotel content */}
        <div className="pb-9 border-b">
          <h3 className="text-heading text-lg font-medium">Hotel Content</h3>
          <div className="mt-5 flex flex-col gap-5">
            <Input
              type="text"
              value=""
              placeholder="Hotel Name"
              id="hotel-name"
            />
            <Textarea id="content" placeholder="Content" value="" />
            <Input
              type="url"
              value=""
              placeholder="Youtube Video"
              id="youtube-video"
            />
          </div>

          <div className="mt-8">
            <h3 className="text-heading text-base font-medium">Banner Image</h3>

            <div className="grid grid-cols-7 gap-4 mt-5">
              <UploadBox />
              <ImageBox />
              <ImageBox />
              <ImageBox />
              <ImageBox />
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-heading text-base font-medium">Gallery</h3>

            <div className="grid grid-cols-7 gap-4 mt-5">
              <UploadBox />
              <ImageBox />
              <ImageBox />
              <ImageBox />
              <ImageBox />
            </div>
          </div>
        </div>

        {/* hetel policy */}
        <div className="mt-8">
          <h3 className="text-heading text-lg font-medium">Hotel Policy</h3>
          <div className="mt-5 flex flex-col gap-5">
            <Input
              type="text"
              value=""
              placeholder="Hotel rating standard"
              id="rating-standard"
            />
          </div>

          <div>
            <h3 className="text-heading text-base font-medium my-6">Policy</h3>

            <div>
              <div className="flex justify-between py-5 px-3 bg-light-thirdary rounded-md gap-4">
                <div className="w-[40%]">
                  <h3 className="text-base text-heading font-medium">Title</h3>
                </div>
                <div className="w-[60%]">
                  <h3 className="text-base text-heading font-medium">
                    Content
                  </h3>
                </div>
              </div>

              <div>
                <div className="flex justify-between py-5 px-3 border-b gap-6">
                  <div className="w-[40%]">
                    <Input
                      type="text"
                      placeholder="Eg: What kind of footwear is most suitable?"
                      id="policy-title-1"
                      value=""
                    />
                  </div>
                  <div className="w-[40%]">
                    <Textarea
                      placeholder="Content"
                      id="policy-desc-1"
                      value=""
                      height="200px"
                    />
                  </div>
                  <div className="w-[20%]">
                    <div className="w-9 h-9 rounded-md bg-light-thirdary flex items-center justify-center cursor-pointer transition-all hover:text-white hover:bg-primary">
                      <RiDeleteBin6Line />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between py-5 px-3 border-b gap-6">
                  <div className="w-[40%]">
                    <Input
                      type="text"
                      placeholder="Eg: What kind of footwear is most suitable?"
                      id="policy-title-1"
                      value=""
                    />
                  </div>
                  <div className="w-[40%]">
                    <Textarea
                      placeholder="Content"
                      id="policy-desc-1"
                      value=""
                      height="200px"
                    />
                  </div>
                  <div className="w-[20%]">
                    <div className="w-9 h-9 rounded-md bg-light-thirdary flex items-center justify-center cursor-pointer transition-all hover:text-white hover:bg-primary">
                      <RiDeleteBin6Line />
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex justify-end">
                  <Button type="border-less">Add Item</Button>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-heading text-base font-medium">
                  Featured Image
                </h3>

                <div className="grid grid-cols-7 gap-4 mt-5">
                  <UploadBox />
                  <ImageBox />
                  <ImageBox />
                  <ImageBox />
                  <ImageBox />
                </div>
              </div>

              <div className="mt-8">
                <Button>
                  <div className="flex items-center gap-3">
                    Save Changes <BsArrowUpRight className="text-xl" />
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Content;

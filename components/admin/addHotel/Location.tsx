import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import { BsArrowUpRight } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";

const Location = () => {
  return (
    <div>
      <form action="">
        {/* location start */}
        <div>
          <h3 className="text-heading text-lg font-medium">Location</h3>
          <div className="mt-5 flex flex-col gap-5">
            <Input type="text" value="" placeholder="Location" id="location" />
            <Input
              type="text"
              value=""
              placeholder="Real Address"
              id="address"
            />

            <div className="grid grid-cols-3 gap-4">
              <Input
                type="text"
                value=""
                placeholder="Map Latitude"
                id="latitude"
              />
              <Input
                type="text"
                value=""
                placeholder="Map Longitude"
                id="longitude"
              />
              <Input
                type="text"
                value=""
                placeholder="Map Zoom"
                id="map-zoom"
              />
            </div>

            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d465814.41487210774!2d90.33560304406306!3d24.20162803993587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2z4Kas4Ka-4KaC4Kay4Ka-4Kam4KeH4Ka2!5e0!3m2!1sbn!2sbd!4v1686564743989!5m2!1sbn!2sbd"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: "5px" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        {/* location end */}

        {/* Surroundings start */}
        <div className="mt-8">
          <h3 className="text-heading text-lg font-medium mb-5">
            Surroundings
          </h3>
          <div>
            <Input
              type="text"
              placeholder="Hotel rating standard"
              id="rating"
              value=""
            />
          </div>
        </div>
        {/* Surroundings end */}

        {/* Education start */}
        <div className="mt-8">
          <h3 className="text-heading text-base font-medium mb-5">Education</h3>

          <div>
            <div className="flex justify-between py-5 px-3 bg-light-thirdary rounded-md">
              <div className="w-[20%]">
                <h3 className="text-base text-heading font-medium">Name</h3>
              </div>
              <div className="w-[40%]">
                <h3 className="text-base text-heading font-medium">Content</h3>
              </div>
              <div className="w-[40%]">
                <h3 className="text-base text-heading font-medium">Distance</h3>
              </div>
            </div>

            <div>
              <div>
                <div className="flex justify-between py-5 px-3 border-b gap-6">
                  <div className="w-[20%]">
                    <Input
                      type="text"
                      placeholder="Sunny beach"
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
                  <div className="w-[15%]">
                    <Input
                      type="text"
                      placeholder="Sunny beach"
                      id="policy-title-1"
                      value=""
                    />
                  </div>
                  <div className="w-[15%]">
                    <Input
                      type="text"
                      placeholder="Sunny beach"
                      id="policy-title-1"
                      value=""
                    />
                  </div>
                  <div className="w-[10%]">
                    <div className="w-9 h-9 rounded-md bg-light-thirdary flex items-center justify-center cursor-pointer transition-all hover:text-white hover:bg-primary">
                      <RiDeleteBin6Line />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between py-5 px-3 border-b gap-6">
                  <div className="w-[20%]">
                    <Input
                      type="text"
                      placeholder="Sunny beach"
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
                  <div className="w-[15%]">
                    <Input
                      type="text"
                      placeholder="Sunny beach"
                      id="policy-title-1"
                      value=""
                    />
                  </div>
                  <div className="w-[15%]">
                    <Input
                      type="text"
                      placeholder="Sunny beach"
                      id="policy-title-1"
                      value=""
                    />
                  </div>
                  <div className="w-[10%]">
                    <div className="w-9 h-9 rounded-md bg-light-thirdary flex items-center justify-center cursor-pointer transition-all hover:text-white hover:bg-primary">
                      <RiDeleteBin6Line />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex justify-end">
                <Button type="border-less">Add Item</Button>
              </div>
            </div>
          </div>
        </div>
        {/* Education end */}

        {/* Health start */}
        <div className="mt-8">
          <h3 className="text-heading text-base font-medium mb-5">Health</h3>

          <div>
            <div className="flex justify-between py-5 px-3 bg-light-thirdary rounded-md">
              <div className="w-[20%]">
                <h3 className="text-base text-heading font-medium">Name</h3>
              </div>
              <div className="w-[40%]">
                <h3 className="text-base text-heading font-medium">Content</h3>
              </div>
              <div className="w-[40%]">
                <h3 className="text-base text-heading font-medium">Distance</h3>
              </div>
            </div>

            <div>
              <div>
                <div className="flex justify-between py-5 px-3 border-b gap-6">
                  <div className="w-[20%]">
                    <Input
                      type="text"
                      placeholder="Sunny beach"
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
                  <div className="w-[15%]">
                    <Input
                      type="text"
                      placeholder="Sunny beach"
                      id="policy-title-1"
                      value=""
                    />
                  </div>
                  <div className="w-[15%]">
                    <Input
                      type="text"
                      placeholder="Sunny beach"
                      id="policy-title-1"
                      value=""
                    />
                  </div>
                  <div className="w-[10%]">
                    <div className="w-9 h-9 rounded-md bg-light-thirdary flex items-center justify-center cursor-pointer transition-all hover:text-white hover:bg-primary">
                      <RiDeleteBin6Line />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between py-5 px-3 border-b gap-6">
                  <div className="w-[20%]">
                    <Input
                      type="text"
                      placeholder="Sunny beach"
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
                  <div className="w-[15%]">
                    <Input
                      type="text"
                      placeholder="Sunny beach"
                      id="policy-title-1"
                      value=""
                    />
                  </div>
                  <div className="w-[15%]">
                    <Input
                      type="text"
                      placeholder="Sunny beach"
                      id="policy-title-1"
                      value=""
                    />
                  </div>
                  <div className="w-[10%]">
                    <div className="w-9 h-9 rounded-md bg-light-thirdary flex items-center justify-center cursor-pointer transition-all hover:text-white hover:bg-primary">
                      <RiDeleteBin6Line />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex justify-end">
                <Button type="border-less">Add Item</Button>
              </div>
            </div>
          </div>
        </div>
        {/* Health end */}

        {/* Transportation start */}
        <div className="mt-8">
          <h3 className="text-heading text-base font-medium mb-5">
            Transportation
          </h3>

          <div>
            <div className="flex justify-between py-5 px-3 bg-light-thirdary rounded-md">
              <div className="w-[20%]">
                <h3 className="text-base text-heading font-medium">Name</h3>
              </div>
              <div className="w-[40%]">
                <h3 className="text-base text-heading font-medium">Content</h3>
              </div>
              <div className="w-[40%]">
                <h3 className="text-base text-heading font-medium">Distance</h3>
              </div>
            </div>

            <div>
              <div>
                <div className="flex justify-between py-5 px-3 border-b gap-6">
                  <div className="w-[20%]">
                    <Input
                      type="text"
                      placeholder="Sunny beach"
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
                  <div className="w-[15%]">
                    <Input
                      type="text"
                      placeholder="Sunny beach"
                      id="policy-title-1"
                      value=""
                    />
                  </div>
                  <div className="w-[15%]">
                    <Input
                      type="text"
                      placeholder="Sunny beach"
                      id="policy-title-1"
                      value=""
                    />
                  </div>
                  <div className="w-[10%]">
                    <div className="w-9 h-9 rounded-md bg-light-thirdary flex items-center justify-center cursor-pointer transition-all hover:text-white hover:bg-primary">
                      <RiDeleteBin6Line />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between py-5 px-3 border-b gap-6">
                  <div className="w-[20%]">
                    <Input
                      type="text"
                      placeholder="Sunny beach"
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
                  <div className="w-[15%]">
                    <Input
                      type="text"
                      placeholder="Sunny beach"
                      id="policy-title-1"
                      value=""
                    />
                  </div>
                  <div className="w-[15%]">
                    <Input
                      type="text"
                      placeholder="Sunny beach"
                      id="policy-title-1"
                      value=""
                    />
                  </div>
                  <div className="w-[10%]">
                    <div className="w-9 h-9 rounded-md bg-light-thirdary flex items-center justify-center cursor-pointer transition-all hover:text-white hover:bg-primary">
                      <RiDeleteBin6Line />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex justify-end">
                <Button type="border-less">Add Item</Button>
              </div>
            </div>
          </div>
        </div>
        {/* Transportation end */}

        <div className="mt-8">
          <Button>
            <div className="flex items-center gap-3">
              Save Changes <BsArrowUpRight className="text-xl" />
            </div>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Location;

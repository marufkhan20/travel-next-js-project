import Button from "@/components/ui/Button";
import CheckBox from "@/components/ui/CheckBox";
import Input from "@/components/ui/Input";
import { BsArrowUpRight } from "react-icons/bs";

const Pricing = () => {
  return (
    <div>
      <form action="">
        {/* Pricing start */}
        <div>
          <h3 className="text-heading text-lg font-medium">Pricing</h3>
          <div className="mt-5 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <Input
                type="text"
                value=""
                placeholder="Hotel Price"
                id="hotel-price"
              />
              <div>
                <CheckBox>Enable extra price</CheckBox>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-heading text-base font-medium">
                Enable service fee
              </h4>
              <CheckBox>Enable extra price</CheckBox>
            </div>

            <div>
              <h3 className="text-heading text-lg font-medium">
                Check in / Check out time
              </h3>
              <div className="mt-5 flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    type="text"
                    value=""
                    placeholder="Time for check in"
                    id="check-time"
                  />
                  <Input
                    type="text"
                    value=""
                    placeholder="Time for check out"
                    id="time-checkout"
                  />
                  <Input
                    type="text"
                    value=""
                    placeholder="Minimum advance reservations"
                    id="advance"
                  />
                  <Input
                    type="text"
                    value=""
                    placeholder="Minimum stay day requirements"
                    id="staty-requirements"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Pricing end */}

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

export default Pricing;

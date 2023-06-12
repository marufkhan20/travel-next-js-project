import Button from "@/components/ui/Button";
import CheckBox from "@/components/ui/CheckBox";
import { BsArrowUpRight } from "react-icons/bs";

const Attributes = () => {
  return (
    <div>
      <form action="">
        <div>
          <h3 className="text-heading text-base font-medium mb-4">
            Property Type
          </h3>
          <div className="grid grid-cols-5 gap-2">
            <CheckBox>Apartments</CheckBox>
            <CheckBox>Apartments</CheckBox>
            <CheckBox>Apartments</CheckBox>
            <CheckBox>Apartments</CheckBox>
            <CheckBox>Apartments</CheckBox>
            <CheckBox>Apartments</CheckBox>
            <CheckBox>Apartments</CheckBox>
            <CheckBox>Apartments</CheckBox>
            <CheckBox>Apartments</CheckBox>
            <CheckBox>Apartments</CheckBox>
            <CheckBox>Apartments</CheckBox>
            <CheckBox>Apartments</CheckBox>
            <CheckBox>Apartments</CheckBox>
            <CheckBox>Apartments</CheckBox>
            <CheckBox>Apartments</CheckBox>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-heading text-base font-medium mb-4">
            Facilities
          </h3>
          <div className="grid grid-cols-5 gap-2">
            <CheckBox>Apartments</CheckBox>
            <CheckBox>Apartments</CheckBox>
            <CheckBox>Apartments</CheckBox>
            <CheckBox>Apartments</CheckBox>
            <CheckBox>Apartments</CheckBox>
            <CheckBox>Apartments</CheckBox>
            <CheckBox>Apartments</CheckBox>
            <CheckBox>Apartments</CheckBox>
            <CheckBox>Apartments</CheckBox>
            <CheckBox>Apartments</CheckBox>
            <CheckBox>Apartments</CheckBox>
            <CheckBox>Apartments</CheckBox>
            <CheckBox>Apartments</CheckBox>
            <CheckBox>Apartments</CheckBox>
            <CheckBox>Apartments</CheckBox>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-heading text-base font-medium mb-4">
            Hotel Services
          </h3>
          <div className="grid grid-cols-5 gap-2">
            <CheckBox>Apartments</CheckBox>
            <CheckBox>Apartments</CheckBox>
            <CheckBox>Apartments</CheckBox>
            <CheckBox>Apartments</CheckBox>
            <CheckBox>Apartments</CheckBox>
            <CheckBox>Apartments</CheckBox>
            <CheckBox>Apartments</CheckBox>
            <CheckBox>Apartments</CheckBox>
            <CheckBox>Apartments</CheckBox>
            <CheckBox>Apartments</CheckBox>
            <CheckBox>Apartments</CheckBox>
            <CheckBox>Apartments</CheckBox>
            <CheckBox>Apartments</CheckBox>
            <CheckBox>Apartments</CheckBox>
            <CheckBox>Apartments</CheckBox>
          </div>
        </div>

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

export default Attributes;

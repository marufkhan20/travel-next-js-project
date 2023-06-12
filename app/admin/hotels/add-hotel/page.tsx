"use client";
import AdminLayout from "@/components/admin/AdminLayout";
import Attributes from "@/components/admin/addHotel/Attributes";
import Content from "@/components/admin/addHotel/Content";
import Location from "@/components/admin/addHotel/Location";
import Pricing from "@/components/admin/addHotel/Pricing";
import Tabs from "@/components/admin/addHotel/Tabs";
import Heading from "@/components/admin/shared/Heading";
import { ReactElement, useState } from "react";

type ElementObject = {
  [key: number]: () => ReactElement;
};

const tabs: ElementObject = {
  1: Content,
  2: Location,
  3: Pricing,
  4: Attributes,
};

const AddHotel = () => {
  const [activeTab, setActiveTab] = useState(1);

  const Tab = tabs[activeTab];
  return (
    <AdminLayout>
      <Heading
        title="Add Hotel"
        subTitle="Lorem ipsum dolor sit amet, consectetur."
      />

      <div className="bg-white py-10 px-7 rounded-md shadow shadow-slate-200">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="mt-8">
          <Tab />
        </div>
      </div>
    </AdminLayout>
  );
};

export default AddHotel;

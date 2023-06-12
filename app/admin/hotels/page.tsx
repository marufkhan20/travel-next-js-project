"use client";
import AdminLayout from "@/components/admin/AdminLayout";
import HotelsList from "@/components/admin/hotels/HotelsList";
import Tabs from "@/components/admin/hotels/Tabs";
import Heading from "@/components/admin/shared/Heading";
import Paginations from "@/components/admin/shared/Paginations";
import Button from "@/components/ui/Button";
import { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";

const Hotels = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <AdminLayout>
      <div className="flex items-center justify-between">
        <Heading
          title="All Hotels"
          subTitle="Lorem ipsum dolor sit amet, consectetur."
        />
        <Button>
          <div className="flex items-center gap-3">
            Add Hotel <BsArrowUpRight className="text-xl" />
          </div>
        </Button>
      </div>

      <div className="p-8 rounded bg-white shadow shadow-slate-200">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="mt-8">
          <HotelsList />
        </div>

        <div>
          <Paginations />
        </div>
      </div>
    </AdminLayout>
  );
};

export default Hotels;

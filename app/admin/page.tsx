import AdminLayout from "@/components/admin/AdminLayout";
import EarningStatistics from "@/components/admin/dashboard/EarningStatistics";
import Information from "@/components/admin/dashboard/Information";
import RecentBookings from "@/components/admin/dashboard/RecentBookings";
import Heading from "@/components/admin/shared/Heading";

const page = () => {
  return (
    <AdminLayout>
      <Heading
        title="Dashboard"
        subTitle="Lorem ipsum dolor sit amet, consectetur."
      />
      <Information />

      <div className="flex justify-between gap-6 mt-8 mb-14">
        <div className="w-[60%]">
          <EarningStatistics />
        </div>
        <div className="w-[40%]">
          <RecentBookings />
        </div>
      </div>
    </AdminLayout>
  );
};

export default page;

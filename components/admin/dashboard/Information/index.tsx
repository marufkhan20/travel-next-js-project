import InfoItem from "./InfoItem";

const Information = () => {
  return (
    <section className="grid grid-cols-4 gap-6">
      <InfoItem
        title="Pending"
        balance={"12,800"}
        description="Total pending"
        icon="1"
      />
      <InfoItem
        title="Earnings"
        balance={"14,200"}
        description="Total earnings"
        icon="2"
      />
      <InfoItem
        title="Bookings"
        balance={"8,100"}
        description="Total bookings"
        icon="3"
      />
      <InfoItem
        title="Services"
        balance={"22,786"}
        description="Total bookable services"
        icon="4"
      />
    </section>
  );
};

export default Information;

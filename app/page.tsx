"use client";

import Banner from "@/components/home/Banner";
import Blogs from "@/components/home/Blogs";
import Destinations from "@/components/home/Destinations";
import DestinationsList from "@/components/home/DestinationsList";
import Recommended from "@/components/home/Recommended";
import Reviews from "@/components/home/Reviews";
import Services from "@/components/home/Services";

const Page = () => {
  return (
    <main>
      <Banner />
      <Destinations />
      <Recommended />
      <Services />
      <Reviews />
      <Blogs />
      <DestinationsList />
    </main>
  );
};

export default Page;

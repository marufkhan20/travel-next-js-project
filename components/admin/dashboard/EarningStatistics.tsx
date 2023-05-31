"use client";
import Select from "@/components/ui/Select";
import { useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const pdata = [
  {
    name: "Python",
    student: 13,
    fees: 10,
  },
  {
    name: "Javascript",
    student: 15,
    fees: 12,
  },
  {
    name: "PHP",
    student: 5,
    fees: 10,
  },
  {
    name: "Java",
    student: 10,
    fees: 5,
  },
  {
    name: "C#",
    student: 9,
    fees: 4,
  },
  {
    name: "C++",
    student: 10,
    fees: 8,
  },
];

const EarningStatistics = () => {
  const [filtler, setFilter] = useState("This Week");
  return (
    <div className="bg-white py-8 px-6 rounded-md shadow shadow-gray-100">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-heading">Earning Statistics</h3>
        <Select
          options={["Animation", "Design", "Illustration", "Business"]}
          onChange={setFilter}
          value={filtler}
          type="secondary"
        />
      </div>

      {/* chart */}
      <div className="mt-10 -ml-10">
        <ResponsiveContainer width="100%" aspect={3}>
          <LineChart data={pdata}>
            <CartesianGrid />
            <XAxis dataKey="name" interval="preserveStartEnd" />
            <YAxis dataKey="student" interval="preserveStartEnd" />
            <Line dataKey="student" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EarningStatistics;

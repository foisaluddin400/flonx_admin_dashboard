<<<<<<< HEAD
import React, { useState } from "react";
import HigherIco from "../icon/HigherIco";
import LowerIco from "../icon/LowerIco";
import ProductIco from "../icon/ProductIco";
=======
import React from "react";
import { ShoppingBag, DollarSign, Package } from "lucide-react";
import HigherIco from "../icon/HigherIco";
import LowerIco from "../icon/LowerIco";
import ProductIco from "../icon/ProductIco";
import EarningIco from "../icon/EarningIco";
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
import CategoryIco from "../icon/CategoryIco";
import ShiftsIco from "../icon/ShiftsIco";
import { FaChevronDown } from "react-icons/fa";
import { Select } from "antd";
<<<<<<< HEAD
import { useGetDahboardActivityQuery } from "../../page/redux/api/manageApi";

const { Option } = Select;

const Activity = () => {
  const [frame, setFrame] = useState("Last 24 Hours");




// fix API call
const { data: dashboardActivity } = useGetDahboardActivityQuery({ fram: frame }); // <-- 'fram' as API expects
  const activity = dashboardActivity?.data;
// helper function for dynamic text
const getChangeText = (percent) => {
  let periodText = "";
  switch (frame) {
    case "Last 24 Hours":
      periodText = "yesterday";
      break;
    case "Last Week":
      periodText = "last week";
      break;
    case "Last Fortnight":
      periodText = "last fortnight";
      break;
    case "Last Month":
      periodText = "last month";
      break;
    case "Last Year":
      periodText = "last year";
      break;
    default:
      periodText = "previous";
  }
  return percent >= 0 ? `Higher than ${periodText}` : `Lower than ${periodText}`;
};
  return (
    <div className="border border-[#2A2448] rounded-xl mt-6">
=======

const Activity = () => {
  return (
    <div className="border border-[#2A2448] rounded-xl  mt-6">
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
      
      {/* Header */}
      <div className="flex border-b px-3 py-3 border-[#2A2448] justify-between items-center">
        <h2 className="text-lg font-semibold italic text-gray-300">
<<<<<<< HEAD
          Showing activities for {frame}
        </h2>

        <Select
          className="custom-select -mt-2"
          placeholder="Select"
          value={frame}
          onChange={(value) => setFrame(value)}
          suffixIcon={<FaChevronDown className="text-[#C9C6D6] text-sm mt-2" />}
        >
          <Option value="Last 24 Hours">Last 24 Hours</Option>
          <Option value="Last Week">Last Week</Option>
          <Option value="Last Fortnight">Last Fortnight</Option>        
          <Option value="Last Month">Last Month</Option>
          <Option value="Last Year">Last Year</Option>
=======
          Showing activities for Today
        </h2>

            <Select
          className="custom-select -mt-2"
          placeholder="Select"
          dropdownClassName="custom-select-dropdown"
          suffixIcon={<FaChevronDown className="text-[#C9C6D6] text-sm mt-2" />} // Optional: Remove default icon if you want a custom one
        >
          <Option value="all">All</Option>
          <Option value="snack">Today</Option>
          <Option value="main-course">Yesterday</Option>
    
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
        </Select>
      </div>

      <div className="flex px-5 py-4 justify-between items-center">
        
        {/* Left Stats */}
        <div className="space-y-6">

<<<<<<< HEAD
          {/* Users */}
=======
          {/* Orders */}
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
          <div className="flex items-center gap-4">
            <div className="bg-[#1a1238] p-3 rounded-xl">
              <CategoryIco color={"#822CE7"} />
            </div>

            <div>
              <p className="text-gray-400 text-sm italic">Users Joined</p>
<<<<<<< HEAD
              <p className="text-purple-400 text-lg font-semibold">
                {activity?.users?.count || 0}
              </p>
            </div>
          </div>

          {/* Bartenders */}
=======
              <p className="text-purple-400 text-lg font-semibold">113</p>
            </div>
          </div>

          {/* Earnings */}
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
          <div className="flex items-center gap-4">
            <div className="bg-[#1a1238] p-3 rounded-xl">
              <ProductIco color={"#822CE7"} />
            </div>

            <div>
              <p className="text-gray-400 text-sm italic">Bartenders Joined</p>
<<<<<<< HEAD
              <p className="text-purple-400 text-lg font-semibold">
                {activity?.bartenders?.count || 0}
              </p>
            </div>
          </div>

          {/* Venue Owners */}
=======
              <p className="text-purple-400 text-lg font-semibold">$ 1176</p>
            </div>
          </div>

          {/* Trending */}
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
          <div className="flex items-center gap-4">
            <div className="bg-[#1a1238] p-3 rounded-xl">
              <ShiftsIco color={"#822CE7"} />
            </div>

            <div>
              <p className="text-gray-400 text-sm italic">Venue Owners Joined</p>
<<<<<<< HEAD
              <p className="text-purple-400 text-lg font-semibold">
                {activity?.venueOwners?.count || 0}
              </p>
            </div>
          </div>
=======
              <p className="text-purple-400 text-lg font-semibold">05</p>
            </div>
          </div>

>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
        </div>

        {/* Right Stats */}
        <div className="text-right space-y-10">

<<<<<<< HEAD
          {/* Users Change */}
         {/* Users Change */}
{/* Users Change */}
<div className={`flex items-center gap-1 text-sm font-medium ${
  activity?.users?.changePercent >= 0 ? "text-green-400" : "text-red-400"
}`}>
  {activity?.users?.changePercent >= 0 ? <HigherIco /> : <LowerIco />}
  {(activity?.users?.changePercent || 0).toFixed(1)}%
  <span className="text-gray-400 ml-2">
    {getChangeText(activity?.users?.changePercent || 0)}
  </span>
</div>

{/* Bartenders Change */}
<div className={`flex items-center gap-1 text-sm font-medium ${
  activity?.bartenders?.changePercent >= 0 ? "text-green-400" : "text-red-400"
}`}>
  {activity?.bartenders?.changePercent >= 0 ? <HigherIco /> : <LowerIco />}
  {(activity?.bartenders?.changePercent || 0).toFixed(1)}%
  <span className="text-gray-400 ml-2">
    {getChangeText(activity?.bartenders?.changePercent || 0)}
  </span>
</div>

{/* Venue Owners Change */}
<div className={`flex items-center gap-1 text-sm font-medium ${
  activity?.venueOwners?.changePercent >= 0 ? "text-green-400" : "text-red-400"
}`}>
  {activity?.venueOwners?.changePercent >= 0 ? <HigherIco /> : <LowerIco />}
  {(activity?.venueOwners?.changePercent || 0).toFixed(1)}%
  <span className="text-gray-400 ml-2">
    {getChangeText(activity?.venueOwners?.changePercent || 0)}
  </span>
</div>

        </div>
=======
          <div className="text-green-400 flex items-center
            gap-1 text-sm font-medium">
            <HigherIco></HigherIco> 5% <span className="text-gray-400 ml-2">Higher Than Yesterday</span>
          </div>

          <div className="text-red-400 flex items-center
            gap-1 text-sm font-medium">
            <LowerIco></LowerIco> 5% <span className="text-gray-400 ml-2">Lower Than Yesterday</span>
          </div>

          <div className="text-purple-400 text-sm">
            16 <span className="text-gray-400">- Time Ordered</span>
          </div>

        </div>

>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
      </div>
    </div>
  );
};

export default Activity;
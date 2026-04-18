import React from "react";
import { Navigate } from "../../Navigate";
import { FiEye, FiDownload } from "react-icons/fi";
import QRCode from "react-qr-code"; // optional if you want dynamic QR
import { Link } from "react-router-dom";

const HelpSupportDetails = () => {
  const venue = {
    name: "Midnight Lounge",
    owner: "Daniel Roberts",
    reason: "Notification Issue",
    email: "daniel@midnightlounge.com",
    contact: "+1 (512) 555-0199",
    location: "Austin, Texas, USA",
  };

  return (
    <div className="p-3 h-[87vh] overflow-auto">
      <Navigate title="Help & Support" />
  <div className="flex items-center gap-4">
         
          
        </div>
      {/* Venue Details */}
      <div className=" border text-white border-[#2A2448] rounded-xl  space-y-3">
      <div className="border-b italic border-[#2A2448] p-3">
        <h1>Bartender Details </h1>
      </div>

        <div className="grid p-3 grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-400 italic">Name</p>
            <p>{venue.name}</p>
          </div>
          <div>
            <p className="text-gray-400 italic">Email</p>
            <p>{venue.email}</p>
          </div>
          <div>
            <p className="text-gray-400 italic">Contact Reason</p>
            <p>{venue.reason}</p>
          </div>
            <div>
            <p className="text-gray-400 italic">Submitted On</p>
            <p>July 10, 2025</p>
          </div>
          <div>
            <p className="text-gray-400">Status</p>
            <button className="bg-[#FFB02033] px-2 mt-1 text-[#FFB020] rounded-full ">To Do</button>
          </div>
         
          <div className="col-span-2">
            <p className="text-gray-400 italic">Message</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae placeat deleniti explicabo odio quasi voluptates repellendus vel minima? Sed, nobis?</p>
          </div>
        </div>
      </div>



      {/* Update Details Button */}
      <div className="mt-6">
    
          <button className="bg-gradient-to-tr w-[185px] from-[#822CE7] to-[#BB82FF] text-white shadow-md px-3 py-2 rounded-full">
            Mark as Solved
          </button>
   
      </div>
    </div>
  );
};

export default HelpSupportDetails;
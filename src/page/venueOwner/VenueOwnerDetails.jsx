import React, { useState } from "react";
import { Navigate } from "../../Navigate";
import { FiDownload, FiEye } from "react-icons/fi";
import QRCode from "react-qr-code";

const VenueOwnerDetails = () => {
  const [activeTab, setActiveTab] = useState("owner");

  const venue = {
    name: "Midnight Lounge",
    owner: "Daniel Roberts",
    email: "daniel@midnightlounge.com",
    contact: "+1 (512) 555-0199",
    location: "Austin, Texas, USA",
  };

  return (
    <div className="p-3 h-[87vh] overflow-auto">
      <Navigate title="Venue Owner" />

      {/* Radio Tab */}
     <div className="flex gap-6 mt-4">
      
      {/* Owner Profile */}
      <button
        onClick={() => setActiveTab("owner")}
        className={`flex items-center gap-3 px-4 py-2 rounded-full border transition-all
        ${
          activeTab === "owner"
            ? "border-[#822CE7] bg-[#1A0F2E]"
            : "border-[#2A2448]"
        }`}
      >
        <span
          className={`w-5 h-5 rounded-full flex items-center justify-center border-2
          ${
            activeTab === "owner"
              ? "border-[#822CE7]"
              : "border-[#2A2448]"
          }`}
        >
          {activeTab === "owner" && (
            <span className="w-3 h-3 rounded-full bg-gradient-to-r from-[#822CE7] to-[#BB82FF]" />
          )}
        </span>

        <span className="text-lg text-gray-200 italic">
          Owner Profile
        </span>
      </button>

      {/* Venue Profile */}
      <button
        onClick={() => setActiveTab("venue")}
        className={`flex items-center gap-3 px-4 py-2 rounded-full border transition-all
        ${
          activeTab === "venue"
            ? "border-[#822CE7] bg-[#1A0F2E]"
            : "border-[#2A2448]"
        }`}
      >
        <span
          className={`w-5 h-5 rounded-full flex items-center justify-center border-2
          ${
            activeTab === "venue"
              ? "border-[#822CE7]"
              : "border-[#2A2448]"
          }`}
        >
          {activeTab === "venue" && (
            <span className="w-3 h-3 rounded-full bg-gradient-to-r from-[#822CE7] to-[#BB82FF]" />
          )}
        </span>

        <span className="text-lg text-gray-200 italic">
          Venue Profile
        </span>
      </button>
    </div>

      {/* Owner Profile */}
      {activeTab === "owner" && (
        <div>
          <div className="flex items-center gap-4 mt-5">
            <img
              src={"https://i.pravatar.cc/150?img=1"}
              alt="Owner"
              className="w-20 h-20 object-cover rounded-lg"
            />
          </div>

          <div className="mt-6 border text-white border-[#2A2448] rounded-xl space-y-3">
            <div className="border-b italic border-[#2A2448] p-3">
              <h1>Owner Profile</h1>
            </div>

            <div className="grid p-3 grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-400 italic">Name</p>
                <p>{venue.owner}</p>
              </div>

              <div>
                <p className="text-gray-400 italic">Email</p>
                <p>{venue.email}</p>
              </div>

              <div>
                <p className="text-gray-400 italic">Phone</p>
                <p>{venue.contact}</p>
              </div>

              <div>
                <p className="text-gray-400 italic">Location</p>
                <p>{venue.location}</p>
              </div>
            </div>
          </div>
            <div className="mt-6">
        <button className="bg-gradient-to-tr w-[185px] from-[#822CE7] to-[#BB82FF] text-white shadow-md px-3 py-2 rounded-full">
          Unblock User
        </button>
      </div>
        </div>
      )}

      {/* Venue Profile */}
      {activeTab === "venue" && (
        <div className="mt-5">
           <div className="flex items-center gap-4">
        <img
          src={"https://i.pravatar.cc/150?img=1"}
          alt="Venue Logo"
          className="w-20 h-20 object-cover rounded-lg"
        />
      </div>
      {/* Venue Details */}
      <div className="mt-6 border text-white border-[#2A2448] rounded-xl  space-y-3">
        <div className="border-b italic border-[#2A2448] p-3">
          <h1>Venue Details </h1>
        </div>

        <div className="grid p-3 grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-400 italic">Venue Name</p>
            <p>{venue.name}</p>
          </div>
          <div>
            <p className="text-gray-400 italic">Owner Name</p>
            <p>{venue.owner}</p>
          </div>
          <div>
            <p className="text-gray-400 italic">Email</p>
            <p>{venue.email}</p>
          </div>
          <div>
            <p className="text-gray-400 italic">Contact Number</p>
            <p>{venue.contact}</p>
          </div>
          <div className="col-span-2">
            <p className="text-gray-400 italic">Location</p>
            <p>{venue.location}</p>
          </div>
        </div>
      </div>

      {/* QR Code Section */}
      <div className="mt-6 border border-[#2A2448] rounded-xl ">
        <div className="border-b italic border-[#2A2448] text-white p-3">
          <h1>Venue QR Code </h1>
        </div>
        <div className="p-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-white p-2 rounded">
              <QRCode value={venue.name} size={64} />
            </div>
            <div>
              <p className=" text-[#C9C6D6] italic">{venue.name}</p>
              <p className="text-gray-400 text-sm">
                Share this QR code so customers can quickly view your Venue
                profile and menu.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="bg-[#2A2448] p-3 rounded-lg hover:bg-[#3A2B5C]">
              <FiEye className="text-gray-300" />
            </button>
            <button className="bg-[#2A2448] p-3 rounded-lg hover:bg-[#3A2B5C]">
              <FiDownload className="text-gray-300" />
            </button>
          </div>
        </div>
      </div>
        </div>
      )}

      {/* Action Button */}
    
    </div>
  );
};

export default VenueOwnerDetails;
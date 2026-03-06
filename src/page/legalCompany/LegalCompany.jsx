import React from "react";
import { Navigate } from "../../Navigate";
import { Link } from "react-router-dom";

const LegalCompany = () => {
  const company = {
    companyName: "Midnight Lounge Ltd.",
    businessType: "Nightclub & Lounge",
    registeredAddress: "123 Downtown Street, Austin, Texas, USA",
    email: "info@midnightlounge.com",
    location: "Austin, Texas, USA",
    website: "https://midnightlounge.com",
  };

  return (
    <div className="p-3 h-[87vh] overflow-auto">
      <Navigate title="Legal Company" />

      {/* Company Details */}
      <div className="border text-white border-[#2A2448] rounded-xl space-y-3">
        <div className="border-b border-[#2A2448] p-3">
          <h1>Legal & Company Info</h1>
        </div>

        <div className="grid p-3 grid-cols-2 gap-4 text-sm">
          
          <div>
            <p className="text-gray-400">Company Name</p>
            <p>{company.companyName}</p>
          </div>

          <div>
            <p className="text-gray-400">Business Type</p>
            <p>{company.businessType}</p>
          </div>

          <div>
            <p className="text-gray-400">Contact Email</p>
            <p>{company.email}</p>
          </div>

          <div>
            <p className="text-gray-400">Location</p>
            <p>{company.location}</p>
          </div>

          <div className="col-span-2">
            <p className="text-gray-400">Registered Address</p>
            <p>{company.registeredAddress}</p>
          </div>

          <div className="col-span-2">
            <p className="text-gray-400">Official Website Link</p>
            <Link
              to={company.website}
              target="_blank"
              className="text-[#BB82FF] underline"
            >
              {company.website}
            </Link>
          </div>

        </div>
      </div>

      {/* Save Button */}
      <div className="mt-6">
        <Link to={'/dashboard/LegalCompany/add'}>
        <button className="bg-gradient-to-tr w-[185px] from-[#822CE7] to-[#BB82FF] text-white shadow-md px-3 py-2 rounded-full">
          Save Changes
        </button></Link>
      </div>
    </div>
  );
};

export default LegalCompany;
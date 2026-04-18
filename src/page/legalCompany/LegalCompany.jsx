import React from "react";
import { Navigate } from "../../Navigate";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { useGetLegalCompanyQuery } from "../redux/api/manageApi";

const LegalCompany = () => {
  const { data: legalCompanyData, isLoading } = useGetLegalCompanyQuery();

  const company = legalCompanyData?.data;

  if (isLoading) {
    return <p className="text-white p-3">Loading...</p>;
  }
=======

const LegalCompany = () => {
  const company = {
    companyName: "Midnight Lounge Ltd.",
    businessType: "Nightclub & Lounge",
    registeredAddress: "123 Downtown Street, Austin, Texas, USA",
    email: "info@midnightlounge.com",
    location: "Austin, Texas, USA",
    website: "https://midnightlounge.com",
  };
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59

  return (
    <div className="p-3 h-[87vh] overflow-auto">
      <Navigate title="Legal Company" />

      {/* Company Details */}
      <div className="border text-white border-[#2A2448] rounded-xl space-y-3">
        <div className="border-b border-[#2A2448] p-3">
          <h1>Legal & Company Info</h1>
        </div>

        <div className="grid p-3 grid-cols-2 gap-4 text-sm">
<<<<<<< HEAD

          <div>
            <p className="text-gray-400">Company Name</p>
            <p>{company?.companyName}</p>
=======
          
          <div>
            <p className="text-gray-400">Company Name</p>
            <p>{company.companyName}</p>
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
          </div>

          <div>
            <p className="text-gray-400">Business Type</p>
<<<<<<< HEAD
            <p>{company?.businessType}</p>
=======
            <p>{company.businessType}</p>
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
          </div>

          <div>
            <p className="text-gray-400">Contact Email</p>
<<<<<<< HEAD
            <p>{company?.contactEmail}</p>
          </div>

          <div>
            <p className="text-gray-400">Contact Phone</p>
            <p>{company?.contactPhone}</p>
          </div>

          <div>
            <p className="text-gray-400">Jurisdiction</p>
            <p>{company?.jurisdiction}</p>
=======
            <p>{company.email}</p>
          </div>

          <div>
            <p className="text-gray-400">Location</p>
            <p>{company.location}</p>
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
          </div>

          <div className="col-span-2">
            <p className="text-gray-400">Registered Address</p>
<<<<<<< HEAD
            <p>{company?.registeredAddress}</p>
=======
            <p>{company.registeredAddress}</p>
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
          </div>

          <div className="col-span-2">
            <p className="text-gray-400">Official Website Link</p>
<<<<<<< HEAD
            <a
              href={company?.officialWebsite}
              target="_blank"
              rel="noreferrer"
              className="text-[#BB82FF] underline"
            >
              {company?.officialWebsite}
            </a>
=======
            <Link
              to={company.website}
              target="_blank"
              className="text-[#BB82FF] underline"
            >
              {company.website}
            </Link>
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
          </div>

        </div>
      </div>

<<<<<<< HEAD
      {/* Button */}
      <div className="mt-6">
        <Link to={"/dashboard/LegalCompany/add"}>
          <button className="bg-gradient-to-tr w-[185px] from-[#822CE7] to-[#BB82FF] text-white shadow-md px-3 py-2 rounded-full">
            Add Legal
          </button>
        </Link>
=======
      {/* Save Button */}
      <div className="mt-6">
        <Link to={'/dashboard/LegalCompany/add'}>
        <button className="bg-gradient-to-tr w-[185px] from-[#822CE7] to-[#BB82FF] text-white shadow-md px-3 py-2 rounded-full">
          Save Changes
        </button></Link>
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
      </div>
    </div>
  );
};

export default LegalCompany;
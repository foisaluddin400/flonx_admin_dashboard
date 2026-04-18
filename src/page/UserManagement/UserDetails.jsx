import React from "react";
import { Navigate } from "../../Navigate";
<<<<<<< HEAD
import { useParams } from "react-router-dom";
import {
  useGetSingleUserQuery,
  useUserBlockUnblockMutation,
} from "../redux/api/userApi";
import { handleDeleteConfirm } from "../../components/ConfirmDelete";
import { message, Spin } from "antd";

const UserDetails = () => {
  const { id } = useParams();

  const { data: singleUserDetailsData, isLoading } =
    useGetSingleUserQuery({id});

  const [blockUnblock, { isLoading: actionLoading }] =
    useUserBlockUnblockMutation();

  const user = singleUserDetailsData?.data;

  // ✅ Block/Unblock
  const handleBlockUnblock = async () => {
    const userId = user?.user?._id;
    const isBlocked = user?.user?.isBlocked;

    handleDeleteConfirm({
      title: isBlocked ? "Unblock User" : "Block User",
      content: isBlocked
        ? "Are you sure you want to unblock this user?"
        : "Are you sure you want to block this user?",

      onConfirm: async () => {
        try {
          await blockUnblock(userId).unwrap();
          message.success(
            isBlocked ? "User unblocked successfully" : "User blocked successfully"
          );
        } catch (error) {
          message.error("Failed");
        }
      },
    });
  };

  if (isLoading) return <Spin />;

  return (
    <div className="p-3 h-[87vh] overflow-auto">
      <Navigate title="User Details" />

      {/* Profile Image */}
      <div className="flex items-center gap-4">
        <img
          src={user?.profile_image || "https://i.pravatar.cc/150"}
          alt="User"
          className="w-20 h-20 object-cover rounded-lg"
        />
      </div>

      {/* User Details */}
      <div className="mt-6 border text-white border-[#2A2448] rounded-xl space-y-3">
        <div className="border-b italic border-[#2A2448] p-3">
          <h1>User Details</h1>
=======
import { FiEye, FiDownload } from "react-icons/fi";
import QRCode from "react-qr-code"; // optional if you want dynamic QR
import { Link } from "react-router-dom";

const UserDetails = () => {
  const venue = {
    name: "Midnight Lounge",
    owner: "Daniel Roberts",
    email: "daniel@midnightlounge.com",
    contact: "+1 (512) 555-0199",
    location: "Austin, Texas, USA",
  };

  return (
    <div className="p-3 h-[87vh] overflow-auto">
      <Navigate title="User Details" />
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
          <h1>User Details </h1>
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
        </div>

        <div className="grid p-3 grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-400 italic">Name</p>
<<<<<<< HEAD
            <p>{user?.name || "N/A"}</p>
          </div>

          <div>
            <p className="text-gray-400 italic">Email</p>
            <p>{user?.email}</p>
          </div>

          <div>
            <p className="text-gray-400 italic">Joined On</p>
            <p>
              {user?.createdAt
                ? new Date(user.createdAt).toLocaleDateString()
                : "N/A"}
            </p>
          </div>

          <div>
            <p className="text-gray-400 italic">Status</p>
            <span
              className={`px-3 py-1 rounded-full italic text-sm ${
                user?.user?.isBlocked
                  ? "bg-red-500/20 text-red-500"
                  : "bg-green-500/20 text-green-500"
              }`}
            >
              {user?.user?.isBlocked ? "Blocked" : "Active"}
            </span>
=======
            <p>{venue.name}</p>
          </div>
          <div>
            <p className="text-gray-400 italic">Email</p>
            <p>{venue.email}</p>
          </div>
          <div className="">
            <p className="text-gray-400 italic" >Joined On</p>
            <p>Jul 14, 2025</p>
          </div>
          <div>
            <p className="text-gray-400 italic">Status</p>
            <button className="bg-[#22C55E33] px-2 mt-1 text-[#22C55E] rounded-full italic">
              Active
            </button>
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Block Button */}
      <div className="mt-6">
        <button
          onClick={handleBlockUnblock}
          disabled={actionLoading}
          className={`w-[185px] px-4 py-3 rounded-full text-white ${
            actionLoading
              ? "bg-[#b879ff]"
              : user?.user?.isBlocked
              ? "bg-red-500"
              : "bg-[#822CE7] hover:bg-[#4a0e8f]"
          }`}
        >
          {actionLoading ? (
            <>
              <Spin size="small" />{" "}
              {user?.user?.isBlocked ? "Unblocking..." : "Blocking..."}
            </>
          ) : user?.user?.isBlocked ? (
            "Unblock User"
          ) : (
            "Block User"
          )}
=======
      {/* Update Details Button */}
      <div className="mt-6">
        <button className="bg-gradient-to-tr w-[185px] from-[#822CE7] to-[#BB82FF] text-white shadow-md px-3 py-2 rounded-full">
          Unblock User
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
        </button>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default UserDetails;
=======
export default UserDetails;
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59

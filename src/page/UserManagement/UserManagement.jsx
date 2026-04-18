import React, { useState } from "react";
import { Input, Modal, Pagination, Select, Table, message } from "antd";
import { MdBlockFlipped } from "react-icons/md";
import { FaArrowLeft, FaChevronDown } from "react-icons/fa";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { SearchOutlined } from "@ant-design/icons";
import { LuEye } from "react-icons/lu";
import { Navigate } from "../../Navigate";
import UserDtailsIco from "../../components/icon/UserDtailsIco";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import {
  useGetAllUserQuery,
  useUserBlockUnblockMutation,
} from "../redux/api/userApi";
import { handleDeleteConfirm } from "../../components/ConfirmDelete";

const UserManagement = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState(undefined);

  const pageSize = 10;
  const { data: userData } = useGetAllUserQuery({
    searchTerm,
    page: currentPage,
    limit: pageSize,
    
    status,
  });
  const [blockUnblock] = useUserBlockUnblockMutation();
  const users = userData?.data?.result || [];
=======

const UserManagement = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  // Dummy data
  const dummyUsers = Array.from({ length: 5 }, (_, index) => ({
    key: index + 1,
    name: `User ${index + 1}`,
    email: `user${index + 1}@example.com`,
    phone: `+8801${Math.floor(100000000 + Math.random() * 900000000)}`,
    blockId: index % 2 === 0,
    image: `https://i.pravatar.cc/150?img=${index + 10}`,
    createdAt: new Date().toLocaleDateString(),
  }));
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59

  // Modal states
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

<<<<<<< HEAD
=======
  const showModal2 = (record) => {
    setSelectedUser(record);
    setIsModalOpen2(true);
  };

>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
  const handleCancel2 = () => {
    setIsModalOpen2(false);
    setSelectedUser(null);
  };

  // Dummy Block/Unblock
<<<<<<< HEAD
const handleBlockUnblock = async (data) => {
  const id = data?.user?._id;
  const isBlocked = data?.user?.isBlocked;

  handleDeleteConfirm({
    title: isBlocked ? "Unblock User" : "Block User",
    content: isBlocked
      ? "Are you sure you want to unblock this user? They will be able to access the platform again."
      : "Are you sure you want to block this user? They will no longer be able to access the platform.",
    
    onConfirm: async () => {
      try {
        await blockUnblock(id).unwrap();
        message.success(
          isBlocked ? "User unblocked successfully" : "User blocked successfully"
        );
      } catch (error) {
        message.error("Failed");
      }
    },
  });
};
=======
  const handleBlockUnblock = (id) => {
    message.success(`User with ID ${id} blocked/unblocked successfully`);
  };

>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
  const columns = [
    {
      title: "User",
      key: "name",
      render: (_, record) => (
        <div className="flex items-center gap-3">
          <img
<<<<<<< HEAD
            src={record.profile_image || "https://i.pravatar.cc/150"}
            className="w-10 h-10 object-cover rounded-full"
=======
            src={record.image}
            className="w-10 h-10 object-cover rounded-full"
            alt="User Avatar"
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
          />
          <span>{record.name}</span>
        </div>
      ),
    },

    {
      title: "Email",
      dataIndex: "email",
<<<<<<< HEAD
=======
      key: "email",
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
    },

    {
      title: "Phone",
      dataIndex: "phone",
<<<<<<< HEAD
=======
      key: "phone",
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
    },

    {
      title: "Join Date",
<<<<<<< HEAD
      render: (_, record) => new Date(record.createdAt).toLocaleDateString(),
=======
      dataIndex: "createdAt",
      key: "createdAt",
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
    },

    {
      title: "Status",
<<<<<<< HEAD
      render: (_, record) => {
        const isBlocked = record.user?.isBlocked;

        return (
          <span
            className={`px-3 py-1 italic rounded-full text-sm ${
              isBlocked
                ? "bg-red-500/20 text-red-500"
                : "bg-green-500/20 text-green-500"
            }`}
          >
            {isBlocked ? "Blocked" : "Active"}
          </span>
        );
      },
=======
      key: "status",
      render: (_, record) => (
        <span
          className={`px-3 py-1 italic rounded-full text-sm ${
            record.blockId
              ? "bg-red-500/20 text-red-500"
              : "bg-green-500/20 text-green-500"
          }`}
        >
          {record.blockId ? "Blocked" : "Active"}
        </span>
      ),
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
    },

    {
      title: "Action",
<<<<<<< HEAD
      align: "end",
      render: (_, record) => (
        <div className="flex gap-2 justify-end items-center">
          {/* Details */}
          <Link to={`/dashboard/UserManagement/details/${record._id}`}>
            <button className="w-[30px] h-[30px] bg-[#822CE71A] flex justify-center items-center rounded-md">
              <UserDtailsIco />
            </button>
          </Link>

          {/* Block / Unblock */}
          <button
            onClick={() => handleBlockUnblock(record)}
            className={`w-[30px] h-[30px] flex justify-center items-center rounded-md ${
              record.user?.isBlocked
                ? "bg-[#EF44441A] text-[#EF4444]"
                : "bg-[#22C55E1A] text-[#22C55E]"
            }`}
=======
      key: "action",
      align: "end",
      render: (_, record) => (
        <div className="flex gap-2 justify-end items-center">
          <Link to={`/dashboard/UserManagement/details/${record.key}`}>
          <button
            className="w-[30px] h-[30px] bg-[#822CE71A] flex justify-center items-center text-lg rounded-md"
           
          >
            <UserDtailsIco></UserDtailsIco>
          </button></Link>

          <button
            onClick={() => handleBlockUnblock(record?.block)}
            className={`w-[30px] h-[30px] flex justify-center items-center text-lg rounded-md ${
              record.blockId
                ? "bg-[#EF44441A] text-[#EF4444] "
                : "bg-[#22C55E1A] text-[#22C55E]"
            } `}
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
          >
            <MdBlockFlipped />
          </button>
        </div>
      ),
    },
  ];

  // Pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

<<<<<<< HEAD
=======
  // Paginated data
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const paginatedUsers = dummyUsers.slice(start, end);

>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
  return (
    <div className=" p-3 h-[87vh] overflow-auto ">
      <div className="flex mb-3 justify-between ">
        <Navigate title={"User Management"} />
<<<<<<< HEAD
        <div className="flex gap-2 items-center">
          {/* 🔍 Search */}
          <Input
            placeholder="Search User..."
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="custom-input"
          />

          {/* 🔽 Status Filter */}
          <Select
            className="custom-select -mt-2"
            placeholder="Select Status"
            dropdownClassName="custom-select-dropdown"
            suffixIcon={
              <FaChevronDown className="text-[#C9C6D6] text-sm mt-2" />
            }
            allowClear
            onChange={(value) => {
              if (!value || value === "all") {
                setStatus(undefined); // 🔥 nothing sent
              } else {
                setStatus(value);
              }
              setCurrentPage(1);
            }}
          >
            <Option value="all">All</Option>
            <Option value="block">Block</Option>
            <Option value="unblock">Unblock</Option>
          </Select>
=======
        <div className="flex  items-center">
          

          <div className=" px-3 border-[#2A2448] justify-between items-center">
               <Select
          className="custom-select -mt-2"
          placeholder="Select User"
          dropdownClassName="custom-select-dropdown"
          suffixIcon={<FaChevronDown className="text-[#C9C6D6] text-sm mt-2" />} // Optional: Remove default icon if you want a custom one
        >
          <Option value="all">All Users</Option>
          <Option value="snack">Active Users</Option>
          <Option value="main-course">Blocked Users</Option>
          


        </Select>
          </div>
          <Input placeholder="Search By Name..." className="custom-input" />
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
        </div>
      </div>

      <Table
<<<<<<< HEAD
        dataSource={userData?.data?.result}
=======
        dataSource={paginatedUsers}
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
        columns={columns}
        pagination={false}
        scroll={{ x: "max-content" }}
        className="custom-table "
      />

      {/* Modal */}
      <Modal
        open={isModalOpen2}
        centered
        onCancel={handleCancel2}
        footer={null}
      >
        {selectedUser && (
          <div className="w-full max-w-md p-5 mx-auto">
            <div className="flex flex-col items-center mb-6">
              <div className="w-24 h-24 rounded-full bg-blue-100 mb-3 overflow-hidden">
                <img
                  src={selectedUser.image}
                  alt="Profile avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-bold">{selectedUser.name}</h2>

              <div className="flex items-center text-gray-500 mt-1">
                <AiOutlinePhone size={16} className="text-gray-400" />
                <span className="ml-1 text-sm">{selectedUser.phone}</span>
              </div>

              <div className="flex items-center text-gray-500 mt-1">
                <GoLocation size={16} className="text-gray-400" />
                <span className="ml-1 text-sm">Location unavailable</span>
              </div>

              <div className="flex items-center text-gray-500 mt-1">
                <AiOutlineMail size={16} className="text-gray-400" />
                <span className="ml-1 text-sm">{selectedUser.email}</span>
              </div>
            </div>
          </div>
        )}
      </Modal>
<<<<<<< HEAD
      <div className="bg-[#822CE71A] w-full py-3 flex justify-center">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={userData?.data?.meta?.total || 0}
          onChange={(page) => setCurrentPage(page)}
          showSizeChanger={false}
        />
      </div>
=======
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
    </div>
  );
};

export default UserManagement;

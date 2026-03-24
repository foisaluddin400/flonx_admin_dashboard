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

const VenueOwner = () => {
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

  // Modal states
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const showModal2 = (record) => {
    setSelectedUser(record);
    setIsModalOpen2(true);
  };

  const handleCancel2 = () => {
    setIsModalOpen2(false);
    setSelectedUser(null);
  };

  // Dummy Block/Unblock
  const handleBlockUnblock = (id) => {
    message.success(`User with ID ${id} blocked/unblocked successfully`);
  };

  const columns = [
    {
      title: "User",
      key: "name",
      render: (_, record) => (
        <div className="flex items-center gap-3">
          <img
            src={record.image}
            className="w-10 h-10 object-cover rounded-full"
            alt="User Avatar"
          />
          <span>{record.name}</span>
        </div>
      ),
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },

    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },

    {
      title: "Join Date",
      dataIndex: "createdAt",
      key: "createdAt",
    },

    {
      title: "Status",
      key: "status",
      render: (_, record) => (
        <span
          className={`px-3 italic py-1 rounded-full text-sm ${
            record.blockId
              ? "bg-red-500/20 text-red-500"
              : "bg-green-500/20 text-green-500"
          }`}
        >
          {record.blockId ? "Blocked" : "Active"}
        </span>
      ),
    },

    {
      title: "Action",
      key: "action",
      align: "end",
      render: (_, record) => (
        <div className="flex gap-2 justify-end items-center">
          <Link to={`/dashboard/venue_owner/details/${record.key}`}>
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

  // Paginated data
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const paginatedUsers = dummyUsers.slice(start, end);

  return (
    <div className=" p-3 h-[87vh] overflow-auto ">
      <div className="flex mb-3 justify-between ">
        <Navigate title={"Venue Owner"} />
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
        </div>
      </div>

      <Table
        dataSource={paginatedUsers}
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
    </div>
  );
};

export default VenueOwner;

import React, { useState } from "react";
import { Input, Pagination, Table } from "antd";
import { LuEye } from "react-icons/lu";
import { Navigate } from "../../Navigate";
import AddIco from "../../components/icon/AddIco";
import EyeIco from "../../components/icon/EyeIco";
import { Link } from "react-router-dom";

const HelpSupport = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  // Dummy Shift Data
  const dummyShifts = Array.from({ length: 5 }, (_, index) => ({
    key: index + 1,
    no: index + 1,
    name: `Bartender ${index + 1}`,
    email: `bartender${index + 1}@mail.com`,
    requestedOn: "Notification Issue",
    shiftDate: "15 Jun 2026",
    status: index % 2 === 0 ? "To Do" : "Resolved",
    image: `https://i.pravatar.cc/150?img=${index + 10}`,
  }));

  const columns = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "User Info",
      key: "bartender",
      render: (_, record) => (
        <div className="flex items-center gap-3">
          <img
            src={record.image}
            className="w-10 h-10 object-cover rounded-full"
            alt="bartender"
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
      title: "Contact Reason",
      dataIndex: "requestedOn",
      key: "requestedOn",
    },
    {
      title: "Submitted On",
      dataIndex: "shiftDate",
      key: "shiftDate",
    },
    {
      title: "Status",
      key: "status",
      render: (_, record) => (
        <span
          className={`px-3 py-1 italic rounded-full text-xs ${
            record.status === "Approved"
              ? "bg-green-500/20 text-green-400"
              : "bg-yellow-500/20 text-yellow-400"
          }`}
        >
          {record.status}
        </span>
      ),
    },
    {
      title: "Action",
      key: "action",
      align: "end",
      render: (_, record) => (
        <div className="flex justify-end">
          <Link to={`/dashboard/HelpSupport/details/${record.key}`}>
            <button className="w-[36px] h-[36px] text-lg bg-[#22C55E1A] flex justify-center items-center text-[#22C55E] rounded cursor-pointer">
            <EyeIco />
          </button>
          </Link>
        </div>
      ),
    },
  ];

  // Pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const paginatedShifts = dummyShifts.slice(start, end);

  return (
    <div className="p-3 h-[87vh] overflow-auto">
      {/* Top Section */}
      <div className="flex justify-between mb-4">
        <Navigate title={"Help & Support"} />

        
      </div>

      {/* Table */}
      <Table
        dataSource={paginatedShifts}
        columns={columns}
        pagination={false}
        scroll={{ x: "max-content" }}
        className="custom-table"
      />

  
    </div>
  );
};

export default HelpSupport;

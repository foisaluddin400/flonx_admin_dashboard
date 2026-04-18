import React, { useState } from "react";
<<<<<<< HEAD
import { Pagination, Table } from "antd";
import { Navigate } from "../../Navigate";
import EyeIco from "../../components/icon/EyeIco";
import { Link } from "react-router-dom";
import { useGetSupportQuery } from "../redux/api/manageApi";
=======
import { Input, Pagination, Table } from "antd";
import { LuEye } from "react-icons/lu";
import { Navigate } from "../../Navigate";
import AddIco from "../../components/icon/AddIco";
import EyeIco from "../../components/icon/EyeIco";
import { Link } from "react-router-dom";
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59

const HelpSupport = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

<<<<<<< HEAD
  // ✅ API CALL
  const { data: supportData, isLoading } = useGetSupportQuery({
    page: currentPage,
    limit: pageSize,
  });

  // ✅ Transform API data → table format
  const tableData =
    supportData?.data?.result?.map((item, index) => ({
      key: item._id,
      no: (currentPage - 1) * pageSize + index + 1,
      name: item.userDetails?.name,
      email: item.userDetails?.email,
      contactReason: item.contactReason,
      message: item.message,
      status: item.status,
      createdAt: new Date(item.createdAt).toLocaleDateString(),
      image:
        item.userDetails?.profile_image ||
        "https://i.pravatar.cc/150",
    })) || [];

  // ✅ Table Columns
=======
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

>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
  const columns = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "User Info",
<<<<<<< HEAD
      key: "user",
=======
      key: "bartender",
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
      render: (_, record) => (
        <div className="flex items-center gap-3">
          <img
            src={record.image}
            className="w-10 h-10 object-cover rounded-full"
<<<<<<< HEAD
            alt=""
=======
            alt="bartender"
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
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
<<<<<<< HEAD
      dataIndex: "contactReason",
      key: "contactReason",
    },
    {
      title: "Submitted On",
      dataIndex: "createdAt",
      key: "createdAt",
=======
      dataIndex: "requestedOn",
      key: "requestedOn",
    },
    {
      title: "Submitted On",
      dataIndex: "shiftDate",
      key: "shiftDate",
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
    },
    {
      title: "Status",
      key: "status",
      render: (_, record) => (
        <span
          className={`px-3 py-1 italic rounded-full text-xs ${
<<<<<<< HEAD
            record.status === "RESOLVED"
=======
            record.status === "Resolved"
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
              ? "bg-[#3D8BFF33] text-[#3D8BFF]"
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
<<<<<<< HEAD
            <button className="w-[36px] h-[36px] bg-[#822CE71A] flex justify-center items-center text-[#22C55E] rounded">
              <EyeIco />
            </button>
=======
            <button className="w-[36px] h-[36px] text-lg bg-[#822CE71A] flex justify-center items-center text-[#22C55E] rounded cursor-pointer">
            <EyeIco />
          </button>
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
          </Link>
        </div>
      ),
    },
  ];

<<<<<<< HEAD
  return (
    <div className="p-3 h-[87vh] overflow-auto">
      {/* Header */}
      <div className="flex justify-between mb-4">
        <Navigate title={"Help & Support"} />
=======
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

        
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
      </div>

      {/* Table */}
      <Table
<<<<<<< HEAD
        dataSource={tableData}
        columns={columns}
        loading={isLoading}
=======
        dataSource={paginatedShifts}
        columns={columns}
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
        pagination={false}
        scroll={{ x: "max-content" }}
        className="custom-table"
      />

<<<<<<< HEAD
      {/* Pagination */}
      <div className="bg-[#822CE71A] w-full py-3 flex justify-center">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={supportData?.data?.meta?.total || 0}
          onChange={(page) => setCurrentPage(page)}
          showSizeChanger={false}
        />
      </div>
=======
  
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
    </div>
  );
};

<<<<<<< HEAD
export default HelpSupport;
=======
export default HelpSupport;
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59

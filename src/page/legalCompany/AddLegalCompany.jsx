import React from "react";
import { Navigate } from "../../Navigate";
import { Form, Input, message } from "antd";

const AddLegalCompany = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log("Form Values:", values);
    message.success("Company information updated successfully!");
    form.resetFields();
  };

  return (
    <div className="p-3 h-[87vh] overflow-auto">
      <Navigate title="Legal & Company Info" />

      <div className="mt-6 border text-white border-[#2A2448] rounded-xl space-y-3">
        <div className="border-b border-[#2A2448] p-3">
          <h1 className="text-xl font-semibold pb-1">
            Update Legal & Company Info
          </h1>
          <p className="text-[#C9C6D6]">
            Manage and update your official company details.
          </p>
        </div>

        <div className="p-4">
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            className="custom-form"
          >
            <div className="grid grid-cols-2 gap-4">

              {/* Company Name */}
              <Form.Item
                label="Company Name"
                name="companyName"
                rules={[
                  { required: true, message: "Please enter company name" },
                ]}
              >
                <Input
                  className="custom-input"
                  placeholder="Enter company name"
                />
              </Form.Item>

              {/* Business Type */}
              <Form.Item
                label="Business Type"
                name="businessType"
                rules={[
                  { required: true, message: "Please enter business type" },
                ]}
              >
                <Input
                  className="custom-input"
                  placeholder="Enter business type"
                />
              </Form.Item>

              {/* Contact Email */}
              <Form.Item
                label="Contact Email"
                name="email"
                rules={[
                  { required: true, message: "Please enter contact email" },
                  { type: "email", message: "Enter a valid email" },
                ]}
              >
                <Input
                  className="custom-input"
                  placeholder="Enter contact email"
                />
              </Form.Item>

              {/* Location */}
              <Form.Item
                label="Location"
                name="location"
                rules={[
                  { required: true, message: "Please enter location" },
                ]}
              >
                <Input
                  className="custom-input"
                  placeholder="Enter location"
                />
              </Form.Item>

              {/* Registered Address */}
              <Form.Item
                label="Registered Address"
                name="registeredAddress"
                className="col-span-2"
                rules={[
                  { required: true, message: "Please enter registered address" },
                ]}
              >
                <Input.TextArea
                  rows={3}
                  className="custom-input"
                  placeholder="Enter registered address"
                />
              </Form.Item>

              {/* Website */}
              <Form.Item
                label="Official Website Link"
                name="website"
                className="col-span-2"
              >
                <Input
                  className="custom-input"
                  placeholder="Enter official website link"
                />
              </Form.Item>

            </div>

            <Form.Item>
              <button
                type="submit"
                className="bg-gradient-to-tr w-[185px] from-[#822CE7] to-[#BB82FF] text-white shadow-md px-3 py-2 rounded-full"
              >
                Save The Changes
              </button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddLegalCompany;
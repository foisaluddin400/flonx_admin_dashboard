<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { Navigate } from "../../Navigate";
import { Form, Input, Upload, message, Spin } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import {
  Autocomplete,
  GoogleMap,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "../redux/api/userApi";

const UpdateProfile = () => {
  const [locationValue, setLocationValue] = useState("");
  const { data: profileData, isLoading } = useGetProfileQuery();
  const [updateProfile, { isLoading: updating }] = useUpdateProfileMutation();

  const profile = profileData?.data;
  console.log(profile);
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [position, setPosition] = useState(null);
  const [map, setMap] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);

  const containerStyle = {
    width: "100%",
    height: "300px",
    marginTop: "10px",
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  // ✅ SET DEFAULT DATA
// ✅ useEffect এ locationValue সেট করো
useEffect(() => {
  if (profile) {
    form.setFieldsValue({
      name: profile.name,
      email: profile.email,
      contact: profile.phone,
      location: profile.address, 
    });

  
    if (profile.address) {
      setLocationValue(profile.address);
    }

    if (profile.profile_image) {
      setFileList([
        {
          uid: "-1",
          name: "image.png",
          status: "done",
          url: profile.profile_image,
        },
      ]);
    }

    if (profile.address) {
      setPosition({
        lat: 23.8103,
        lng: 90.4125,
      });
    }
  }
}, [profile, form]);
  // 📍 Google Place Change
// ✅ handlePlaceChanged এ locationValue সেট করো
const handlePlaceChanged = () => {
  if (autocomplete) {
    const place = autocomplete.getPlace();

    if (place?.geometry) {
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      const address = place.formatted_address;

      // ✅ দুটোই update করো
      setLocationValue(address);
      form.setFieldsValue({ location: address });

      setPosition({ lat, lng });
      map?.panTo({ lat, lng });
    }
  }
};
  // 📸 Upload
=======
import React, { useState } from "react";
import { Navigate } from "../../Navigate";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Upload,
  message,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Option } = Select;

const UpdateProfile = () => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

  // Upload handle
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
<<<<<<< HEAD
    const imgWindow = window.open(src);
    imgWindow?.document.write(`<img src="${src}" />`);
  };

  // ✅ SUBMIT
  const handleSubmit = async (values) => {
    try {
      if (!position) {
        return message.error("Select location");
      }

      const formData = new FormData();

      if (fileList[0]?.originFileObj) {
        formData.append("profile_image", fileList[0].originFileObj);
      }

      // 🔥 safer (no nested JSON)
      formData.append("name", values.name);
      formData.append("phone", values.contact);
      formData.append("address", values.location);
      formData.append(
        "location",
        JSON.stringify({
          type: "Point",
          coordinates: [position.lng, position.lat],
        }),
      );

      await updateProfile({ data: formData }).unwrap();

      message.success("Updated!");
    } catch (error) {
      console.error(error);
      message.error("Update failed");
    }
  };
  if (isLoading) return <Spin />;
=======
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const handleSubmit = (values) => {
    console.log("Form Values:", values);
    console.log("Uploaded Files:", fileList);
    message.success("Product added successfully!");
    form.resetFields();
    setFileList([]);
  };
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59

  return (
    <div className="p-3 h-[87vh] overflow-auto">
      <Navigate title="Manage Profile" />

      <div className="mt-6 border text-white border-[#2A2448] rounded-xl space-y-3">
        <div className="border-b border-[#2A2448] p-3">
<<<<<<< HEAD
          <h1 className="text-[18px] italic font-semibold">Update Profile</h1>
=======
          <h1 className="text-[18px] italic font-semibold pb-1">Update Profile</h1>
          <p className="text-[#C9C6D6] italic">
        Review and update your details as needed.
          </p>
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
        </div>

        <div className="p-4">
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            className="custom-form"
          >
<<<<<<< HEAD
            {/* Image */}
            <Form.Item label="Upload Image">
=======
            {/* Product Image */}
            <Form.Item label="Product Image">
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
              <Upload
                listType="picture-card"
                fileList={fileList}
                onChange={onChange}
                onPreview={onPreview}
<<<<<<< HEAD
              >
                {fileList.length < 1 && <PlusOutlined />}
              </Upload>
            </Form.Item>

            <div className="grid grid-cols-2 gap-4">
              <Form.Item
                label="Profile Name"
                name="name"
                rules={[{ required: true }]}
              >
                <Input className="custom-input" placeholder="Enter name" />
              </Form.Item>

              <Form.Item label="Email" name="email">
                <Input className="custom-input" disabled />
              </Form.Item>

              <Form.Item
                label="Contact"
                name="contact"
                rules={[{ required: true }]}
              >
                <Input className="custom-input" placeholder="Enter number" />
              </Form.Item>

<Form.Item
  name="location"
  label="Location"
  rules={[{ required: true }]}
>
  {isLoaded ? (
    <Autocomplete
      onLoad={(auto) => setAutocomplete(auto)}
      onPlaceChanged={handlePlaceChanged}
    >
      <Input
        className="custom-input"
        placeholder="Search location"
        value={locationValue}                          // ✅ controlled value
        onChange={(e) => setLocationValue(e.target.value)} // ✅ manual typing support
      />
    </Autocomplete>
  ) : (
    <Input disabled placeholder="Loading map..." />
  )}
</Form.Item>
            </div>

            {/* Map */}
            {isLoaded && position && (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={position}
                zoom={15}
                onLoad={(map) => setMap(map)}
              >
                <Marker position={position} />
              </GoogleMap>
            )}
=======
                multiple
                className="custom-upload"
              >
                {fileList.length < 5 && (
                  <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8, color: "white" }}>Upload Venue Image here</div>
                  </div>
                )}
              </Upload>
            </Form.Item>

            {/* Product Name */}
           <div className="grid grid-cols-2 gap-4">
             <Form.Item
              label="Profile Name"
              name="name"
              rules={[{ required: true, message: "Please enter profile name" }]}
            >
              <Input
                className="custom-input"
                placeholder="Enter profile name"
              />
            </Form.Item>

            {/* Product Slogan */}
         

           <Form.Item
              label="Venue Email"
              name="email"
              rules={[{ required: true, message: "Please enter venue email" }]}
            >
              <Input
                className="custom-input"
                placeholder="Enter venue email"
              />
            </Form.Item>

            {/* Product Slogan */}
            <Form.Item
              label="Contact Number"
              name="contact"
            
              rules={[
                { required: true, message: "Please enter contact number" },
              ]}
            >
              <Input
                className="custom-input"
                placeholder="Enter contact number"
              />
            </Form.Item>
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
          

           </div>
            
      
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59

            <Form.Item>
              <button
                type="submit"
<<<<<<< HEAD
                disabled={updating}
                className="py-3 px-4 rounded-full text-white bg-[#822CE7]"
              >
                {updating ? "Updating..." : "Update Profile"}
=======
                className="bg-gradient-to-tr w-[185px] from-[#822CE7] to-[#BB82FF] text-white shadow-md px-3 py-2 rounded-full"
              >
                Update Details
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
              </button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;

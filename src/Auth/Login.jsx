<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginAdminMutation } from "../page/redux/api/userApi";
import { useDispatch } from "react-redux";
import { message, Spin } from "antd";

import { setToken } from "../page/redux/features/auth/authSlice";
const Login = () => {
  const [login, { isLoading }] = useLoginAdminMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  // ✅ Load saved data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("loginData");

    if (savedData) {
      const parsed = JSON.parse(savedData);
      setFormValues({
        email: parsed.email || "",
        password: parsed.password || "",
        remember: true,
      });
    }
  }, []);

  // ✅ Handle input change
=======
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formValues, setFormValues] = useState({ email: "", password: "", remember: false });
  const [showPassword, setShowPassword] = useState(false);

>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

<<<<<<< HEAD
  // ✅ Submit
    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await login({
        email: formValues.email,
        password: formValues.password,
      }).unwrap();

      const role = res?.data?.role;

      // ✅ Role check
      if (role === "superAdmin") {
        dispatch(setToken(res?.data?.accessToken));

        console.log("Login Success:", res);
        navigate("/");
        message.success(res?.message);

        // remember me
        if (formValues.remember) {
          localStorage.setItem(
            "loginData",
            JSON.stringify({
              email: formValues.email,
              password: formValues.password,
            }),
          );
        } else {
          localStorage.removeItem("loginData");
        }
      } else {
        message.error("You are not authorized to login!");
      }
    } catch (err) {
      message.error(err?.data?.message || "Login failed");
      console.error("Login Error:", err);
    }
=======
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Values:", formValues);
    // Here you can handle API login
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
  };

  return (
    <div className="flex font-nunito justify-center items-center min-h-screen px-4 lg:px-0 bg-[#0F0B1A]">
      <div className="w-full max-w-lg lg:p-8 p-4 border border-[#2A2448] rounded-lg bg-[#822CE71A]">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-white mb-2 italic">Welcome Back</h2>
        <p className="text-gray-400 mb-6 text-sm">
          Sign in to continue exploring and managing your Venue.
        </p>

        {/* Form */}
<<<<<<< HEAD
     <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="text-gray-400 block mb-1">
              Enter Email Address
            </label>
=======
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="text-gray-400 block mb-1">Enter Email Address</label>
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
<<<<<<< HEAD
              className="w-full px-3 py-2 bg-[#1D1733] border border-[#2A2448] text-white rounded-lg"
              required
=======
              placeholder="Enter Email Address"
              className="w-full px-3 py-2 bg-[#1D1733] border border-[#2A2448] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#822CE7] placeholder-white/70"
              
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-400 block mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formValues.password}
                onChange={handleChange}
<<<<<<< HEAD
                className="w-full px-3 py-2 bg-[#1D1733] border border-[#2A2448] text-white rounded-lg"
                required
=======
                placeholder="••••••••"
                className="w-full px-3 py-2 bg-[#1D1733] border border-[#2A2448] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#822CE7] placeholder-white/70"
               
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
<<<<<<< HEAD
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
=======
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

<<<<<<< HEAD
          {/* Remember */}
          <div className="flex items-center justify-between">
=======
          {/* Remember & Forgot */}
          <div className="flex items-center justify-between mb-4">
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
            <label className="flex items-center gap-2 text-gray-400">
              <input
                type="checkbox"
                name="remember"
                checked={formValues.remember}
                onChange={handleChange}
<<<<<<< HEAD
              />
              Remember me
            </label>

            <Link to={"/forgot-password"} className="text-sm text-[#9D5BFF]">
=======
                className="accent-[#822CE7]"
              />
              Remember me
            </label>
            <Link
              to={"/forgot-password"}
              className="text-sm text-[#9D5BFF] hover:underline focus:outline-none"
            >
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
              Forget password?
            </Link>
          </div>

<<<<<<< HEAD
          {/* Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 rounded text-white flex justify-center items-center gap-2 ${
              isLoading ? "bg-[#b879ff]" : "bg-[#822CE7] hover:bg-[#4a0e8f]"
            }`}
          >
            {isLoading ? (
              <>
                <Spin size="small" />
                <span>Logging in...</span>
              </>
            ) : (
              "Login"
            )}
          </button>
=======
          {/* Login Button */}
          <Link to={'/'}>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-tr from-[#822CE7] to-[#BB82FF] text-white shadow-md px-3 py-2 mt-2 rounded-full"
          >
            Log In
          </button></Link>
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
        </form>
     
      </div>
    </div>
  );
};

export default Login;
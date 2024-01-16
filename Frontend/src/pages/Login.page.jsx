import React, { useState } from "react";
import image from "../assets/login.png";
import bg_image from "../assets/background1.jpg";
import { IoMdLogIn } from "react-icons/io";
import axios from "axios";
import "./Page.css";

const Login = () => {
  const [showPwd, setShowPwd] = useState("password");
  const [isChecked, setIsChecked] = useState(false);

  const [values, setValues] = useState({
    symbol: "",
    password: "",
  });

  const handleShowPassword = () => {
    setShowPwd((showPwd) => (showPwd === "password" ? "text" : "password"));
    setIsChecked((isChecked) => (isChecked === false ? true : false));
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/auth/adminlogin", values)
      .then((result) => {
        return console.log("🚀 ~ handlesubmit ~ result:", result);
      })
      .catch((err) => {
        return console.log("🚀 ~ handlesubmit ~ err:", err);
      });
  };

  return (
    <>
      <div
        className={`min-w-full min-h-[100vh] flex justify-center items-center relative`}
      >
        <img
          src={bg_image}
          alt=""
          className="w-full h-screen  absolute object-fill z-0"
        />
        <form
          className={`bg-transparent border-[1px] border-slate-200 z-1 rounded-2xl w-[80vw] sm:w-[50vw] md:w-[40vw] h-[450px] md:h-[495px] shadow-2xl shadow-slate-950 relative`}
          onSubmit={handlesubmit}
        >
          <div className={`flex flex-col justify-center items-center`}>
            <figure className={`w-auto h-[200px]`}>
              <img src={image} alt="main image" />
            </figure>
            <div
              className={`flex flex-col justify-center w-90vw sm:gap-[0.5px] md:gap-1 py-1 md:py-8 cursor-pointer`}
            >
              <h1 className="flex justify-center items-center text-lg font-jet-mono font-extrabold">
                Complain Management System
              </h1>

              {/* symbol section */}
              <label htmlFor="symbol">Enter your Symbol Number:</label>
              <input
                placeholder="Symbol Number"
                type="number"
                onChange={(e) =>
                  setValues({ ...values, symbol: e.target.value })
                }
                className={`text-sm p-[4px] w-[250px] rounded-sm border border-slate-950 bg-transparent font-epic font-extrabold placeholder-slate-900`}
              />
              {/* password section */}
              <label htmlFor="password">Enter your Password: </label>
              <input
                type={showPwd}
                placeholder="Password"
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
                className={`text-sm p-[4px] w-[250px] rounded-sm border border-slate-950 bg-transparent font-epic font-extrabold placeholder-slate-900`}
              />
              <div className={`cursor-pointer`}>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  defaultChecked={isChecked}
                  onClick={handleShowPassword}
                />
                <span className="font-jet-mono text-sm">Show Password</span>
              </div>
              <div className={`flex justify-center items-center`}>
                <button
                  type="submit"
                  className={`border rounded-xl bg-afno-300 m-[10px] md:m-3 py-1 px-3 flex border-slate-800 hover:bg-black hover:text-white font-epic font-extrabold text-md`}
                >
                  Login
                  <IoMdLogIn className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
          <span
            className={`text-xs font-jet-mono text-slate-200 absolute bottom-0 left-2`}
          >
            NOTE: This is only for PMC students.
          </span>
        </form>
      </div>
    </>
  );
};

export default Login;

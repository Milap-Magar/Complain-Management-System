import React, { useState } from "react";
import image from "../assets/login.png";
import "./Page.css";

const Login = () => {
  const [showPwd, setShowPwd] = useState("password");
  const [isChecked, setIsChecked] = useState(false);

  const handleShowPassword = () => {
    setShowPwd((showPwd) => (showPwd === "password" ? "text" : "password"));
    setIsChecked((isChecked) => (isChecked === false ? true : false));
  };

  return (
    <>
    <div className={`max-w-full max-h-screen flex justify-center items-center`}>
      <form action="" className={`bg-afno-200 w-full h-screen`}>
        <div className={`flex flex-col justify-center items-center`}>
          <figure className={``}>
            <img src={image} alt="" />
          </figure>
          <div className={`flex flex-col justify-center w-90vw`}>
            {/* symbol section */}
            <label htmlFor="symbol">Enter your Symbol Number:</label>
            <input
              type="number"
              name=""
              className={` w-[250px] border-[2px]`}
            />
            {/* password section */}
            <label htmlFor="password">Enter your Password: </label>
            <input
              type={showPwd}
              name=""
              className={`w-[250px] border-[2px]`}
            />
            <div className={``}>
              <input
                type="checkbox"
                name=""
                id=""
                checked={isChecked}
                onClick={handleShowPassword}
              />
              <span>Show Password</span>
            </div>
            <div className={``}>
              <button
                type="submit"
                className={`border rounded-xl bg-afno-300 py-1 px-3 flex`}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
      </div>
    </>
  );
};

export default Login;

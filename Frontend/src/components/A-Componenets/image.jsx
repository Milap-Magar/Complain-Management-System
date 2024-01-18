import React from "react";
import bg_image from "../../assets/background1.jpg";

const Image = () => {
  return (
    <>
        <img
          src={bg_image}
          alt=""
          className="w-full h-screen  absolute object-fill z-0"
        />
    </>
  );
};

export default Image;

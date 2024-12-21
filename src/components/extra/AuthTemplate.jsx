import React from "react";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";
import { phoneNumber } from "../../lib/data";

const AuthTemplate = ({ children }) => {
  return (
    <div className="flex flex-col duration-500 gap-2 items-center justify-center w-full h-[100vh]">
      {/* main login container */}
      <div className="w-[90%] duration-500 md:w-[70%] lg:w-[50%] text-xs h-auto border gap-5 shadow-md flex flex-col rounded-md py-[8vh] justify-center items-center">
        <Link to={"/"}>
          <img
            src="/logo.png"
            alt="logo"
            className="duration-500 w-auto max-md:h-[8vh] h-[12vh] object-contain"
          />
        </Link>

        {children}
      </div>

      <div className="w-[90%] md:w-[70%] duration-500 lg:w-[50%] h-auto flex justify-between px-[1vw] items-center">
        {/* whatsApp */}
        <button className="flex font-semibold space-x-1 text-xs items-center duration-500 justify-center w-auto h-auto rounded-full bg-[#fffdfd]">
          <span>{phoneNumber}</span>
        </button>

        {/* social icons */}
        <div className="flex items-center justify-center w-auto h-auto gap-1 duration-500">
          <Link
            to={"/"}
            className="flex items-center duration-500 justify-center w-auto h-auto p-[2%] rounded-full bg-[#fffdfd]"
          >
            <FiFacebook className="text-[#242424] duration-500 size-5" />
          </Link>
          <Link
            to={"/"}
            className="flex items-center duration-500 justify-center w-auto h-auto p-[2%] rounded-full bg-[#fffdfd]"
          >
            <FiInstagram className="text-[#242424] duration-500 size-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthTemplate;

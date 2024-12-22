import React from "react";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { RiTiktokLine } from "react-icons/ri";
import { TbBrandYoutube } from "react-icons/tb";
import { Link } from "react-router-dom";
import {
  facebook,
  instagram,
  menuList,
  phoneNumber,
  tiktok,
  vintageEmail,
  youtube,
} from "../lib/data";

const Footer = () => {
  return (
    <div className="w-full flex-col flex-nowrap min-h-[20vh] h-auto bg-[#242424] text-white flex justify-center items-center duration-500 max-sm:py-[3vh] py-[5vh] gap-[5vh]">
      <div className="flex items-center justify-center w-full h-auto gap-[15vw]">
        {/* menu section */}
        <div className="w-auto max-w-[20vw] h-auto duration-500 gap-y-[1vh] gap-x-[2vw] flex justify-center items-center flex-wrap">
          {menuList?.map((item, idx) => {
            return (
              <Link
                key={idx}
                to={item.path}
                className="text-white underline hover:scale-[101%] capitalize duration-75 font-normal max-sm:text-[0.85rem] text-sm hover:text-white"
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* social container */}
        <div className="flex flex-col items-center justify-center w-auto h-auto gap-[2vh]">
          {/* social icons */}
          <div className="flex items-center justify-center w-auto h-auto gap-[1vw] rounded-md">
            <Link
              to={facebook}
              className="flex items-center hover:scale-[101%] justify-center w-auto h-auto duration-200"
            >
              <FiFacebook className="text-white max-sm:size-5 size-6" />
            </Link>
            <Link
              to={instagram}
              className="flex items-center hover:scale-[101%] justify-center w-auto h-auto duration-200"
            >
              <FiInstagram className="text-white max-sm:size-5 size-6" />
            </Link>
            <Link
              to={tiktok}
              className="flex items-center hover:scale-[101%] justify-center w-auto h-auto duration-200"
            >
              <RiTiktokLine className="text-white max-sm:size-5 size-6" />
            </Link>
            <Link
              to={youtube}
              className="flex items-center hover:scale-[101%] justify-center w-auto h-auto duration-200"
            >
              <TbBrandYoutube className="text-white max-sm:size-5 size-6" />
            </Link>
          </div>

          <div className="flex flex-col items-center justify-center w-auto h-auto">
            {/* phone number */}
            <button className="flex font-semibold space-x-1 text-[.7rem] items-center duration-200 justify-center w-auto h-auto rounded-full bg-transparent">
              <span>{phoneNumber}</span>
            </button>

            {/* email */}
            <button className="flex font-semibold space-x-1 text-[.7rem] items-center duration-200 justify-center w-auto h-auto rounded-full bg-transparent">
              <span>{vintageEmail}</span>
              {/* <MdOutlineEmail className="text-[#242424] size-4 font-semibold" /> */}
            </button>
          </div>
        </div>
      </div>
      {/* copyright container */}
      <div className="flex flex-col items-center justify-center w-full h-auto max-sm:text-[0.7rem] text-xs font-semibold capitalize flex-nowrap text-nowrap whitespace-nowrap">
        <span>{`© 2024 Vintage Leftover. All Rights Reserved.`}</span>
      </div>
    </div>
  );
};

export default Footer;

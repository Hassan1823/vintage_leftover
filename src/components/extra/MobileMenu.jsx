// * imports
import React from "react";
import { Link } from "react-router-dom";

// * local imports
import { menuList, phoneNumber, vintageEmail } from "../../lib/data";

// * lib imports
import { CgProfile } from "react-icons/cg";
import { FiFacebook, FiInstagram, FiShoppingCart } from "react-icons/fi";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const MobileMenu = ({ showMenu, setShowMenu }) => {
  return (
    // main container
    <div className="fixed overflow-hidden duration-700 top-0 left-0 w-dvw h-full z-[99999] bg-[#242424] bg-opacity-70 flex justify-start items-start">
      {/* menu container */}
      <div className="h-full overflow-auto w-[80%] shadow-xl bg-white px-[2%] py-[4%] duration-700">
        <button
          onClick={() => setShowMenu(!showMenu)}
          // className="hidden duration-500 max-md:block"
          className="pt-1 duration-500"
        >
          {showMenu ? (
            <IoClose className="text-[#242424] duration-500 size-6" />
          ) : (
            <IoMdMenu className="text-[#242424] duration-500 size-6" />
          )}
        </button>

        {/* logo */}
        <div className="flex items-center justify-center w-full h-auto">
          <Link to={"/"} onClick={() => setShowMenu(false)}>
            <img
              src="/logo.png"
              alt="logo"
              className="duration-200 w-auto max-md:h-[15vh] h-[15vh] object-contain"
            />
          </Link>
        </div>

        {/* profile and cart */}
        <div className="my-[3%] flex items-center justify-center w-full h-auto border border-black rounded-md">
          <Link
            to={"/profile"}
            onClick={() => setShowMenu(false)}
            className="flex items-center duration-200 justify-center w-auto h-auto p-[2%] rounded-full bg-[#fffdfd]"
          >
            <CgProfile className="text-[#242424] size-6" />
          </Link>
          <Link
            to={"/cart"}
            onClick={() => setShowMenu(false)}
            className="flex items-center duration-200 justify-center w-auto h-auto p-[2%] rounded-full bg-[#fffdfd]"
          >
            <FiShoppingCart className="text-[#242424] size-6" />
          </Link>
        </div>

        {/* menu options */}
        <div className="flex flex-col duration-200 items-center text-center justify-center w-auto h-auto space-y-[3vw] py-[5%]">
          {menuList?.map((item, idx) => {
            return (
              <Link
                onClick={() => setShowMenu(false)}
                to={item?.path}
                key={idx}
                className="text-sm font-semibold p-2 rounded-md w-full duration-500 hover:bg-[#242424] 
               active:bg-[#242424] hover:text-white"
              >
                {item?.label}
              </Link>
            );
          })}
        </div>

        {/* social icons  */}
        <div className="mt-[3%] flex items-center justify-center w-full h-auto border border-black rounded-md">
          <Link
            to={"/"}
            onClick={() => setShowMenu(false)}
            className="flex items-center duration-200 justify-center w-auto h-auto p-[2%] rounded-full bg-[#fffdfd]"
          >
            <FiFacebook className="text-[#242424] size-6" />
          </Link>
          <Link
            to={"/"}
            onClick={() => setShowMenu(false)}
            className="flex items-center duration-200 justify-center w-auto h-auto p-[2%] rounded-full bg-[#fffdfd]"
          >
            <FiInstagram className="text-[#242424] size-6" />
          </Link>
        </div>

        {/* phone number */}
        <button className="flex font-semibold space-x-1 text-xs items-center duration-200 justify-center w-full h-auto rounded-full bg-[#fffdfd]">
          <span>{phoneNumber}</span>
          {/* <SiWhatsapp className="text-[#242424] size-3 font-semibold" /> */}
        </button>

        {/* email */}
        <button className="flex font-semibold space-x-1 text-xs items-center duration-200 justify-center w-full h-auto rounded-full bg-[#fffdfd]">
          <span>{vintageEmail}</span>
          {/* <MdOutlineEmail className="text-[#242424] size-4 font-semibold" /> */}
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;

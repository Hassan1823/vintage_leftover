// * imports
import React from "react";
import { Link } from "react-router-dom";

// * local imports
import { menuList } from "../../lib/data";

//* lib imports
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const HomeLayout = ({ children }) => {
  return (
    <>
      {/* header starts here  */}
      <div className="flex items-center justify-between w-full h-auto px-[1%] pt-[0.2%] text-center bg-transparent ">
        {/* logo and menu container */}
        <div className="w-[65%] h-auto flex justify-between items-center ">
          {/* logo */}
          <img src="/logo.png" alt="logo" className="w-auto h-[12vh]" />

          {/* menu options */}
          <div className="flex items-center justify-center w-auto h-auto space-x-[3vw]">
            {menuList?.map((item, idx) => {
              return (
                <Link
                  to={item?.path}
                  key={idx}
                  className="text-base font-semibold p-2 rounded-full hover:duration-300 hover:bg-[#242424] hover:text-white"
                >
                  {item?.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-end h-auto  w-[30%] gap-[2%] px-[1%]">
          {/* user profile */}
          <Link
            to={"/"}
            className="flex items-center justify-center w-[5vw] h-[5vh] p-[2%] rounded-full bg-[#fffdfd]"
          >
            <CgProfile className="text-[#242424] size-10" />
          </Link>

          {/* cart */}
          <Link
            to={"/"}
            className="flex items-center justify-center w-[5vw] h-[5vh] p-[2%] rounded-full shadow bg-[#242424]"
          >
            <FiShoppingCart className="text-white size-6" />
          </Link>
        </div>
      </div>
      {/* header ends here  */}

      <div className="flex items-center justify-center w-full px-[1%] h-auto bg-transparent shadow-md pb-[1%]">
        {/* <h1 className="text-xs font-bold text-[#242424] ">Vintage Leftover</h1> */}

        {/* search header */}
        <div className="flex items-center justify-center w-auto h-auto ">
          <input
            type="search"
            name="productSearch"
            id="productSearch"
            placeholder="Search ..."
            className="py-1 px-4 border rounded-l-md outline-none focus:outline-none active:outline-none min-w-[20vw]"
          />
          <button className="py-1 px-3 rounded-r-md bg-[#242424] border-black border text-base font-semibold text-white">
            Search
          </button>
        </div>
      </div>

      {/* here come the children */}
      {children}
    </>
  );
};

export default HomeLayout;

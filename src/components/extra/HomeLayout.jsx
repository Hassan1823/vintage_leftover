// * imports
import React from "react";

// * local imports
import { menuList } from "../../lib/data";

//* lib imports
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

const HomeLayout = ({ children }) => {
  return (
    <>
      {/* header starts here  */}
      <div className="flex items-center justify-between w-full h-auto px-4 py-1 text-center bg-transparent shadow-md">
        {/* logo and menu container */}
        <div className="w-[65%] h-auto flex justify-between items-center ">
          {/* logo */}
          <img src="/logo.png" alt="logo" className="w-auto h-[12vh]" />

          {/* menu options */}
          <div className="flex items-center justify-center w-auto h-auto space-x-[3vw]">
            {menuList?.map((item, idx) => {
              return (
                <button
                  key={idx}
                  className="text-base font-semibold p-2 rounded-full hover:duration-300 hover:bg-[#242424] hover:text-white"
                >
                  {item?.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-end h-auto  w-[30%] gap-[2%] px-[1%]">
          {/* user profile */}
          <button className="flex items-center justify-center w-[5vw] h-[5vh] p-[2%] rounded-full bg-[#fffdfd]">
            <CgProfile className="text-[#242424] size-10" />
          </button>

          {/* cart */}
          <button className="flex items-center justify-center w-[5vw] h-[5vh] p-[2%] rounded-full shadow bg-[#242424]">
            <FiShoppingCart className="text-white size-6" />
          </button>
        </div>
      </div>
      {/* header ends here  */}

      {/* search header */}

      {/* here come the children */}
      {children}
    </>
  );
};

export default HomeLayout;

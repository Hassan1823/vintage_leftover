// * imports
import React, { useState } from "react";
import { Link } from "react-router-dom";

// * local imports
import { menuList } from "../../lib/data";
import MobileMenu from "./MobileMenu";

//* lib imports
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const HomeLayout = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {/* header starts here  */}
      <div className="flex items-center justify-between w-full h-auto px-[1%] md:pt-[0.2%] max-md:py-[1%] text-center bg-transparent duration-200">
        {/* menu button */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="hidden duration-500 max-md:block"
        >
          {showMenu ? (
            <IoClose className="text-black duration-500 size-6" />
          ) : (
            <IoMdMenu className="text-black duration-500 size-6" />
          )}
        </button>

        {/* logo and menu container */}
        <div className="max-md:w-auto duration-200 w-[65%] h-auto flex justify-between items-center ">
          {/* logo */}
          <Link to={"/"}>
            <img
              src="/logo.png"
              alt="logo"
              className="duration-200 w-auto max-md:h-[8vh] h-[12vh] object-contain"
            />
          </Link>

          {/* menu options */}
          <div className="flex max-md:hidden duration-200 items-center justify-center w-auto h-auto space-x-[3vw]">
            {menuList?.map((item, idx) => {
              return (
                <Link
                  to={item?.path}
                  key={idx}
                  className="text-sm font-semibold p-2 rounded-full duration-500 hover:bg-[#242424] hover:text-white"
                >
                  {item?.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center duration-200 justify-end h-auto max-md:w-auto w-[30%] gap-[2%] px-[1%]">
          {/* user profile */}
          <Link
            to={"/"}
            className="flex items-center max-md:hidden duration-200 justify-center w-[4vw] h-[4vh] p-[2%] rounded-full bg-[#fffdfd]"
          >
            <CgProfile className="text-[#242424]  lg:size-8 md:size-6 sm:size-5" />
          </Link>

          {/* cart */}
          <Link
            to={"/"}
            className="flex items-center justify-center duration-200 max-sm:w-[10vw] max-md:w-[8vw] w-[5vw] h-[5vh] p-[1%] md:p-[2%] rounded-full shadow bg-[#242424]"
          >
            <FiShoppingCart className="text-white lg:size-5 md:size-4 sm:size-3" />
          </Link>
        </div>
      </div>
      {/* header ends here  */}

      <div className="flex duration-200 items-center justify-center w-full px-[1%] h-auto bg-transparent shadow-md pb-[1%] max-md:pb-[2%]">
        {/* <h1 className="text-xs font-bold text-[#242424] ">Vintage Leftover</h1> */}

        {/* search header */}
        <div className="flex items-center justify-center w-auto h-auto duration-200 ">
          <input
            type="search"
            name="productSearch"
            id="productSearch"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search ..."
            className="py-1 duration-200 px-4 max-md:px-2 border max-md:text-xs text-sm rounded-s-md outline-none focus:outline-none active:outline-none min-w-[20vw] max-md:w-[40vw] "
          />
          <button className="py-1 duration-200 px-3 max-md:px-2 rounded-r-md bg-[#242424] border-black border max-md:text-xs text-sm font-semibold text-white">
            Search
          </button>
        </div>
      </div>

      {/* here come the children */}
      {children}

      {/* showing mobile menu */}
      {showMenu && <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />}
    </>
  );
};

export default HomeLayout;

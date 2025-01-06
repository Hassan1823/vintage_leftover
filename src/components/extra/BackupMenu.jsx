<div className="flex items-center justify-between w-full h-auto max-md:px-[3vw] px-[1%] md:pt-[0.2%] max-md:py-[1%] text-center bg-transparent duration-200 shadow-md">
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
    {/* <Link
            to={"/login"}
            className="flex items-center max-md:hidden duration-200 justify-center w-[4vw] h-[4vh] p-[2%] rounded-full bg-[#fffdfd]"
          >
            <CgProfile className="text-[#242424]  lg:size-8 md:size-6 sm:size-5" />
          </Link> */}

    {/* cart */}
    <button
      onClick={() => setShowCart(!showCart)}
      className="flex items-center justify-center duration-200 max-sm:w-[10vw] max-md:w-[8vw] w-[5vw] h-[5vh] p-[1%] md:p-[2%] rounded-full shadow bg-[#242424] relative"
    >
      <FiShoppingCart className="text-white lg:size-5 md:size-4 sm:size-3" />

      <div className="absolute max-md:-top-2 -top-3 max-md:h-4 max-md:w-4 h-5 w-5 right-0 bg-orange-500 border-orange-500 p-1 max-md:text-[.4rem] text-[.5rem] font-semibold rounded-full text-white">
        6
      </div>
    </button>
  </div>
</div>;

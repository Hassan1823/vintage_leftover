import React, { useState } from "react";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="flex duration-200 items-center justify-center w-full px-[1%] h-auto bg-transparent py-[2%] max-md:py-[3%]">
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
          className="py-1 duration-200 px-4 max-md:px-2 border max-md:text-xs text-sm rounded-md outline-none focus:outline-none active:outline-none bg-transparent min-w-[20vw] max-md:w-[50vw] "
        />
        <button className="ml-[2%] py-1 duration-200 px-3 max-md:px-2 rounded-md bg-[#242424] border-black border max-md:text-xs text-sm font-semibold text-white">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

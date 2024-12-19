import React, { useState } from "react";

const TopProducts = () => {
  const [activeCat, setActiveCat] = useState("All");
  return (
    <div className="flex flex-col duration-500 items-center justify-center w-full h-auto mt-[2vh]">
      <div className="flex items-center justify-center w-auto h-auto text-sm duration-500 border rounded-md max-md:text-xs">
        <button
          onClick={() => setActiveCat("All")}
          className={`${
            activeCat !== "Men" && "border-r"
          } px-2 py-1 duration-500 rounded-s ${
            activeCat === "All" && "bg-slate-400 rounded bg-opacity-30"
          }  max-md:min-w-[17vw] min-w-[10vw] w-auto active:outline-none focus:outline-none`}
        >
          All
        </button>
        <button
          onClick={() => setActiveCat("Men")}
          className={`
            ${activeCat !== "Women" && "border-r"}
       px-2 py-1 duration-500 rounded-s ${
         activeCat === "Men" && "bg-slate-400 rounded bg-opacity-30"
       } max-md:min-w-[17vw] min-w-[10vw] w-auto active:outline-none focus:outline-none`}
        >
          Men
        </button>
        <button
          onClick={() => setActiveCat("Women")}
          className={`px-2 py-1 duration-500 rounded-s ${
            activeCat === "Women" && "bg-slate-400 rounded bg-opacity-30"
          } max-md:min-w-[17vw] min-w-[10vw] w-auto active:outline-none focus:outline-none`}
        >
          Women
        </button>
      </div>
      <div className="flex flex-wrap items-center w-full h-auto duration-500 justify-evenly py-[2vh]">
        products here
      </div>
    </div>
  );
};

export default TopProducts;

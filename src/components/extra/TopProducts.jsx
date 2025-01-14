import React, { useState } from "react";

import ProductCard from "./ProductCard";
import { categories, productsData } from "../lib/data";
import { Link } from "react-router-dom";
import CategoryButton from "./CategoryButton";

const TopProducts = ({ productData }) => {
  const [activeCat, setActiveCat] = useState("All");
  const [showCategory, setShowCategory] = useState(true);

  return (
    <div className="flex flex-col duration-500 items-center justify-center w-[98%] md:w-[95vw] lg:w-[90vw] h-auto mt-[2vh]">
      {/* category list buttons */}

      {showCategory && (
        <div className="flex items-center justify-center w-full h-auto">
          <div className="w-auto max-sm:max-w-[92%] max-w-[90%]  h-auto overflow-x-auto flex max-lg:justify-start justify-start items-center gap-[4vw] hide-scrollbar ">
            {categories?.map((category, idx) => {
              return <CategoryButton key={idx} data={category} />;
            })}
          </div>
        </div>
        //   <div className="flex items-center justify-center w-auto h-auto text-sm duration-500 border rounded-md max-md:text-xs">
        //     <button
        //       onClick={() => setActiveCat("All")}
        //       className={`${
        //         activeCat !== "Men" && "border-r"
        //       } px-2 py-1 duration-500 rounded-s ${
        //         activeCat === "All" && "bg-slate-400 rounded bg-opacity-30"
        //       }  max-md:min-w-[17vw] min-w-[10vw] w-auto active:outline-none focus:outline-none`}
        //     >
        //       All
        //     </button>
        //     <button
        //       onClick={() => setActiveCat("Men")}
        //       className={`
        //       ${activeCat !== "Women" && "border-r"}
        //  px-2 py-1 duration-500 rounded-s ${
        //    activeCat === "Men" && "bg-slate-400 rounded bg-opacity-30"
        //  } max-md:min-w-[17vw] min-w-[10vw] w-auto active:outline-none focus:outline-none`}
        //     >
        //       Men
        //     </button>
        //     <button
        //       onClick={() => setActiveCat("Women")}
        //       className={`px-2 py-1 duration-500 rounded-s ${
        //         activeCat === "Women" && "bg-slate-400 rounded bg-opacity-30"
        //       } max-md:min-w-[17vw] min-w-[10vw] w-auto active:outline-none focus:outline-none`}
        //     >
        //       Women
        //     </button>
        //   </div>
      )}

      {/* products */}
      <div className="flex flex-wrap gap-x-[4vw] gap-y-[2vh] items-center w-full h-auto duration-500 justify-center py-[2vh]">
        {productData?.map((product, idx) => {
          return <ProductCard key={idx} data={product} id={product?._id} />;
        })}
      </div>

      {/* pagination */}
      <div className="flex my-[5vh] items-center justify-center w-auto h-auto text-sm duration-500 border rounded-md max-md:text-xs">
        <button
          className={`px-2 py-1 duration-500 hover:bg-slate-400 rounded-s bg-opacity-30 max-md:min-w-[14vw] min-w-[10vw] w-auto active:outline-none focus:outline-none border-e`}
        >
          Prev
        </button>
        <button
          className={`border-r px-3 max-md:px-2 py-1 duration-500 bg-slate-400 bg-opacity-3 w-auto active:outline-none focus:outline-none text-white`}
        >
          1
        </button>
        <button
          className={`border-r px-3 max-md:px-2 py-1 duration-500 hover:bg-slate-400 bg-opacity-3 w-auto active:outline-none focus:outline-none `}
        >
          2
        </button>
        <button
          className={`border-r px-3 max-md:px-2 py-1 duration-500 hover:bg-slate-400 bg-opacity-3 w-auto active:outline-none focus:outline-none`}
        >
          3
        </button>
        <button
          className={`px-2 py-1 duration-500 rounded-e hover:bg-slate-400  bg-opacity-30 max-md:min-w-[14vw] min-w-[10vw] w-auto active:outline-none focus:outline-none`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TopProducts;

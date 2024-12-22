import React from "react";

// const productImg = "/shirt2.jpg";

import { FiShoppingCart } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";

const ProductCard = ({ data, id }) => {
  return (
    <div className="w-[15vw] max-sm:w-[45vw] max-md:w-[25vw] max-lg:w-[20vw] gap-y-[2%] max-sm:h-[45vh] max-md:h-[50vh] h-[60vh] border-[0.5px] rounded flex flex-col justify-between items-center hover:shadow-md hover:scale-[101%] cursor-default p-[0.3%] duration-300 max-md:mt-[1vh] mt-0">
      <Link to={`/product?id=${id}`} className="w-full h-[60%]">
        <img
          src={data?.productImg}
          alt="product img"
          className="w-full h-full rounded "
        />
      </Link>
      <Link
        to={`/product?id=${id}`}
        className="flex flex-wrap items-center justify-center w-full px-1 text-sm font-semibold text-center capitalize max-sm:text-xs"
      >
        {`polo republica Men's Essentials Pony Embroidered Button-Down Casual Shirt`}
      </Link>

      {/* price container */}
      <div className="flex items-center rounded-md border border-[#242424] w-full h-auto max-sm:text-xs text-sm justify-evenly">
        <span className="line-through">{`Rs ${data.oldPrice}`}</span>
        <span className="font-semibold animate-pulse">{`Rs ${data.newPrice}`}</span>
      </div>

      {/* bottom container */}
      <div className="w-full h-auto flex justify-between px-[1vw] items-center  rounded-md">
        <button className="flex items-center duration-200 justify-center w-auto h-auto p-[2%]  bg-[#fffdfd] space-x-1 ">
          <span className="text-[0.6rem] font-semibold capitalize text-nowrap whitespace-nowrap">
            Add to samples
          </span>
          <MdFavoriteBorder className="text-[#242424] max-sm:size-4 size-5" />
        </button>
        <button className="rounded-full bg-[#242424] border-[#242424] flex items-center duration-200 justify-center w-auto h-auto p-[.5vw] max-sm:p-[1vw]">
          <FiShoppingCart className="text-[#ffffff] max-sm:size-4 size-5" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

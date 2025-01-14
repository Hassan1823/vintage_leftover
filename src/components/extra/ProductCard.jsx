import React, { useState } from "react";

// const productImg = "/shirt2.jpg";

import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import { productImages } from "../lib/data";

const ProductCard = ({ data, id }) => {
  const [addSample, setAddSample] = useState(false);
  const [selectedImg, setSelectedImg] = useState(
    productImages[0] || "/shirt2.jpg"
  );
  return (
    <div className="w-[15vw] max-sm:w-[45vw] max-md:w-[25vw] max-lg:w-[20vw] gap-y-[2%] max-sm:h-[45vh] max-md:h-[50vh] h-[60vh] border-[0.5px] rounded flex flex-col justify-between items-center hover:shadow-md hover:scale-[101%] cursor-default p-[0.3%] duration-300 max-md:mt-[1vh] mt-0">
      <Link to={`/product?id=${id}`} className="w-full h-[55%]">
        <img
          src={selectedImg}
          alt="product img"
          className="w-full h-full rounded "
        />
      </Link>
      <Link
        to={`/product?id=${id}`}
        className="flex flex-wrap items-center justify-center w-full px-1 text-sm font-semibold text-center capitalize max-sm:text-xs"
      >
        {data.name}
      </Link>

      {/* price container */}
      <div className="flex items-center rounded-md border border-[#242424] w-full h-auto max-sm:text-xs text-sm justify-evenly">
        <span className="line-through">{`Rs ${data.discountedPrice}`}</span>
        <span className="font-semibold animate-pulse">{`Rs ${data.price}`}</span>
      </div>

      {/* bottom container */}
      <div className="flex items-center justify-center w-full h-auto rounded-md">
        <button
          onClick={() => setAddSample(!addSample)}
          className="w-1/2 h-auto flex justify-center items-center py-[2%] bg-white"
        >
          {addSample ? (
            <MdOutlineFavorite className="text-orange-500 duration-500 size-5" />
          ) : (
            <MdOutlineFavoriteBorder className="text-orange-500 duration-500 size-5" />
          )}
        </button>
        <button className="w-1/2 h-auto flex justify-center items-center py-[2%] bg-[#242424] rounded-full">
          <FiShoppingCart className="text-[#ffffff] max-sm:size-4 size-5" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

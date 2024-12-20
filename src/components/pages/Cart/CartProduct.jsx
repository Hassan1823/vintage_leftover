import React, { useState } from "react";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { AiTwotoneDelete } from "react-icons/ai";
const CartProduct = ({ data }) => {
  const [itemQuantity, setItemQuantity] = useState(1);

  const handleIncrement = () => {
    if (itemQuantity > 0) {
      setItemQuantity(itemQuantity + 1);
    }
  };

  const handleDecrement = () => {
    if (itemQuantity > 1) {
      setItemQuantity(itemQuantity - 1);
    }
  };
  return (
    <div className="flex flex-nowrap flex-row items-center justify-evenly w-auto h-[20vh] rounded-md shadow-md border py-2 mb-[2vh]">
      {/* product image */}
      <div className="w-[15%] h-full rounded-md">
        <img
          src={data.productImg}
          alt="product img"
          className="object-fill w-full h-full rounded-md"
        />
      </div>

      {/* product name */}
      <span className="w-[20%] pr-3 h-full text-[.4rem] md:text-[.6rem] lg:text-[.8rem] flex justify-center items-center font-semibold capitalize border-e">
        {data.title}
      </span>

      {/* price */}
      <span className="flex flex-row items-center justify-center w-[10%] h-full text-[.6rem] md:text-[.7rem] lg:text-[.8rem] font-semibold flex-nowrap whitespace-nowrap">
        {`Rs ${data.newPrice}`}
      </span>

      {/* quantity */}
      <div className="w-[22%] h-full flex justify-center items-center border-x">
        <button onClick={handleDecrement}>
          <CiCircleMinus className="size-4 lg:size-5 active:bg-[#242424] active:text-white rounded-full duration-500" />
        </button>
        <span className="px-[.8vw] md:px-[0.5vw] text-[10px] md:text-xs">
          {itemQuantity || 0}
        </span>
        <button onClick={handleIncrement}>
          <CiCirclePlus className="size-4 lg:size-5 active:bg-[#242424] active:text-white rounded-full duration-500" />
        </button>
      </div>

      {/* delete item button */}
      <button className="w-[5%] h-full flex justify-center items-center">
        <AiTwotoneDelete className="text-[#242424] size-4 lg:size-5 duration-500" />
      </button>
    </div>
  );
};

export default CartProduct;

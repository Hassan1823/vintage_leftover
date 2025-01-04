import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

import { productsData } from "../../components/lib/data";
import CartProduct from "./CartProduct";

const Cart = ({ showCart, setShowCart }) => {
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
    <div className="fixed overflow-hidden duration-700 top-0 left-0 w-dvw h-full z-[99999] bg-[#242424] bg-opacity-70 flex justify-end items-start">
      {/* menu container */}
      <div className="h-full overflow-auto w-[95%] md:w-[75%] lg:w-[65%] xl:w-[55%] shadow-xl bg-white px-[2%] max-md:px-[1%] max-sm:px-0 py-[2%] duration-700 flex flex-col justify-start items-center relative pb-[15vh]">
        {/* close cart button */}
        <button
          onClick={() => setShowCart(!showCart)}
          // className="hidden duration-500 max-md:block"
          className="max-sm:me-[8vw] max-md:me-[5vw] me-[2vw] flex items-center justify-end w-full h-auto duration-500"
        >
          {showCart ? (
            <IoClose className="text-[#242424] duration-500 size-6" />
          ) : (
            <IoMdMenu className="text-[#242424] duration-500 size-6" />
          )}
        </button>

        {/* main content starts here */}
        <h1 className="text-lg font-semibold my-[2vh]">Cart Items</h1>

        {/* cart product list */}
        {productsData?.map((product, idx) => {
          return (
            // cart product
            <CartProduct data={product} key={idx} />
          );
        })}

        {/* check out button */}
        <div className="fixed shadow-t-xl bg-transparent z-[9999999] bottom-0 right-0 flex items-center justify-center w-[92%] md:w-[72%] lg:w-[62%] xl:w-[52%] h-[15vh] duration-500">
          <div className="flex flex-col items-center justify-center w-full h-full bg-white flex-nowrap">
            {/* quantity and total price */}
            <div className="flex items-center justify-between px-[2vw] w-full h-auto pb-2 capitalize bg-white">
              <span className="text-sm max-md:text-xs">Quantity: 9</span>
              <span className="text-sm max-md:text-xs">price: Rs 9,975</span>
            </div>
            <button className="max-md:px-[8vw] px-[5vw] py-[1vh] rounded-md bg-orange-500 text-white duration-500 capitalize hover:bg-opacity-95 text-[1rem]">
              checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

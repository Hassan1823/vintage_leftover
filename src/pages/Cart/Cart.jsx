import React, { useState } from "react";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { productsData } from "../../components/lib/data";
import { Link } from "react-router-dom";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";

const Cart = ({ showCart, setShowCart }) => {
  const [itemQuantity, setItemQuantity] = useState(1);
  const [activeCat, setActiveCat] = useState("cart");

  // const [open, setOpen] = useState(true);

  // const handleIncrement = () => {
  //   if (itemQuantity > 0) {
  //     setItemQuantity(itemQuantity + 1);
  //   }
  // };

  // const handleDecrement = () => {
  //   if (itemQuantity > 1) {
  //     setItemQuantity(itemQuantity - 1);
  //   }
  // };
  return (
    <Dialog open={showCart} onClose={setShowCart} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-lg transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="flex flex-col h-full overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 px-4 py-6 overflow-y-auto sm:px-6">
                  <div className="flex items-center justify-end">
                    {/* <DialogTitle className="text-lg font-medium text-gray-900">
                      Shopping cart
                    </DialogTitle> */}
                    <div className="flex items-center ml-3 h-7">
                      <button
                        type="button"
                        onClick={() => setShowCart(false)}
                        className="relative p-2 -m-2 text-gray-400 hover:text-gray-500"
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="size-6" />
                      </button>
                    </div>
                  </div>

                  {/* cart and fav buttons */}
                  <div className="flex items-center justify-center w-full h-auto">
                    <div className="flex items-center justify-center w-auto h-auto text-sm duration-500 border rounded-md max-md:text-xs">
                      <button
                        onClick={() => setActiveCat("cart")}
                        className={`${
                          activeCat !== "fav" && "border-r"
                        } px-2 py-1 duration-500 rounded-s ${
                          activeCat === "cart" && "bg-orange-500 rounded"
                        }  max-md:min-w-[17vw] min-w-[10vw] w-auto active:border-orange-500 focus:border-orange-500 flex justify-center items-center`}
                      >
                        <IoCartOutline
                          className={`${
                            activeCat === "cart"
                              ? "text-white"
                              : "text-orange-500"
                          } duration-500 size-8`}
                        />
                      </button>

                      <button
                        onClick={() => setActiveCat("fav")}
                        className={`px-2 py-1 duration-500 rounded-s ${
                          activeCat === "fav" && "bg-orange-500 rounded"
                        } max-md:min-w-[17vw] min-w-[10vw] w-auto active:outline-none focus:outline-none flex justify-center items-center border-none active:border-none`}
                      >
                        <MdOutlineFavoriteBorder
                          className={`${
                            activeCat === "fav"
                              ? "text-white"
                              : "text-orange-500"
                          } duration-500 size-8`}
                        />
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul
                        role="list"
                        className="-my-6 divide-y divide-gray-200"
                      >
                        {productsData?.map((product) => (
                          <li key={product.id} className="flex py-6">
                            <div className="overflow-hidden border border-gray-200 rounded-md size-24 shrink-0">
                              <img
                                alt={product.title}
                                src={product.productImg}
                                className="object-cover size-full"
                              />
                            </div>

                            <div className="flex flex-col flex-1 ml-4">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h5>
                                    <Link
                                      to={`/product?${product.title}`}
                                      className="capitalize text-[.92rem]"
                                    >
                                      {product.title}
                                    </Link>
                                  </h5>
                                  <p className="ml-4">{product.newPrice}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                  {product.color}
                                </p>
                              </div>
                              <div className="flex items-end justify-between flex-1 text-sm">
                                <p className="text-gray-500">
                                  Qty {product.quantity || itemQuantity}
                                </p>

                                <div className="flex">
                                  <button
                                    type="button"
                                    className="font-medium text-orange-500 hover:text-orange-600"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="px-4 py-6 border-t border-gray-200 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>$262.00</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <div className="mt-6">
                    <Link
                      to="/checkout"
                      className="flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-orange-500 border border-transparent rounded-md shadow-sm hover:text-white hover:bg-orange-600"
                    >
                      Checkout
                    </Link>
                  </div>
                  <div className="flex justify-center mt-6 text-sm text-center text-gray-500">
                    <p>
                      or{" "}
                      <button
                        type="button"
                        onClick={() => setShowCart(false)}
                        className="font-medium text-orange-500 hover:text-orange-600"
                      >
                        Continue Shopping
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
    // <div className="fixed overflow-hidden duration-700 top-0 left-0 w-dvw h-full z-[99999] bg-[#242424] bg-opacity-70 flex justify-end items-start">
    //   {/* menu container */}
    //   <div className="h-full overflow-auto w-[95%] md:w-[75%] lg:w-[65%] xl:w-[55%] shadow-xl bg-white px-[2%] max-md:px-[1%] max-sm:px-0 py-[2%] duration-700 flex flex-col justify-start items-center relative pb-[15vh]">
    //     {/* close cart button */}
    //     <button
    //       onClick={() => setShowCart(!showCart)}
    //       // className="hidden duration-500 max-md:block"
    //       className="max-sm:me-[8vw] max-md:me-[5vw] me-[2vw] flex items-center justify-end w-full h-auto duration-500"
    //     >
    //       {showCart ? (
    //         <IoClose className="text-[#242424] duration-500 size-6" />
    //       ) : (
    //         <IoMdMenu className="text-[#242424] duration-500 size-6" />
    //       )}
    //     </button>

    //     {/* main content starts here */}
    //     <h1 className="text-lg font-semibold my-[2vh]">Cart Items</h1>

    //     {/* cart product list */}
    //     {productsData?.map((product, idx) => {
    //       return (
    //         // cart product
    //         <CartProduct data={product} key={idx} />
    //       );
    //     })}

    //     {/* check out button */}
    //     <div className="fixed shadow-t-xl bg-transparent z-[9999999] bottom-0 right-0 flex items-center justify-center w-[92%] md:w-[72%] lg:w-[62%] xl:w-[52%] h-[15vh] duration-500">
    //       <div className="flex flex-col items-center justify-center w-full h-full bg-white flex-nowrap">
    //         {/* quantity and total price */}
    //         <div className="flex items-center justify-between px-[2vw] w-full h-auto pb-2 capitalize bg-white">
    //           <span className="text-sm max-md:text-xs">Quantity: 9</span>
    //           <span className="text-sm max-md:text-xs">price: Rs 9,975</span>
    //         </div>
    //         <Link
    //           to={"/checkout"}
    //           className="max-md:px-[8vw] px-[5vw] py-[1vh] rounded-md bg-orange-500 text-white duration-500 capitalize hover:bg-opacity-95 text-[1rem]"
    //         >
    //           checkout
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Cart;

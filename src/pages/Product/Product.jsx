// * imports
import React, { useState } from "react";

// * local imports
import HomeLayout from "../../components/extra/HomeLayout";
import { productImages, productSizes } from "../../components/lib/data";

// * lip imports
import { MdClose, MdOutlineZoomOutMap } from "react-icons/md";
import { MdZoomInMap } from "react-icons/md";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import ZoomInOut from "./ZoomInOut";
import SizeGuide from "./SizeGuide";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(
    productImages[0] || "/shirt2.jpg"
  );

  const [zoomIn, setZoomIn] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  const [productSize, setProductSize] = useState("xs");
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
    <div>
      <HomeLayout>
        {/* main container for the product */}
        <div className="w-full h-auto duration-500 flex flex-col text-center justify-center items-center gap-[2vh] py-[2vh] mb-[5vh]">
          {/* product name  */}
          <h1 className="text-[1.2rem] max-sm:text-[1rem] font-semibold duration-500 capitalize max-sm:w-[80%] max-md:w-[65%] w-[40%] h-auto">{`polo republica Men's Essentials Pony Embroidered Button-Down Casual Shirt`}</h1>

          {/* main container */}
          <div className="flex flex-row items-start max-md:items-center justify-center w-full h-auto max-md:flex-col gap-[5vw]">
            {/* product images */}
            <div className="flex flex-row flex-nowrap max-md:flex-col-reverse items-center duration-500 justify-center w-auto max-md:w-full max-md:h-auto h-[60vh] max-md:gap-[2vh] gap-[2vw]">
              {/* images grid  */}
              <div className="w-[10vw] max-md:w-[90%] h-full flex duration-500 flex-col max-md:flex-row flex-none justify-evenly items-center gap-[1vh]">
                {productImages?.map((product, idx) => {
                  //   grid image container or box
                  return (
                    <button
                      key={idx}
                      className={`${
                        selectedImg === product ? "border-[2px] " : "border"
                      } w-full h-[23%] max-md:h-[12vh] shadow-md duration-100 hover:scale-[102%]  rounded-md flex justify-center items-center hover:duration-300`}
                      onClick={() => setSelectedImg(product)}
                    >
                      <img
                        src={product}
                        alt="product img"
                        className={` w-full h-full duration-100 rounded-md hover:duration-500 ${
                          selectedImg === product
                            ? "object-contain "
                            : " object-cover"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* main product image container */}
              <div
                className="w-[40vw] max-md:w-[95%] bg-[#000000]/60 h-full max-md:h-[30vh] duration-500 shadow-md rounded-md border flex justify-center items-center relative cursor-pointer"
                onClick={() => setZoomIn(!zoomIn)}
              >
                <img
                  src={selectedImg || `/shirt2.jpg`}
                  alt="product img"
                  className="object-contain w-full h-full duration-500 rounded-md shadow-md"
                />

                {/* zoom in or out button */}
                <button
                  className="absolute text-white duration-300 top-2 right-2"
                  onClick={() => setZoomIn(!zoomIn)}
                >
                  {zoomIn ? (
                    <MdZoomInMap className="duration-300 size-5" />
                  ) : (
                    <MdOutlineZoomOutMap className="duration-300 size-5" />
                  )}
                </button>
              </div>
            </div>

            {/* ------------------------------------------------------ */}

            {/* product details  */}
            <div className="w-[25%] max-md:w-[90%] duration-500 h-full flex flex-col justify-start items-center gap-y-[1vh] gap-x-[1vw]">
              {/* ----------------------------------------- */}
              {/* product price  */}
              <div className="flex items-center justify-between w-full h-auto duration-500 flex-nowrap">
                <h1 className="flex items-center duration-500 justify-start w-full h-auto text-sm max-md:text-[.8rem] font-semibold capitalize">
                  Price:
                </h1>

                {/* save button */}
                <button className="rounded-md max-md:px-[2vw] px-[1vw] py-[.5vh] text-sm font-medium w-auto h-auto flex justify-center items-center flex-nowrap text-nowrap animate-pulse duration-200 whitespace-nowrap bg-orange-500 text-white border border-orange-500 max-md:min-w-[25vw] min-w-[8vw]">
                  Save 70%
                </button>
              </div>
              <div className="flex flex-nowrap duration-500 items-center justify-evenly w-full h-auto gap-[5vw] border rounded-md px-[5vw]">
                <h1 className="text-[.8rem] font-medium line-through duration-500 text-nowrap whitespace-nowrap">
                  Rs 2999
                </h1>
                <h1 className="text-[1.2rem] font-semibold duration-500 text-nowrap whitespace-nowrap ">
                  Rs 999
                </h1>
              </div>

              {/* ------------------------------------------------------- */}

              {/* select size */}
              <div className="mt-[1vh] flex items-center justify-between w-full h-auto duration-500 flex-nowrap">
                <h1 className="flex items-center duration-500 justify-start w-auto h-auto text-sm max-md:text-[.8rem] font-semibold capitalize">
                  {`size `} <p className="uppercase">{` : ${productSize}`}</p>
                </h1>

                {/* size guide button */}

                <button
                  onClick={() => setShowGuide(!showGuide)}
                  className="rounded-md max-md:px-[2vw] px-[1vw] py-[.5vh] text-sm font-medium w-auto h-auto flex justify-center items-center flex-nowrap text-nowrap duration-200 whitespace-nowrap bg-orange-500 text-white border border-orange-500 min-w-[8vw] max-md:min-w-[25vw]"
                >
                  Size Guide
                </button>
              </div>

              {/* size buttons */}
              <div className="flex flex-wrap duration-500 items-center w-full h-auto justify-normal max-md:gap-[2vw] gap-x-[1vw] gap-y-[1vh]">
                {productSizes?.map((product, idx) => {
                  return (
                    <button
                      key={idx}
                      onClick={() => setProductSize(product.size)}
                      className={`uppercase border text-sm max-md:text-[.8rem] font-normal max-md:px-[3vw] px-[2vw] py-[1vh] duration-500  rounded h-auto max-sm:min-w-[15vw] max-md:min-w-[10vw] w-auto active:outline-none disabled:cursor-not-allowed focus:outline-none ${
                        productSize === product.size &&
                        "bg-slate-400 bg-opacity-30"
                      } ${
                        !product.active &&
                        "bg-slate-300 bg-opacity-20 line-through"
                      }`}
                      disabled={!product.active}
                    >
                      {product.size}
                    </button>
                  );
                })}
              </div>

              {/* --------------------------------------------------------- */}

              {/* select quantity */}
              <div className="mt-[1vh] flex items-center justify-between w-full h-auto duration-500 flex-nowrap">
                <h1 className="flex items-center duration-500 justify-start w-full h-auto text-sm max-md:text-[.8rem] font-semibold capitalize">
                  Quantity:
                </h1>

                {/* quantity */}
                <div className="flex border rounded-md max-md:px-[3vw] px-[.5vw] py-[1vh] items-center justify-between w-auto h-auto gap-[1vw]">
                  <button onClick={handleDecrement}>
                    <CiCircleMinus className="size-4 lg:size-5 active:bg-[#242424] active:text-white rounded-full duration-500" />
                  </button>
                  <span className="px-[.8vw] md:px-[0.5vw] font-semibold text-[10px] md:text-xs">
                    {itemQuantity || 0}
                  </span>
                  <button onClick={handleIncrement}>
                    <CiCirclePlus className="size-4 lg:size-5 active:bg-[#242424] active:text-white rounded-full duration-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* view the image in full screen */}
        {zoomIn && (
          <ZoomInOut
            zoomIn={zoomIn}
            setZoomIn={setZoomIn}
            selectedImg={selectedImg}
          />
        )}

        {/* showing guide modal */}
        {showGuide && <SizeGuide setShowGuide={setShowGuide} />}
      </HomeLayout>
    </div>
  );
};

export default Product;

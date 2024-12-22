// * imports
import React, { useState } from "react";

// * local imports
import HomeLayout from "../../components/extra/HomeLayout";
import { productImages, productSizes } from "../../components/lib/data";

// * lip imports
import { MdOutlineZoomOutMap } from "react-icons/md";
import { MdZoomInMap } from "react-icons/md";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(
    productImages[0] || "/shirt2.jpg"
  );

  const [zoomIn, setZoomIn] = useState(false);
  const [productSize, setProductSize] = useState("xs");

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
                className="w-[40vw] max-md:w-[95%] bg-[#000000]/80 h-full max-md:h-[30vh] duration-500 shadow-md rounded-md border flex justify-center items-center relative cursor-pointer"
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

            {/* product details  */}
            <div className="w-[25%] max-md:w-[90%] h-full flex flex-col justify-start items-center gap-[1vh]">
              {/* select size */}

              <h1 className="flex items-center justify-start w-full h-auto text-sm max-md:text-[.8rem] font-semibold capitalize">
                {`size `} <p className="uppercase">{` : ${productSize}`}</p>
              </h1>
              <div className="flex flex-wrap items-center w-full h-auto justify-normal max-md:gap-[2vw] gap-[1vw]">
                {productSizes?.map((product, idx) => {
                  return (
                    <button
                      key={idx}
                      onClick={() => setProductSize(product.size)}
                      className={`uppercase border text-sm max-md:text-[.8rem] font-normal max-md:px-[3vw] px-[2vw] py-[1vh] duration-500  rounded h-auto w-auto active:outline-none disabled:cursor-not-allowed focus:outline-none ${
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
            </div>
          </div>
        </div>

        {/* view the image in full screen */}
        {zoomIn && (
          <div
            className="fixed top-0 flex flex-col justify-center items-center left-0 w-full h-screen bg-[#000000]/80 duration-500 max-md:p-[5%] p-[3%] gap-0"
            onClick={() => setZoomIn(!zoomIn)}
          >
            <div className="flex justify-end w-full h-auto duration-300">
              <button
                className="text-white duration-300 "
                onClick={() => setZoomIn(!zoomIn)}
              >
                {zoomIn ? (
                  <MdZoomInMap className="duration-300 size-6" />
                ) : (
                  <MdOutlineZoomOutMap className="duration-300 size-6" />
                )}
              </button>
            </div>
            <img
              src={selectedImg || `/shirt2.jpg`}
              alt="product img"
              className="object-contain w-full h-full duration-500 rounded-md shadow-md "
            />
          </div>
        )}
      </HomeLayout>
    </div>
  );
};

export default Product;

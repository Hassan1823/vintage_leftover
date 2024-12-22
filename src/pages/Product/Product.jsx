// * imports
import React, { useState } from "react";

// * local imports
import HomeLayout from "../../components/extra/HomeLayout";
import { productImages } from "../../components/lib/data";

// * lip imports
import { MdOutlineZoomOutMap } from "react-icons/md";
import { MdZoomInMap } from "react-icons/md";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(
    productImages[0] || "/shirt2.jpg"
  );

  const [zoomIn, setZoomIn] = useState(false);

  return (
    <div>
      <HomeLayout>
        {/* main container for the product */}
        <div className="w-full h-auto duration-500 flex flex-col text-center justify-center items-center gap-[1vh] py-[2vh]">
          {/* product name  */}
          <h1 className="text-[1.2rem] max-sm:text-[1rem] font-semibold duration-500 capitalize max-sm:w-[75%] max-md:w-[65%] w-[40%] h-auto">{`polo republica Men's Essentials Pony Embroidered Button-Down Casual Shirt`}</h1>

          {/* product images */}
          <div className="flex flex-row flex-nowrap max-md:flex-col-reverse items-center duration-500 justify-center w-full max-md:h-auto h-[50vh] max-md:gap-[2vh] gap-[5vw]">
            {/* images grid  */}
            <div className="w-[8%] max-md:w-[90%] h-full flex duration-500 flex-col max-md:flex-row flex-none justify-evenly items-center gap-[1vh]">
              {productImages?.map((product, idx) => {
                //   grid image container or box
                return (
                  <button
                    key={idx}
                    className="w-full h-[23%] max-md:h-[12vh] shadow-md duration-100 hover:scale-[102%] border rounded-md flex justify-center items-center hover:duration-300"
                    onClick={() => setSelectedImg(product)}
                  >
                    <img
                      src={product}
                      alt="product img"
                      className="object-cover w-full h-full duration-100 rounded-md hover:duration-500 hover:object-contain"
                    />
                  </button>
                );
              })}
            </div>

            {/* main product image container */}
            <div
              className="w-[40%] max-md:w-[95%] bg-[#000000]/80 h-full max-md:h-[30vh] duration-500 shadow-md rounded-md border flex justify-center items-center relative cursor-pointer"
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

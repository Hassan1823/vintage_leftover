// * imports
import React, { useState } from "react";

// * local imports
import HomeLayout from "../../components/extra/HomeLayout";
import {
  productColors,
  productDetails,
  productImages,
  productSizes,
  reviewData,
} from "../../components/lib/data";
import SizeGuide from "./SizeGuide";
import ZoomInOut from "./ZoomInOut";
import SuggestedProducts from "./SuggestedProducts";
import ReviewCard from "../../components/extra/ReviewCard";

// * lip imports
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import {
  MdOutlineFavorite,
  MdOutlineFavoriteBorder,
  MdOutlineZoomOutMap,
  MdZoomInMap,
} from "react-icons/md";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(
    productImages[0] || "/shirt2.jpg"
  );

  const [zoomIn, setZoomIn] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  const [addSample, setAddSample] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);
  const [openReviews, setOpenReviews] = useState(true);
  const [productSize, setProductSize] = useState(productSizes[0].size || "xs");
  const [productColor, setProductColor] = useState(
    productColors[0].color || "Blue"
  );
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
              {/* add to sample product list */}
              {/* <div className="flex mb-[1vh] flex-nowrap duration-500 items-center justify-center w-full h-auto gap-[5vw] border rounded-md py-[1vh] px-[1vw]">
                <button
                  onClick={() => setAddSample(!addSample)}
                  className="border-none active:outline-none focus:outline-none text-[0.8rem] font-semibold flex justify-center capitalize items-center flex-nowrap gap-[1vw] duration-500"
                >
                  {addSample
                    ? "Remove product from list :"
                    : "Add product to list :"}
                  <span className="duration-500">
                    {addSample ? (
                      <MdOutlineFavorite className="text-orange-500 duration-500 size-5" />
                    ) : (
                      <MdOutlineFavoriteBorder className="text-orange-500 duration-500 size-5" />
                    )}
                  </span>
                </button>
              </div> */}

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
              <div className="flex mb-[1vh] flex-nowrap duration-500 items-center justify-evenly w-full h-auto gap-[5vw] border rounded-md px-[5vw]">
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
              <div className="flex flex-wrap duration-500 items-center w-full h-auto justify-normal max-md:gap-[2vw] mb-[1vh] gap-x-[1vw] gap-y-[1vh]">
                {productSizes?.map((product, idx) => {
                  return (
                    <button
                      key={idx}
                      onClick={() => setProductSize(product.size)}
                      className={`uppercase border text-sm max-md:text-[.8rem] font-normal max-md:px-[3vw] px-[1.5vw] py-[.5vh] duration-500  rounded h-auto max-sm:min-w-[15vw] max-md:min-w-[10vw] w-auto active:outline-none disabled:cursor-not-allowed focus:outline-none ${
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
              <div className="my-[1vh] flex items-center justify-between w-full h-auto duration-500 flex-nowrap">
                <h1 className="flex items-center duration-500 justify-start w-full h-auto text-sm max-md:text-[.8rem] font-semibold capitalize">
                  Quantity:
                </h1>

                {/* quantity */}
                <div className="flex border-2 rounded-md max-sm:px-[5vw] max-md:px-[3vw] px-[.5vw] py-[.5vh] items-center justify-between max-sm:w-[80vw] max-md:w-[60vw] w-[20vw] h-auto gap-[1vw]">
                  <button onClick={handleDecrement}>
                    <CiCircleMinus className="size-6 active:bg-[#242424] active:border-none active:outline-none active:text-white rounded-full duration-500" />
                  </button>
                  <span className="px-[.8vw] md:px-[0.5vw] font-semibold text-[1rem] max-md:text-[.9rem] max-sm-[.8rem]">
                    {itemQuantity || 0}
                  </span>
                  <button onClick={handleIncrement}>
                    <CiCirclePlus className="size-6 active:bg-[#242424] active:border-none active:outline-none active:text-white rounded-full duration-500" />
                  </button>
                </div>
              </div>

              {/* --------------------------------------------------------- */}
              {/* select the product color */}
              <div className="mt-[1vh] flex items-center justify-between w-full h-auto duration-500 flex-nowrap">
                <h1 className="flex items-center duration-500 justify-start w-auto h-auto text-sm max-md:text-[.8rem] font-semibold capitalize">
                  {`Color `} <p className="uppercase">{` : ${productColor}`}</p>
                </h1>
              </div>

              {/* product colors */}
              <div className="flex flex-wrap duration-500 items-center w-full h-auto justify-normal max-md:gap-[2vw] gap-x-[1vw] gap-y-[1vh]">
                {productColors
                  ?.filter((product) => product.active)
                  .map((product, idx) => {
                    return (
                      <button
                        key={idx}
                        onClick={() => setProductColor(product.color)} // Set the selected color
                        className={`relative rounded-full max-md:min-h-[7vh] max-md:min-w-[7vh] min-h-[7vh] min-w-[7vh] duration-500 active:outline-none focus:outline-none ${
                          productColor === product.color &&
                          "border-black/70 border-2"
                          // : "border-slate-500/70 border-[1px]"
                        }`}
                      >
                        <div
                          className="absolute inset-0 rounded-full m-[2px] hover:m-[1px] duration-500"
                          style={{
                            // backgroundColor: product.color, // Set background color based on product.color (hex or name)
                            opacity: 1, // Full opacity since these are active colors
                          }}
                        >
                          <img
                            src={product.productImg}
                            alt="product img"
                            className="object-contain w-full h-full border rounded-full"
                          />
                        </div>
                      </button>
                    );
                  })}
              </div>

              {/* --------------------------------------------------------- */}
            </div>

            {/* --------------------------------------------------------- */}
          </div>

          {/* product description */}
          <div className="w-full h-auto duration-500 flex flex-col text-center justify-center items-center gap-[2vh] py-[2vh] max-md:px-[5vw] px-[8vw]">
            <button
              onClick={() => setOpenDetails(!openDetails)}
              className="w-full h-auto flex flex-nowrap justify-start items-center gap-[1vw] max-md:text-[1rem] text-[1.2rem] font-semibold duration-500 border-none"
            >
              Product Details{" "}
              <span className="duration-500">
                {openDetails ? (
                  <IoMdArrowDropup className="duration-500 size-6" />
                ) : (
                  <IoMdArrowDropdown className="duration-500 size-6" />
                )}
              </span>
            </button>

            {/* show and hide product detatils */}
            {openDetails && (
              <div className="flex flex-col text-start items-start gap-[2vh] justify-start w-full h-auto capitalize duration-500">
                {productDetails?.map((product, idx) => {
                  return (
                    <div
                      key={idx}
                      className="flex flex-col items-start justify-start w-full h-auto text-[#242424]"
                    >
                      <li className="text-[1.1rem] max-md:text-[.9rem] font-semibold">
                        {product?.title}
                      </li>
                      <p className="text-[1.1rem] max-md:text-[.9rem] font-light">
                        {product?.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* --------------------------------------------------------- */}

          {/* product reviews */}
          <div className="w-full h-auto duration-500 flex flex-col justify-center items-start gap-[2vh] py-[2vh] max-md:px-[5vw] px-[8vw] capitalize">
            <button
              onClick={() => setOpenReviews(!openReviews)}
              className="w-full h-auto flex flex-nowrap justify-start items-center gap-[1vw] max-md:text-[1rem] text-[1.2rem] font-semibold capitalize duration-500 border-none"
            >
              reviews{" "}
              <span className="duration-500">
                {openReviews ? (
                  <IoMdArrowDropup className="duration-500 size-6" />
                ) : (
                  <IoMdArrowDropdown className="duration-500 size-6" />
                )}
              </span>
            </button>

            {/* show and hide product reviews */}
            {openReviews && (
              <div className="flex flex-nowrap overflow-x-auto text-start items-start gap-[2vh] justify-start w-full h-auto capitalize duration-500 pb-[2vh] hide-scrollbar">
                {/* review card here */}
                {reviewData?.map((review, idx) => {
                  return <ReviewCard key={idx} data={review} />;
                })}
              </div>
            )}
          </div>
          {/* --------------------------------------------------------- */}

          {/* suggested products */}
          <div className="flex items-center justify-center w-full h-auto max-md:px-[0vw] px-[5vw]">
            <SuggestedProducts />
          </div>

          {/* --------------------------------------------------------- */}

          {/* add to cart footer */}
          <div className="fixed bottom-0 left-0 w-full h-auto shadow-xl bg-[#ffffff] text-[#242424] flex justify-between items-center flex-nowrap">
            {/* add to favorite button  */}
            <button
              onClick={() => setAddSample(!addSample)}
              className="w-1/2 h-auto border-t-[2px] border-inherit active:outline-none focus:outline-none text-[0.8rem] font-semibold flex justify-center capitalize items-center flex-nowrap gap-[1vw] duration-500 max-md:py-[2%] max-lg:py-[1%] py-[.6%]"
            >
              <span className="duration-500">
                {addSample ? (
                  <MdOutlineFavorite className="text-orange-500 duration-500 size-8" />
                ) : (
                  <MdOutlineFavoriteBorder className="text-orange-500 duration-500 size-8" />
                )}
              </span>
            </button>
            {/* add to cart button  */}
            <button
              // onClick={() => setAddSample(!addSample)}
              className="w-1/2 h-auto border-t-[2px] border-orange-500 active:outline-none focus:outline-none text-[0.8rem] font-semibold bg-orange-500 flex justify-center capitalize items-center flex-nowrap gap-[1vw] duration-500 max-md:py-[2%] max-lg:py-[1%] py-[.6%]"
            >
              <span className="duration-500">
                {/* {addSample ? (
                  <IoCart className="text-white duration-500 size-8" />
                ) : ( */}
                <IoCartOutline className="text-white duration-500 size-8" />
                {/* )} */}
              </span>
            </button>
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

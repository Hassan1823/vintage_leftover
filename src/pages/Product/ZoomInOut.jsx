import React from "react";
import { MdOutlineZoomOutMap, MdZoomInMap } from "react-icons/md";
const ZoomInOut = ({ zoomIn, setZoomIn, selectedImg }) => {
  return (
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
  );
};

export default ZoomInOut;

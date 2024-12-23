import React from "react";
import { MdClose } from "react-icons/md";
import {
  howToMeasure,
  measurementTypes,
  sizeChart,
} from "../../components/lib/data";

const SizeGuide = ({ setShowGuide }) => {
  return (
    <div
      className="fixed top-0 flex justify-center items-center left-0 w-full h-screen bg-[#000000]/80 duration-500 max-md:p-[5%] p-[3%] gap-0"
      // onClick={() => setShowGuide(false)}
    >
      {/* main container for the sze guide  */}
      <div className="w-[95%] md:w-[80%] lg:w-[65%] xl:w-1/2 h-[70vh] overflow-auto flex flex-col justify-start items-center rounded-md bg-white text-[#242424] py-[5vh] px-[4vh] duration-500 relative">
        {/* close button */}
        <div className="absolute duration-300 top-2 right-2">
          <button
            className="text-black duration-300 "
            onClick={() => setShowGuide(false)}
          >
            <MdClose className="duration-300 size-6" />
          </button>
        </div>

        <h1 className="text-[1.1rem] max-sm:text-[0.8rem] font-semibold duration-500 capitalize max-sm:w-[80%] text-center w-[70%] h-auto">{`polo republica Men's Essentials Pony Embroidered Button-Down Casual Shirt`}</h1>

        {/* under line for the product name  */}
        <div className="w-full h-auto border-b-2 my-[2vh] duration-500"></div>

        {/* ----------------------------------------------- */}
        {/* size table starts here  */}
        <h1 className="text-[.8rem] mb-[1vh] max-sm:text-[0.6rem] font-semibold animate-pulse duration-500 capitalize max-sm:w-[80%] text-center w-[70%] h-auto">{`Not all products have the same measurements.`}</h1>
        {/* table */}
        <table className="w-full max-w-full h-auto rounded-md p-[1%] border-2  border-[#242424]/40">
          <thead className="text-[1rem] max-md:text-[0.8rem] font-semibold capitalize">
            <tr className="bg-slate-500/20">
              {measurementTypes?.map((type, idx) => {
                return (
                  <th
                    key={idx}
                    className="border rounded-s p-[1%] font-semibold duration-500"
                  >
                    {type}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="text-[1rem] my-[1vh] max-md:text-[0.8rem] font-normal capitalize">
            {sizeChart?.map((data, idx) => {
              return (
                <tr key={idx} className="my-[1vh] even:bg-slate-500/20">
                  <th className="border uppercase rounded-s p-[1%] font-semibold duration-500">
                    {data.size}
                  </th>
                  <th className="border p-[1%] font-normal duration-500">
                    {data.chest}
                  </th>
                  <th className="border p-[1%] font-normal duration-500">
                    {data.length}
                  </th>
                  <th className="border p-[1%] font-normal duration-500">
                    {data.sleeve}
                  </th>
                  <th className="border p-[1%] font-semibold duration-500 text-[.8rem] max-md:text-[.6rem]">
                    {data.measurementIn}
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* how to measure */}
        <h1 className="text-[1rem] mt-[3vh] max-sm:text-[0.8em] font-semibold duration-500 capitalize max-sm:w-[80%] text-center w-[70%] h-auto underline">{`How to measure`}</h1>

        <div className="w-full h-auto flex flex-col justify-start items-center gap-[1vh] lg:ps-[1vw]">
          {howToMeasure?.map((guide, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-start w-full h-auto text-start"
            >
              <li className="text-[1rem] max-sm:text-[0.8em] font-semibold duration-500 capitalize text-start w-full h-auto">
                {guide.label}
              </li>
              <h1 className="text-[1rem] max-sm:text-[0.8em] font-normal duration-500 capitalize text-start w-full h-auto">
                {guide.tip}
              </h1>
            </div>
          ))}
        </div>

        {/* under line for the measure guide  */}
        <div className="w-full h-auto border-b-2 mt-[8vh] duration-500"></div>
      </div>
    </div>
  );
};

export default SizeGuide;

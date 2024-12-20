import React from "react";
import { Link } from "react-router-dom";

import { GiStarShuriken } from "react-icons/gi";
import { PiStarFourDuotone } from "react-icons/pi";
import { PiStarFourFill } from "react-icons/pi";

const Banner = () => {
  return (
    <Link
      to={"/"}
      className="flex items-center justify-center w-full h-auto my-[.5vh]"
    >
      <div className="flex flex-nowrap justify-evenly items-center flex-row bg-[#242424eb] w-[98%] md:w-[95vw] lg:w-[90vw] rounded-md h-[45vh] ">
        {/* image1  */}
        <div className="rounded-xl border-2 border-[#242424] w-[12vw] h-[75%]">
          <img
            src="/shirt4.jpg"
            alt="product img"
            className="object-fill w-full h-full rounded-xl"
          />
        </div>

        {/* news container */}
        <div className="w-[50%] h-[60%] border-[2px] border-opacity-50 border-white flex flex-col justify-evenly items-center">
          <PiStarFourDuotone className="text-white size-5" />

          {/* headline */}
          <h1 className="font-serif text-3xl font-bold tracking-widest text-white">
            New Arrival
          </h1>
        </div>

        {/* image2  */}
        <div className="rounded-xl border-2 border-[#242424] w-[12vw] h-[75%]">
          <img
            src="/shirt3.jpg"
            alt="product img"
            className="object-fill w-full h-full rounded-xl"
          />
        </div>
      </div>
    </Link>
  );
};

export default Banner;

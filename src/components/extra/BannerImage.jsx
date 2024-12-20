import React from "react";
import { Link } from "react-router-dom";

const bannerImg = "/banner9.png";

const BannerImage = () => {
  return (
    <Link
      to={"/"}
      className="flex items-center justify-center w-full h-auto my-[.5vh]"
    >
      <img
        src={bannerImg}
        alt="banner img"
        className="object-contain w-[98%] md:w-[95vw] lg:w-[90vw] rounded-md h-auto max-h-[70vh]"
      />
    </Link>
  );
};

export default BannerImage;

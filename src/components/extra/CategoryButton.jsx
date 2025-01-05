import React from "react";
import { Link } from "react-router-dom";

const CategoryButton = ({ data }) => {
  return (
    <Link
      to={"/"}
      className="flex flex-col items-center justify-center w-auto h-auto"
    >
      <div
        className={`relative rounded-full max-md:min-h-[7vh] max-md:min-w-[7vh] max-md:max-h-[7vh] max-md:max-w-[7vh] min-h-[9vh] min-w-[9vh] max-h-[9vh] max-w-[9vh] duration-500 shadow-md active:outline-none focus:outline-none }`}
      >
        <div
          className="absolute inset-0 rounded-full m-[1px] hover:m-[1px] duration-500"
          style={{
            // backgroundColor: product.color, // Set background color based on product.color (hex or name)
            opacity: 1, // Full opacity since these are active colors
          }}
        >
          <img
            src={data.productImg}
            alt="product img"
            className="object-contain w-full h-full rounded-full"
          />
        </div>
      </div>

      <span className="text-sm max-md:text-xs font-medium text-[#242424]/80 capitalize">
        {data.name}
      </span>
    </Link>
  );
};

export default CategoryButton;

import React from "react";
import ProductCard from "../../components/extra/ProductCard";
import { suggestedProductsData } from "../../components/lib/data";

const SuggestedProducts = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full h-auto gap-[2vh] mt-[5vh]">
      <h1 className="text-[1.4rem] max-md:text-[1.1rem] underline font-semibold text-[#242424] capitalize">
        You May also like{" "}
      </h1>
      <div className="flex flex-wrap gap-[2vw] items-center w-full h-auto duration-500 justify-center py-[2vh]">
        {suggestedProductsData?.map((product, idx) => {
          return <ProductCard key={idx} data={product} id={idx} />;
        })}
      </div>
    </div>
  );
};

export default SuggestedProducts;

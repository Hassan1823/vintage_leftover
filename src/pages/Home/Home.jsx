import React, { useState } from "react";
import Banner from "../../components/extra/Banner";
import BannerImage from "../../components/extra/BannerImage";
import HomeLayout from "../../components/extra/HomeLayout";
import SearchBar from "../../components/extra/SearchBar";
import TopProducts from "../../components/extra/TopProducts";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { reviewData } from "../../components/lib/data";
import ReviewCard from "../../components/extra/ReviewCard";

const Home = () => {
  //  const { state, setState } = useContext(MyContext);
  const [customBanner, setCustomBanner] = useState(false);
  const [openReviews, setOpenReviews] = useState(true);
  return (
    <div>
      {/* use context template */}
      {/* <div>
        <h1>Name: {state.name}</h1>
        <h2>Age: {state.age}</h2>
        <button onClick={() => setState({ ...state, age: state.age + 1 })}>
          Increase Age
        </button>
      </div> */}
      <HomeLayout>
        {/* search bar  */}
        <SearchBar />

        {/* top banner */}
        <div className="flex flex-col items-center justify-center w-full h-auto">
          {customBanner ? <Banner /> : <BannerImage />}
        </div>

        {/* top products of the season */}
        <div className="flex items-center justify-center w-full h-auto">
          <TopProducts />
        </div>

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
      </HomeLayout>
    </div>
  );
};

export default Home;

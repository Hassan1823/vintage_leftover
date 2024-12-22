import React, { useState } from "react";
import Banner from "../../components/extra/Banner";
import BannerImage from "../../components/extra/BannerImage";
import HomeLayout from "../../components/extra/HomeLayout";
import SearchBar from "../../components/extra/SearchBar";
import TopProducts from "../../components/extra/TopProducts";

const Home = () => {
  //  const { state, setState } = useContext(MyContext);
  const [customBanner, setCustomBanner] = useState(false);
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
      </HomeLayout>
    </div>
  );
};

export default Home;

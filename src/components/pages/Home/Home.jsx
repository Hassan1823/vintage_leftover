import React from "react";
import HomeLayout from "../../extra/HomeLayout";
import HomeSlider from "../../extra/HomeSlider";
import TopProducts from "../../extra/TopProducts";

const Home = () => (
  <div>
    <HomeLayout>
      {/* top banner */}
      <div className="flex items-center justify-center w-full h-auto">
        <HomeSlider />
      </div>

      {/* top products of the season */}
      <div className="flex items-center justify-center w-full h-auto">
        <TopProducts />
      </div>
    </HomeLayout>
  </div>
);

export default Home;

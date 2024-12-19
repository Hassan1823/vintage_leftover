import React from "react";
import HomeLayout from "../../extra/HomeLayout";
import HomeSlider from "../../extra/HomeSlider";
import TopProducts from "../../extra/TopProducts";

const Home = () => {
  return (
    <div>
      <HomeLayout>
        {/* top banner */}
        <div className="w-full h-auto">
          <HomeSlider />
        </div>

        {/* top products of the season */}
        <TopProducts />
      </HomeLayout>
    </div>
  );
};

export default Home;

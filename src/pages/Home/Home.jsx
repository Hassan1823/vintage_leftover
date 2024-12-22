import React, { useState } from "react";
import BannerImage from "../../components/extra/BannerImage";
import HomeLayout from "../../components/extra/HomeLayout";
import TopProducts from "../../components/extra/TopProducts";
import Banner from "../../components/extra/Banner";

const Home = () => {
  const [customBanner, setCustomBanner] = useState(false);
  return (
    <div>
      <HomeLayout>
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

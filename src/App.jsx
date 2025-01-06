import { Route, Routes } from "react-router-dom";
import "./App.css";
import MetaTags from "./components/extra/MetaTags";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Product from "./pages/Product/Product";
import Checkout from "./pages/Checkout/checkout";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div className="">
      <MetaTags
        title="Vintage Leftover"
        description="Vintage LeftOver is your go-to online store for affordable, high-quality leftover garments from famous brands. We specialize in curating unique, stylish clothing that promotes sustainable fashion by giving surplus items a second life. Discover a wide range of authentic pieces at unbeatable prices, perfect for fashion enthusiasts looking to make eco-conscious choices without compromising on style. Shop with us and find your next favorite outfit today! Feel free to adjust any part of the description to better match your brand's voice or specific offerings!"
        keywords="vintage, vintage leftover, leftover, branded garments, brand leftover, branded leftover"
      />

      {/* routes */}
      <Routes>
        {/* home route */}
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Home />} />
        <Route path="/women" element={<Home />} />
        <Route path="/sale" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/cart" element={<Home />} />
        <Route path="/profile" element={<Home />} />

        {/* product view */}
        <Route path="/product" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />

        {/* auth routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* page not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

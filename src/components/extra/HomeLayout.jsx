// * imports
import React, { useState } from "react";

// * local imports

//* lib imports
import Cart from "../../pages/Cart/Cart";
import Footer from "./Footer";
import NavBar from "./NavBar";

const HomeLayout = ({ children }) => {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <NavBar showCart={showCart} setShowCart={setShowCart} />
      {/* header starts here  */}

      {/* here come the children */}
      <div className="p-[0%] md:p-[0%] lg:p-[0%] min-h-[50vh]">{children}</div>
      {/* Footer */}
      <Footer />
      {/* showing mobile menu */}
      {/* {showMenu && <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />} */}
      {/* showing cart */}
      {showCart && <Cart showCart={showCart} setShowCart={setShowCart} />}
    </>
  );
};

export default HomeLayout;

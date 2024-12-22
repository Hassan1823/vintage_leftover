import React, { useState } from "react";

// * local imports
import { MyContext } from "./MyContext";

const MyProvider = ({ children }) => {
  const [state, setState] = useState({ name: "Hassan", age: 26 });
  return <MyContext value={{ state, setState }}>{children}</MyContext>;
};

export default MyProvider;

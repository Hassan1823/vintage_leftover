import React, { useState } from "react";
import AuthTemplate from "../../components/extra/AuthTemplate";

import { Link } from "react-router-dom";

import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <AuthTemplate>
        <div className="flex flex-col items-center justify-center w-full h-auto gap-3 duration-500">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="username@example.com"
            className="px-[2vw] duration-500 py-[1vh] bg-transparent border rounded-md active:bg-transparent active:outline-none focus:outline-none w-[70vw] md:w-[50vw] lg:w-[30vw] text-center"
          />

          <div className="relative w-auto h-auto duration-500 bg-transparent border-none outline-none">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="username@example.com"
              className="px-[2vw] duration-500 py-[1vh] bg-transparent border rounded-md active:bg-transparent active:outline-none focus:outline-none w-[70vw] md:w-[50vw] lg:w-[30vw] text-center relative"
            />
            <button
              className="absolute duration-500 top-1 right-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FaRegEye className="text-[#242424] size-5 duration-500" />
              ) : (
                <FaRegEyeSlash className="text-[#242424] size-5 duration-500" />
              )}
            </button>
          </div>

          <button className="bg-[#242424] duration-500 w-auto h-auto mt-3 text-white text-[10px] md:text-xs font-semibold px-[5vw] md:px-[4vw] lg:px-[3vw] py-[1vh] rounded-md">
            Login
          </button>

          <Link
            to={"/register"}
            className="text-[#242424] underline duration-500 "
          >
            Register
          </Link>
        </div>
      </AuthTemplate>
    </>
  );
};

export default Login;

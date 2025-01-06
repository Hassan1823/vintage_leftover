import { Field, Label, Switch } from "@headlessui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeLayout from "../../components/extra/HomeLayout";

const Checkout = () => {
  const [agreed, setAgreed] = useState(true);
  return (
    <div>
      <HomeLayout>
        {/* <BannerNotification /> */}
        <div className=" w-full h-auto min-h-screen py-[1%] mb-[4vh]">
          <h1 className="flex items-center justify-end w-full h-auto capitalize font-semibold text-[1rem] mb-[.5vh] pe-[4vw]">
            <Link
              to="/login"
              className="underline capitalize text-[.9rem] font-semibold"
            >
              Login
            </Link>
          </h1>
          {/* main container */}
          <div className="flex flex-col items-start justify-start w-full h-full px-6 bg-white isolate lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-semibold tracking-tight text-gray-900 text-balance sm:text-5xl">
                Delivery
              </h2>
              <p className="mt-2 text-gray-600 text-[.8rem] animate-pulse">
                Your perfect look is just a click away!
              </p>
            </div>
            <form
              action="#"
              method="POST"
              className="max-w-xl mx-auto mt-[4vh] sm:mt-[4vh]"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-[2vh] sm:grid-cols-2">
                {/* first name */}
                <div>
                  <label
                    htmlFor="first-name"
                    className="block font-semibold text-gray-900 text-sm/6"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#242424]"
                    />
                  </div>
                </div>

                {/* last name  */}
                <div>
                  <label
                    htmlFor="last-name"
                    className="block font-semibold text-gray-900 text-sm/6"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#242424]"
                    />
                  </div>
                </div>

                {/* email */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block font-semibold text-gray-900 text-sm/6"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#242424]"
                    />
                  </div>
                </div>

                {/* /* address   */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="address"
                    className="block font-semibold text-gray-900 text-sm/6"
                  >
                    Address
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="address"
                      name="address"
                      type="text"
                      autoComplete="street-address"
                      placeholder="Street Address"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#242424]"
                    />
                  </div>
                </div>

                {/* city and postal code */}
                <div className="grid grid-cols-1 sm:col-span-2 sm:grid-cols-2 gap-x-8">
                  <div>
                    <label
                      htmlFor="city"
                      className="block font-semibold text-gray-900 text-sm/6"
                    >
                      City
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="city"
                        name="city"
                        type="text"
                        autoComplete="address-level2"
                        placeholder="City"
                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#242424]"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="postal-code"
                      className="block font-semibold text-gray-900 text-sm/6"
                    >
                      Postal Code
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="postal-code"
                        name="postal-code"
                        type="text"
                        autoComplete="postal-code"
                        placeholder="Postal Code"
                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#242424]"
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block font-semibold text-gray-900 text-sm/6"
                  >
                    Phone number
                  </label>
                  <div className="mt-2.5">
                    <div className="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-[#242424]">
                      <div className="grid grid-cols-1 shrink-0 focus-within:relative">
                        <div
                          id="country"
                          name="country"
                          className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pl-3.5 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#242424] sm:text-sm/6"
                        >
                          +92
                        </div>
                      </div>
                      <input
                        id="phone-number"
                        name="phone-number"
                        type="tel"
                        pattern="^03\d{2} \d{7}$"
                        placeholder="0300 1234567"
                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>

                {/* message */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block font-semibold text-gray-900 text-sm/6"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#242424]"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <Field className="flex gap-x-4 sm:col-span-2">
                  <div className="flex items-center h-6">
                    <Switch
                      checked={agreed}
                      onChange={setAgreed}
                      className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#242424] data-[checked]:bg-[#242424]"
                    >
                      <span className="sr-only">Agree to policies</span>
                      <span
                        aria-hidden="true"
                        className="size-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                      />
                    </Switch>
                  </div>
                  <Label className="text-gray-600 capitalize text-sm/6">
                    Email me with news and offers .
                  </Label>
                </Field>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-[#242424] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#242424]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#242424] capitalize"
                >
                  {`confirm order`}
                </button>
              </div>
            </form>
          </div>
        </div>
      </HomeLayout>
    </div>
  );
};

export default Checkout;

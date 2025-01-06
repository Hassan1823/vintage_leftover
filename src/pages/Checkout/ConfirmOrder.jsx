import React, { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Field,
  Label,
  Switch,
} from "@headlessui/react";
import {
  ChevronDownIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import HomeLayout from "../../components/extra/HomeLayout";
import { placeholderNumber } from "../../components/lib/data";

const ConfirmOrder = () => {
  const [agreed, setAgreed] = useState(true);
  const [addSamples, setAddSamples] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <HomeLayout>
        {/* <BannerNotification /> */}
        <div className=" w-full h-auto min-h-screen py-[1%] mb-[4vh]">
          {/* <h1 className="flex items-center justify-end w-full h-auto capitalize font-semibold text-[1rem] mb-[.5vh] pe-[4vw]">
            <Link
              to="/login"
              className="underline capitalize text-[.9rem] font-semibold"
            >
              Login
            </Link>
          </h1> */}
          {/* main container */}
          <div className="flex flex-col items-start justify-start w-full h-full px-6 bg-white isolate lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl mt-[1vh] font-semibold tracking-tight text-gray-900 text-balance sm:text-5xl">
                Delivery
              </h2>
              <p className="mt-1 text-gray-600 text-[.8rem] animate-pulse">
                Your perfect look is just a click away!
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
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
                  <div className="mt-1">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      placeholder="Hassan"
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
                  <div className="mt-1">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      placeholder="Zaib"
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
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="vintageleftover@gmail.com"
                      autoComplete="email"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#242424]"
                    />
                  </div>
                </div>

                {/* phone number */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block font-semibold text-gray-900 text-sm/6"
                  >
                    Phone number
                  </label>
                  <div className="mt-1">
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
                        placeholder={placeholderNumber}
                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>

                {/* city and postal code */}
                <div className="grid grid-cols-1 sm:col-span-2 sm:grid-cols-2 gap-x-8">
                  {/* city  */}
                  <div>
                    <label
                      htmlFor="city"
                      className="block font-semibold text-gray-900 text-sm/6"
                    >
                      City
                    </label>
                    <div className="mt-1">
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
                  {/* postal code */}
                  <div>
                    <label
                      htmlFor="postal-code"
                      className="block font-semibold text-gray-900 text-sm/6"
                    >
                      Postal Code
                    </label>
                    <div className="mt-1">
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

                {/* /* address   */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="address"
                    className="block font-semibold text-gray-900 text-sm/6"
                  >
                    Address
                  </label>
                  <div className="mt-1">
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

                {/* add samples switch */}
                <Field className="flex gap-x-4 sm:col-span-2">
                  <div className="flex items-center h-6">
                    <Switch
                      checked={addSamples}
                      onChange={setAddSamples}
                      className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-orange-500/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 data-[checked]:bg-orange-500"
                    >
                      <span className="sr-only">Add Samples</span>
                      <span
                        aria-hidden="true"
                        className="size-4 transform rounded-full bg-white shadow-sm ring-1 ring-orange-500/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                      />
                    </Switch>
                  </div>
                  <Label className="font-semibold text-gray-600 capitalize text-sm/6">
                    Add Samples
                    {/* Email me with news and offers . */}
                  </Label>
                </Field>

                {/* coupon code */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="coupon-code"
                    className="block font-semibold text-gray-900 text-sm/6"
                  >
                    Coupon Code
                  </label>
                  <div className="mt-1">
                    <input
                      id="coupon-code"
                      name="coupon-code"
                      type="text"
                      placeholder="Enter your coupon code"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#242424]"
                    />
                  </div>
                </div>

                {/* payment method */}
                <div className="sm:col-span-2">
                  <label className="block font-semibold text-gray-900 text-sm/6">
                    Payment Method
                  </label>
                  <div className="mt-1 w-full h-auto outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#242424] bg-slate-500/20 cursor-default rounded-md px-3.5 py-2">
                    <p className="text-base font-semibold text-gray-900 select-none">
                      Cash on Delivery
                    </p>
                  </div>
                </div>

                {/* total amount */}
                <div className="sm:col-span-2">
                  <label className="block font-semibold text-gray-900 text-sm/6">
                    Order Summary
                  </label>
                  <div className="mt-1">
                    <p className="flex items-center justify-between w-full h-auto text-sm text-gray-900 ">
                      <span>Subtotal</span>
                      <span>
                        <b className="text-[.6rem] uppercase font-semibold me-1">
                          pkr
                        </b>
                        100.00
                      </span>
                    </p>
                    <p className="flex items-center justify-between w-full h-auto text-sm text-gray-900">
                      <span>Shipping</span>
                      <span>
                        <b className="text-[.6rem] uppercase font-semibold me-1">
                          pkr
                        </b>
                        10.00
                      </span>
                    </p>
                    <p className="flex items-center justify-between w-full h-auto text-sm text-gray-900">
                      <span>Discount</span>
                      <span>
                        <b className="text-[.6rem] uppercase font-semibold me-1">
                          pkr
                        </b>
                        -5.0
                      </span>
                    </p>
                    <p className="flex items-center justify-between w-full h-auto mt-1 text-lg font-semibold text-gray-900">
                      <span>Total</span>
                      <span>PKR 105.00</span>
                    </p>
                  </div>
                </div>
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

      {/* add samples order  */}
      {addSamples && (
        <Dialog
          open={addSamples}
          onClose={setAddSamples}
          className="relative z-10"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
          />

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
              <DialogPanel
                transition
                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 max-md:pt-[2vh] max-md:pb-[4vh] sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
              >
                <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="flex items-center justify-center mx-auto bg-orange-100 rounded-full size-12 shrink-0 sm:mx-0 sm:size-10">
                      <ExclamationTriangleIcon
                        aria-hidden="true"
                        className="text-orange-600 size-6"
                      />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <DialogTitle
                        as="h3"
                        className="text-base font-semibold text-gray-900"
                      >
                        Disclaimer
                      </DialogTitle>
                      <div className="mt-1">
                        <p className="text-sm text-gray-500">
                          This offer is only valid for view areas. Please select
                          the eligible areas list to continue.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* select city */}
                  <div className="w-full h-auto mt-[2vh]">
                    <label
                      htmlFor="city"
                      className="block font-medium text-gray-900 text-sm/6"
                    >
                      Choose Your Area
                    </label>
                    <div className="grid grid-cols-1">
                      <select
                        id="city"
                        name="city"
                        autoComplete="city-name"
                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#242424] sm:text-sm/6"
                      >
                        <option>Wah Cant</option>
                        <option>Taxila</option>
                        <option>New City</option>
                        <option>Nawabad</option>
                      </select>
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="self-center col-start-1 row-start-1 mr-2 text-gray-500 pointer-events-none size-5 justify-self-end sm:size-4"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    onClick={() => setAddSamples(false)}
                    className="inline-flex justify-center w-full px-3 py-2 text-sm font-semibold text-white bg-[#242424] rounded-md shadow-sm disabled:bg-[#242424] disabled:cursor-not-allowed hover:bg-[#242424] sm:ml-3 sm:w-auto"
                  >
                    Add Samples
                  </button>
                  <button
                    type="button"
                    data-autofocus
                    onClick={() => setAddSamples(false)}
                    className="inline-flex justify-center w-full px-3 py-2 mt-3 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    Cancel
                  </button>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default ConfirmOrder;

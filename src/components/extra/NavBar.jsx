import React, { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FiFacebook, FiInstagram, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import {
  facebook,
  instagram,
  menuList,
  phoneNumber,
  tiktok,
  vintageEmail,
  youtube,
} from "../lib/data";
import { TbBrandYoutube } from "react-icons/tb";
import { RiTiktokLine } from "react-icons/ri";

const products = [
  {
    name: "Top",
    description: "Explore our collection of stylish tops",
    href: "#",
  },
  {
    name: "Bottom",
    description: "Discover comfortable and trendy bottoms",
    href: "#",
  },
  {
    name: "Tees",
    description: "Find the perfect tees for any occasion",
    href: "#",
  },
  {
    name: "Jeans",
    description: "Shop our range of durable and fashionable jeans",
    href: "#",
  },
  {
    name: "Trousers",
    description: "Browse our selection of versatile trousers",
    href: "#",
  },
];

const NavBar = ({ setShowCart, showCart }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white border-b shadow-sm">
      <nav
        aria-label="Global"
        className="flex items-center justify-between py-[1vh] px-6 mx-auto max-w-full lg:px-8"
      >
        {/* menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#242424]"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* logo */}
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <img
              alt=""
              src="/logo.png"
              className="w-auto max-md:h-[8vh] h-[12vh]"
            />
          </Link>
        </div>

        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {/* home */}
          <Link to={"/"} className="font-semibold text-gray-900 text-sm/6">
            Home
          </Link>

          {/* men */}
          <Popover className="relative">
            <PopoverButton className="flex items-center font-semibold text-gray-900 capitalize border-none outline-none gap-x-1 text-sm/6">
              Men
              <ChevronDownIcon
                aria-hidden="true"
                className="flex-none text-gray-400 size-5"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="relative flex items-center p-2 rounded-lg group gap-x-6 text-sm/6 hover:bg-gray-300"
                  >
                    <div className="flex items-center justify-center flex-none bg-gray-300 rounded-lg size-11 group-hover:bg-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-[1px] text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/* <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon
                      aria-hidden="true"
                      className="flex-none text-gray-400 size-5"
                    />
                    {item.name}
                  </a>
                ))}
              </div> */}
            </PopoverPanel>
          </Popover>

          {/* women */}
          <Popover className="relative">
            <PopoverButton className="flex items-center font-semibold text-gray-900 capitalize border-none outline-none gap-x-1 text-sm/6">
              Women
              <ChevronDownIcon
                aria-hidden="true"
                className="flex-none text-gray-400 size-5"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="relative flex items-center p-2 rounded-lg group gap-x-6 text-sm/6 hover:bg-gray-300"
                  >
                    <div className="flex items-center justify-center flex-none bg-gray-300 rounded-lg size-11 group-hover:bg-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-[1px] text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/* <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon
                      aria-hidden="true"
                      className="flex-none text-gray-400 size-5"
                    />
                    {item.name}
                  </a>
                ))}
              </div> */}
            </PopoverPanel>
          </Popover>

          {menuList?.map((item, idx) => (
            <Link
              key={idx}
              to={item?.path}
              className="font-semibold text-gray-900 text-sm/6"
            >
              {item?.label}
            </Link>
          ))}
          {/* <a href="#" className="font-semibold text-gray-900 text-sm/6">
            Marketplace
          </a>
          <a href="#" className="font-semibold text-gray-900 text-sm/6">
            Company
          </a> */}
        </PopoverGroup>

        {/* cart  */}
        <div className="flex lg:flex-1 lg:justify-end">
          <button
            onClick={() => setShowCart(!showCart)}
            className="flex items-center justify-center duration-200 max-sm:w-[10vw] max-md:w-[8vw] w-[5vw] h-[5vh] p-[1%] md:p-[2%] rounded-full shadow bg-[#242424] relative"
          >
            <FiShoppingCart className="text-white lg:size-5 md:size-4 sm:size-3" />

            <div className="absolute max-md:-top-2 -top-3 max-md:h-4 max-md:w-4 h-5 w-5 right-0 bg-orange-500 border-orange-500 p-1 max-md:text-[.4rem] text-[.5rem] font-semibold rounded-full text-white">
              6
            </div>
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 left-0 z-10 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-end w-full h-auto">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700 rounded-md"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>

          {/* logo */}
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center justify-center w-full h-auto"
            >
              <img
                src="/logo.png"
                alt="logo"
                className="duration-200 w-auto max-md:h-[15vh] h-[15vh] object-contain"
              />
            </Link>
          </div>

          {/* profile and cart */}
          <div className="my-[3%] flex items-center justify-center w-full h-auto border border-black rounded-md">
            <Link
              to={"/cart"}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center duration-200 justify-center w-auto h-auto p-[2%] rounded-full bg-[#fffdfd]"
            >
              <FiShoppingCart className="text-[#242424] size-6" />
            </Link>
          </div>

          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6 space-y-2">
                {/* home */}
                <Link
                  to={"/"}
                  onClick={() => setMobileMenuOpen(false)}
                  s
                  className="block px-3 py-2 -mx-3 font-semibold text-gray-900 rounded-lg text-base/7 hover:bg-gray-50"
                >
                  Home
                </Link>

                {/* men */}
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Men
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products].map((item) => (
                      <Link
                        key={item.name}
                        as="a"
                        onClick={() => setMobileMenuOpen(false)}
                        to={item.href}
                        className="block py-2 pl-6 pr-3 font-semibold text-gray-900 rounded-lg text-sm/7 hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </DisclosurePanel>
                </Disclosure>

                {/* women */}
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Women
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block py-2 pl-6 pr-3 font-semibold text-gray-900 rounded-lg text-sm/7 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>

                {/* menu items */}
                <div className="flex flex-col items-start justify-start w-full h-auto">
                  {menuList?.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item?.path}
                      onClick={() => setMobileMenuOpen(false)}
                      s
                      className="block px-3 py-2 -mx-3 font-semibold text-gray-900 rounded-lg text-base/7 hover:bg-gray-50"
                    >
                      {item?.label}
                    </Link>
                  ))}
                </div>

                {/* social icons  */}
                <div className="my-[3vh] flex items-center justify-center w-full h-auto border border-black rounded-md">
                  <Link
                    to={facebook}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center duration-200 justify-center w-auto h-auto p-[2%] rounded-full bg-[#fffdfd]"
                  >
                    <FiFacebook className="text-[#242424] size-5" />
                  </Link>
                  <Link
                    to={instagram}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center duration-200 justify-center w-auto h-auto p-[2%] rounded-full bg-[#fffdfd]"
                  >
                    <FiInstagram className="text-[#242424] size-5" />
                  </Link>
                  <Link
                    to={tiktok}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center duration-200 justify-center w-auto h-auto p-[2%] rounded-full bg-[#fffdfd]"
                  >
                    <RiTiktokLine className="text-[#242424] size-5" />
                  </Link>
                  <Link
                    to={youtube}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center duration-200 justify-center w-auto h-auto p-[2%] rounded-full bg-[#fffdfd]"
                  >
                    <TbBrandYoutube className="text-[#242424] size-5" />
                  </Link>
                </div>

                {/* phone number */}
                <button className="flex font-semibold space-x-1 text-[.7rem] items-center duration-200 justify-center w-full h-auto rounded-full bg-[#fffdfd]">
                  <span>{phoneNumber}</span>
                </button>

                {/* email */}
                <button className="flex font-semibold space-x-1 text-[.7rem] items-center duration-200 justify-center w-full h-auto rounded-full bg-[#fffdfd]">
                  <span>{vintageEmail}</span>
                  {/* <MdOutlineEmail className="text-[#242424] size-4 font-semibold" /> */}
                </button>
                {/* <a
                  href="#"
                  className="block px-3 py-2 -mx-3 font-semibold text-gray-900 rounded-lg text-base/7 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 -mx-3 font-semibold text-gray-900 rounded-lg text-base/7 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 -mx-3 font-semibold text-gray-900 rounded-lg text-base/7 hover:bg-gray-50"
                >
                  Company
                </a> */}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default NavBar;

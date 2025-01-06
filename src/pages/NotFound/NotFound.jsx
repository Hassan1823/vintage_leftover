import React from "react";

const NotFound = () => {
  return (
    <main className="grid min-h-full px-6 py-24 bg-white place-items-center sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-[#242424]">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-gray-900 text-balance sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-lg font-medium text-gray-500 text-pretty sm:text-xl/8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="flex items-center justify-center mt-10 gap-x-6">
          <a
            href="/"
            className="rounded-md bg-[#242424] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#242424]/90 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#242424]"
          >
            Go back home
          </a>
          {/* <a href="#" className="text-sm font-semibold text-gray-900">
            Contact support <span aria-hidden="true">&rarr;</span>
          </a> */}
        </div>
      </div>
    </main>
  );
};

export default NotFound;
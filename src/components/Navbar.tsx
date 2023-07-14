import React from "react";

import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="w-full fixed bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <div className="max-w-[2520px] mx-auto px-4 sm:px-2 md:px-10 xl:px-20 ">
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <img
              onClick={() => {}}
              alt="logo"
              className="hidden md:block cursor-pointer w-20"
              src={logo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

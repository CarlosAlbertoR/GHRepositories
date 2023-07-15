import React from "react";

import logo from "../assets/logo.png";
import UserMenu from "./UserMenu";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const currentUser = useSelector((state: RootState) => state.user).user;

  return (
    <div className="w-full fixed bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <div className="max-w-[2520px] mx-auto px-4 sm:px-2 md:px-10 xl:px-20 ">
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <img
              onClick={() => navigate("/home")}
              alt="logo"
              className="cursor-pointer w-12"
              src={logo}
            />
            {currentUser && <UserMenu currentUser={currentUser} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

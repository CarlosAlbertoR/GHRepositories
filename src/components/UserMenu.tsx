import { FC, useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import { SafeUser } from "../models";
import placeholder from "../assets/placeholder.jpg";
import MenuItem from "./MenuItem";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { logout } from "../store/slices/user";
import { useNavigate } from "react-router-dom";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}
const UserMenu: FC<UserMenuProps> = ({ currentUser }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => setIsOpen((value) => !value), []);

  return (
    <div className="relative">
      <div
        className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        onClick={toggleOpen}
      >
        <AiOutlineMenu />
        <div className="hidden md:block">
          <img
            src={currentUser?.photoUrl || placeholder}
            className="rounded-full"
            height="30"
            width="30"
            alt="Avatar"
          />
        </div>
      </div>

      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw]  bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem
                label="My profile"
                onClick={() => {
                  setIsOpen(!isOpen);
                  navigate("/profile");
                }}
              />
              <hr />
              <MenuItem label="Logout" onClick={() => dispatch(logout())} />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;

import { BsStars } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const Menu = () => {
  const [mobileMenuState, setMobileMenuState] = useState(false);

  const activedClasses =
    "text-sky-500 px-5 py-5 font-semibold text-xl cursor-pointer duration-300 scale-110";
  const normalClasses =
    "text-sky-300 px-4 py-5 font-semibold text-xl duration-200 hover:text-sky-600 cursor-pointer";

  const mobileActivedClasses =
    "text-sky-500 py-5 font-semibold text-xl duration-300 scale-110";
  const mobileNormalClasses =
    "text-sky-300 py-5 font-semibold text-xl duration-200 hover:text-sky-600";

  const onMobileMenuClickHandler = () => {
    setMobileMenuState((prevState) => !prevState);
  };

  return (
    <div className="w-full border-b-2 border-slate-100">
      <div className="w-full text-center relative py-3 max-[599px]:block min-[599px]:hidden">
        <button
          type="button"
          className="text-2xl text-violet-700"
          onClick={onMobileMenuClickHandler}
        >
          <AiOutlineMenu />
        </button>
        <div
          className={`absolute top-14 left-0 w-full overflow-hidden transition-all duration-300 bg-slate-100 z-[999] ${
            mobileMenuState ? "h-[400px]" : "h-0"
          }`}
        >
          <div className="w-10/12 mx-auto mt-4">
            <SearchBar />
          </div>
          <div className="w-full">
            <ul className="w-full flex flex-col justify-center items-center gap-3 py-4">
              <li className={`first:pl-0`}>
                <NavLink
                  onClick={onMobileMenuClickHandler}
                  to="/"
                  className={({ isActive }) => {
                    return isActive
                      ? mobileActivedClasses
                      : mobileNormalClasses;
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li className={`first:pl-0`}>
                <NavLink
                  onClick={onMobileMenuClickHandler}
                  to="/foods"
                  className={({ isActive }) => {
                    return isActive
                      ? mobileActivedClasses
                      : mobileNormalClasses;
                  }}
                >
                  Foods
                </NavLink>
              </li>
              <li className={`first:pl-0`}>
                <NavLink
                  onClick={onMobileMenuClickHandler}
                  to="/user"
                  className={({ isActive }) => {
                    return isActive
                      ? mobileActivedClasses
                      : mobileNormalClasses;
                  }}
                >
                  User
                </NavLink>
              </li>
              <li className={`first:pl-0`}>
                <NavLink
                  onClick={onMobileMenuClickHandler}
                  to="/about"
                  className={({ isActive }) => {
                    return isActive
                      ? mobileActivedClasses
                      : mobileNormalClasses;
                  }}
                >
                  About Us
                </NavLink>
              </li>
              <li
                className="bg-violet-500 py-2 px-5 rounded-2xl text-white font-semibold flex
                   items-center duration-200 hover:bg-violet-600 cursor-pointer"
              >
                <BsStars /> Special Offers
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center max-[599px]:hidden min-[599px]:flex">
        <ul className="w-11/12 flex justify-start items-center py-3">
          <li className={`first:pl-0`}>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? activedClasses : normalClasses;
              }}
            >
              Home
            </NavLink>
          </li>
          <li className={`first:pl-0`}>
            <NavLink
              to="/foods"
              className={({ isActive }) => {
                return isActive ? activedClasses : normalClasses;
              }}
            >
              Foods
            </NavLink>
          </li>
          <li className={`first:pl-0`}>
            <NavLink
              to="/user"
              className={({ isActive }) => {
                return isActive ? activedClasses : normalClasses;
              }}
            >
              User
            </NavLink>
          </li>
          <li className={`first:pl-0`}>
            <NavLink
              to="/about"
              className={({ isActive }) => {
                return isActive ? activedClasses : normalClasses;
              }}
            >
              About Us
            </NavLink>
          </li>
          <li
            className="ml-auto bg-violet-500 py-2 px-5 rounded-2xl text-white font-semibold flex
                   items-center duration-200 hover:bg-violet-600 cursor-pointer"
          >
            <BsStars /> Special Offers
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;

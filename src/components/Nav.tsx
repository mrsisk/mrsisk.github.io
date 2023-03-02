import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/custom/sisk.svg";
import { useAppContext } from "../context/AppContext";

export default function Nav() {
  const { toggleSideBar, mailTo, } = useAppContext();


  return (
    <nav className="relativ py-4 px-2 bg-gray-800/50">
      <div className="flex justify-between items-center containe md:pt- mx-auto">
        <Link to="/">
          <Logo className="h-10 w-10 lg:h-12 lg:w-12" />
        </Link>
        <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <Link className="text-2xl text-white font-bold" to="/"></Link>
        </div>
        <div className="hidden md:block">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "inline-block mr-10 text-lg text-blue-500 hover:text-gray-50 font-bold"
                : "inline-block mr-10 text-lg text-white hover:text-gray-50 font-bold"
            }
            to="/projects"
          >
            Projects
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "inline-block mr-10 text-lg text-blue-500 hover:text-gray-50 font-bold"
                : "inline-block mr-10 text-lg text-white hover:text-gray-50 font-bold"
            }
            to="/about"
          >
            About
          </NavLink>
          <button onClick={mailTo} className="inline-block px-10 py-2 text-white font-bold border border-gray-200 hover:border-white rounded-full">
            Contact
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleSideBar} className=" navbar-burger">
            <svg
              className="w-10 h-3"
              width="39"
              height="13"
              viewBox="0 0 39 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="39" height="2" rx="1" fill="#C4C4C4"></rect>
              <rect
                x="19"
                y="11"
                width="20"
                height="2"
                rx="1"
                fill="#C4C4C4"
              ></rect>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

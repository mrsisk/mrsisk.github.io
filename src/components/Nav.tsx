import React from 'react'
import { ReactComponent as Logo } from "../assets/custom/sisk.svg";

export default function Nav() {
  return (
    <nav className="relative py-4 px-2">
      <div className="flex justify-between items-center container md:pt- mx-auto">
        <button className="">
          <Logo className="h-10 w-10 lg:h-12 lg:w-12" />
        </button>
        <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <a className="text-2xl text-white font-bold" href="#"></a>
        </div>
        <div className="hidden md:block">
          <a
            className="inline-block mr-10 text-lg text-white hover:text-gray-50 font-bold"
            href=""
          >
            Projects
          </a>
          <a
            className="inline-block mr-10 text-lg text-white hover:text-gray-50 font-bold"
            href=""
          >
            About
          </a>
          <a
            className="inline-block px-10 py-2 text-white font-bold border border-gray-200 hover:border-white rounded-full"
            href="#"
          >
            Contact
          </a>
        </div>
        <div className='md:hidden'>
          <button className=" navbar-burger">
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

import React from "react";
import phone from "../assets/images/two-phones.png";
import profile from "../assets/custom/rec.png";
import Nav from "./Nav";

export default function Index() {
  return (
    <body className="antialiased bg-body text-body font-body">
      <div>
        <section className="relative pb-20 bg-gray-800 overflow-hidden">
          <div className="absolute bottom-0 inset-x-0 h-full bg-gradient-zospace-1"></div>
          <div className="absolute bottom-0 inset-x-0 h-3/5 w-2full -ml-64 -mb-12 bg-gradient-zospace-2 transform -rotate-6"></div>

          <div className="relative container px-4 pt-12 md:pt-20 mx-auto">
            <div className="hidden 2xl:block absolute bottom-0 w-3/5 mb-40 h-2 border-b border-white"></div>
            <div className="relative flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 2xl:w-2/5 px-4 mb-12 mb:mb-0">
                <span className="text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 to-orange-600">
                  Hello world!
                </span>
                <h2 className="max-w-lg lg:max-w-md 2xl:max-w-none mt-7 mb-12 mb:mb-20 text-6xl lg:text-7xl 2xl:text-9xl text-white font-bold font-heading">
                  My name is Gabriel Machona
                </h2>
                <p className="mb-12 lg:mb-24 text-lg text-white opacity-90">
                  Discover how it works and start for free.
                </p>
                <div className="flex flex-wrap items-center">
                  <a
                    className="inline-block mr-14 px-12 py-5 text-lg text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200"
                    href="#"
                  >
                    Resume
                  </a>
                  <div className="w-full sm:w-auto mt-8 sm:mt-0 flex">
                    <button className="p-2">
                      <svg
                        width="11"
                        height="20"
                        viewBox="0 0 11 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.7597 18.6258C11.0801 18.942 11.0801 19.4502 10.7597 19.7641C10.4393 20.0781 9.92164 20.0792 9.60124 19.7641L0.240298 10.569C-0.0801018 10.255 -0.0801017 9.74688 0.240298 9.43061L9.60124 0.235462C9.92164 -0.0784849 10.4393 -0.0784848 10.7597 0.235462C11.0801 0.550571 11.0801 1.05986 10.7597 1.37381L2.22247 10.0004L10.7597 18.6258Z"
                          fill="white"
                        ></path>
                      </svg>
                    </button>
                    <span className="py-2 px-4">
                      <svg
                        width="2"
                        height="24"
                        viewBox="0 0 2 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 0L1 24"
                          stroke="white"
                          stroke-opacity="0.24"
                        ></path>
                      </svg>
                    </span>
                    <button className="p-2">
                      <svg
                        width="11"
                        height="20"
                        viewBox="0 0 11 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.2403 1.37424C-0.0801003 1.05797 -0.0801003 0.549844 0.2403 0.235898C0.5607 -0.0780496 1.07836 -0.0792131 1.39876 0.235898L10.7597 9.43104C11.0801 9.74499 11.0801 10.2531 10.7597 10.5694L1.39876 19.7645C1.07836 20.0785 0.560699 20.0785 0.240298 19.7645C-0.0801019 19.4494 -0.0801019 18.9401 0.240298 18.6262L8.77752 9.99964L0.2403 1.37424Z"
                          fill="white"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 2xl:w-3/5 px-4">
                <img
                  className="w-full h-full object-contain"
                  src={profile}
                  alt=""
                />
                {/* <Art
                  className="w-auto h-auto"           
                /> */}
              </div>
            </div>
          </div>
          <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
            <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
            <nav className="relative flex flex-col py-8 h-full w-full bg-white overflow-y-auto">
              <div className="flex items-center mb-16 pr-6">
                <a
                  className="ml-10 mr-auto text-2xl text-gray-800 font-bold"
                  href="#"
                >
                  <img
                    className="h-7"
                    src="zospace-assets/logos/zospace-dark-logo.svg"
                    alt=""
                    width="auto"
                  />
                </a>
              </div>
              <div>
                <ul>
                  <li className="mb-1 px-10">
                    <a
                      className="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl"
                      href="#"
                    >
                      Product
                    </a>
                  </li>
                  <li className="mb-1 px-10">
                    <a
                      className="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl"
                      href="#"
                    >
                      Story
                    </a>
                  </li>
                  <li className="mb-1 px-10">
                    <a
                      className="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl"
                      href="#"
                    >
                      Features
                    </a>
                  </li>
                  <li className="mb-1 px-10">
                    <a
                      className="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl"
                      href="#"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-auto px-10">
                <div className="pt-6">
                  <a
                    className="block mb-4 py-4 px-12 text-gray-800 text-center font-bold border border-gray-50 hover:border-gray-100 rounded-full"
                    href="#"
                  >
                    Sign in
                  </a>
                  <a
                    className="block py-4 px-12 text-white text-center font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200"
                    href="#"
                  >
                    Sign up
                  </a>
                </div>
                <p className="mt-6 mb-4 text-lg text-center">
                  <span>2021 © Zospace. All rights reserved.</span>
                </p>
              </div>
            </nav>
          </div>
        </section>
      </div>
    </body>
  );
}

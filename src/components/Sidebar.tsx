
import { ReactComponent as Logo } from "../assets/custom/sisk.svg";
import { TfiClose } from "react-icons/tfi";

export default function Sidebar(prop: {toggle: ()=> void}) {

  return (
    <div className="hidde navbar-menu fixed top-0 right-0 bottom-0 w-5/6 max-w-sm z-50">
      <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80">
        
      </div>
      <nav className="relative flex flex-col py-8 h-full w-full bg-gray-900 overflow-y-auto">
        <div className="flex items-center mb-16 pr-6 justify-between">
          <a className="ml-10 mr-auto text-2xl font-bold" href="#">
            <Logo className="h-8 w-8 lg:h-10 lg:w-10" />
          </a>
          <button onClick={prop.toggle}>
            <TfiClose className="text-white" size={28} />
          </button>
        </div>
        <div>
          <ul className="text-white">
            <li className="mb-1 px-10">
              <a
                className="block pl-8 py-4 text-xl hover:bg-blueGray-50 rounded-xl"
                href="#"
              >
                Product
              </a>
            </li>
            <li className="mb-1 px-10">
              <a
                className="block pl-8 py-4 text-xl hover:bg-blueGray-50 rounded-xl"
                href="#"
              >
                Story
              </a>
            </li>
            <li className="mb-1 px-10">
              <a
                className="block pl-8 py-4 text-xl hover:bg-blueGray-50 rounded-xl"
                href="#"
              >
                Features
              </a>
            </li>
            <li className="mb-1 px-10">
              <a
                className="block pl-8 py-4 text-xl  hover:bg-blueGray-50 rounded-xl"
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
  );
}

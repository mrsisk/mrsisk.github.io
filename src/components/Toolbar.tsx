import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ReactComponent as Logo } from "../assets/custom/sisk.svg";
import { TfiClose } from "react-icons/tfi";
import Footer from "./Footer";
import { FaGithub, FaLinkedin , FaTwitter} from "react-icons/fa";


export function Toolbar(props: { isOpen: boolean; toggle: () => void }) {
    const { isOpen, toggle } = props;
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ x: "100%" }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed bg-gray-900 text-white shadow-lg top-0 right-0 w-full max-w-sm h-screen p-5 z-50"
          >
            <nav className="relative flex flex-col  h-full w-full  overflow-y-auto">
              <div className="flex items-center mb-16 pr-6 justify-between">
                <a className="ml-10 mr-auto text-2xl font-bold" href="#">
                  <Logo className="h-8 w-8 lg:h-10 lg:w-10" />
                </a>
                <button onClick={toggle}>
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
                      Projects
                    </a>
                  </li>
                  <li className="mb-1 px-10">
                    <a
                      className="block pl-8 py-4 text-xl hover:bg-blueGray-50 rounded-xl"
                      href="#"
                    >
                      About
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-auto px-10">
                <div className="pt-6">
                  <a
                    className="block mb-4 py-4 px-12 text-white text-center font-bold border border-gray-50 hover:border-gray-100 rounded-full"
                    href="#"
                  >
                    Contact
                  </a>
                  <a
                    className="block py-4 px-12 text-white text-center font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200"
                    href="#"
                  >
                    Resume
                  </a>
                </div>

                <div>
                  <div className="flex justify-center py-8 text-lg text-gray-200 space-x-4">
                    <FaGithub className="" size={28}></FaGithub>
                    <FaLinkedin size={28} />
                    <FaTwitter size={28} />
                  </div>
                </div>
                <p className="mt-6 mb-4 text-lg text-center">
                  <span>2023 © All rights reserved.</span>
                </p>
              </div>
            </nav>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.2 }}
            onClick={toggle}
            className="bg-gray-700/50 px-5 fixed h-full w-full flex items-center justify-center top-0 left-0 z-40"
          />
        </>
      )}
    </AnimatePresence>
  );
}



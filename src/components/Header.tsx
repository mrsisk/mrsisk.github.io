import { motion } from "framer-motion";
import profile from "../assets/custom/head.png";
import Sidebar from "./Sidebar";


export default function Header(props: {isOpen: boolean, toggle: ()=> void}) {

  const {isOpen,toggle} = props
  
  return (
    <section className="md:h-[90vh]">
      {/* Nva */}

      <div className="px-4 pt-6 md:pt-6 mx-auto ">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 2xl:w-2/5 px-4 flex flex-col justify-evenly ">
            <div className="flex flex-col items-center">
              <span className="text-xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 to-orange-600">
                Hello world!
              </span>
              <h2 className="max-w-lg lg:max-w-md 2xl:max-w-none mt-2 mb-4 mb:mb-20 text-4xl lg:text-6xl 2xl:text-9xl text-white font-bold font-heading text-center">
                My name is Gabriel Machona
              </h2>
            </div>
            <div className="">
              <motion.p
                animate={{ x: 0 }}
                initial={{ x: -200 }}
                transition={{ ease: "easeOut", duration: 2 }}
                className="mb-4 lg:mb-2 text-lg lg:text-2xl text-white opacity-90 text-center"
              >
                I’m a software engineer specializing in building (and
                occasionally designing) exceptional digital experiences.
                Currently, I’m focused on building accessible, human-centered
                products at
              </motion.p>
            </div>

            <div className="flex flex-wrap items-center hidd w-full pb- md:pb-0 justify-center">
              <button className="inline-block px-8 py-4 text-lg text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200">
                Resume
              </button>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 2xl:w-3/5 px-4 py-4 md:py-0 flex justify-center"
          >
            <img className=" object-cover" src={profile} alt="" />
            {/* <Art
                  className="w-auto h-auto"           
                /> */}
          </motion.div>
        </div>
      </div>
      {/* {isOpen && (
        <motion.div
          animate={{ x: 0 }}
          initial={{ x: -200 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          <Sidebar toggle={toggle} />
        </motion.div>
      )} */}
    </section>
  );
}

import banner from "../assets/custom/mockup.png";


export default function Content() {
  return (
    <section className="py-4 overflow-hidden mt-4">
      <div className="container px-4 mx-auto">
        {/* <div className="text-xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 to-orange-600 pb-4">
          What i do?
        </div> */}
        <div className="flex flex-wrap -mx-4 mb-8">
          <div className="relative w-full md:w-1/2 px-4 mb-8 lg:mb-0">
            <a
              href="https://github.com/mrsisk/appoint-api"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="lg:absolute left-0 top-0 lg:-ml-32 2xl:-ml-64 w-full h-64 lg:h-full rounded-2xl object-cover"
                src={banner}
                alt=""
              />
            </a>
          </div>
          <div className="w-full md:w-1/2 px-4 lg:py-12 text-center">
            <span className="text-lg text-blue-400 font-bold ">
              Mobile applications
            </span>{" "}
            <div className="">
              <h2 className="mt-8 sm:mt-4 mb-4 text-4xl lg:text-4xl font-bold font-heading text-white">
                I build mobile applications from android native, to cross
                platform with flutter
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 lg:py-12 text-center">
            <span className="text-lg text-blue-400 font-bold">
              Web application
            </span>{" "}
            <div>
              <h2 className="mt-8 sm:mt-4  mb-4 text-4xl lg:text-4xl font-bold font-heading text-white">
                Custom web applications that suit your need and help increase
                your productivity
              </h2>
            </div>
          </div>
          <div className="relative w-full md:w-1/2 px-4 mb-8 lg:mb-0 order-first lg:order-last">
            <a
              href="https://github.com/mrsisk/appoint-admin"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="lg:absolute right-0 top-0 lg:-mr-32 2xl:-mr-64 w-full h-64 lg:h-full object-cover rounded-lg"
                src="https://firebasestorage.googleapis.com/v0/b/mrsisk-18e7b.appspot.com/o/admin.jpg?alt=media&token=b9ce4861-0463-499f-a975-561ac9cf3c66"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

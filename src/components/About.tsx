import React from 'react'
import TechStack from './TechStack';

export default function About() {
  return (
    <section className="py-4 2xl:py-6 overflow-hidden mt-4">
      <div className="container px-4 mx-auto">
        <div className="max-w-x mx-auto text-center">
          <h2 className="mt- mb-4 text-6xl 2xl:text-7xl text-white font-bold font-heading">
            About me!
          </h2>
          <p className="max-w-2xl mx-auto mb-6 text-xl text-gray-200">
            A summary about myself my journey
          </p>
          <div className="inline-flex pt-4 mb-4 items-center border-t border-gray-500">
            <img
              className="mr-8 w-20 lg:w-24 h-20 lg:h-24 rounded-full"
              src="https://objectstorage.af-johannesburg-1.oraclecloud.com/p/wtpe_0lKnJ6G6sCQ_2CSse5GsgXC8r-J1QfAEmaj1Zt1D_kXNgMfOCBeVw2_6K7Z/n/axmxoyufzvax/b/bucket/o/profile20230306_101759.jpg"
              alt=""
            />
            <div className="text-left">
              <h4 className="mb-1 text-2xl font-bold text-gray-50">
                Gabriel Machona
              </h4>
            </div>
          </div>
          <div className="max-w-6xl mx-auto text-center ">
            <p className="mb-6  text-xl text-gray-200 ">
              I Am a Software engineer with a couple of years of experience in
              programming and software development. Started as a self taught
              developer, however now on part-time I am doing my Bachelor of
              science in Software engineering honors and expecting to graduate
              in 2025. I enjoy writing code and solving problems. My favorite
              programming language is Kotlin, however, I do enjoy developing
              with other languages such as Java, JavaScript, Elixir and
              Typescript etc.
            </p>
            <p className="mb-6  text-xl text-gray-200">
              Started my journey primarily focused on Android native development
              with Java. However, because I am very passionate about learning
              new things and diversifying, over the years I have expanded my
              knowledge to many other areas such as web development, both
              frontend and backend.
            </p>
            <p className="mb-6  text-xl text-gray-200">
              I have experience in android native using both the older views
              system and modern jetpack compose, and cross platform applications
              using dart and Flutter framework. In terms of backend
              technologies, I have experience working with Spring boot (both
              java and kotlin), Express (NodeJs), NestJs etc. I have also worked
              heavily with Phoenix framework and Elixir language to build web
              applications. My experience is not just limited to the above
              mentioned, some noteworthy technologies include ReactJs, VueJs,
              Ktor, Tailwind CSS and many more...
            </p>
          </div>
        </div>
      </div>
      <TechStack/>
    </section>
  );
}

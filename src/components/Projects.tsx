import { Link } from "react-router-dom";
import { useProjectContext } from "../context/ProjectContext";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const { projects } = useProjectContext();
  return (
    <section className="relative py-0  overflow-hidden mt-8">
      <div className="container px-4 mx-auto ">
        <div className="mb-8 text-center">
          <span className="text-lg text-blue-400 font-bold">
            What i have been working on?
          </span>
          <h2 className="mt-2 text-5xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 to-orange-600   ">
            Latest project
          </h2>
        </div>


        <div className="flex flex-wrap -m-6 ">
          {projects.slice(0, 3).map((project)=> <ProjectCard project={project} key={project.id}/>)}
        </div>
        <div className="mt-8 lg:mt-6 text-center">
          <Link
            className="inline-block py-5 px-12 mr-4 bg-blue-500 hover:bg-blue-600 rounded-full text-white font-bold transition duration-200"
            to="/projects"
          >
            See all
          </Link>
        </div>
      </div>
    </section>
  );
}

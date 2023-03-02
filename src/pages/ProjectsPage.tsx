import ProjectCard from "../components/ProjectCard";
import { ProjectCategory, useProjectContext } from "../context/ProjectContext";

export default function ProjectsPage() {
  
  const {projects, filterProjects, selectedCategory} = useProjectContext()
  return (
    <section className="py-20 2xl:py-40">
      <div className="container mx-auto px-4 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-xl mx-auto mb-12 lg:mb-16 text-center">
            <h2 className="mt-8 mb-16 text-5xl font-bold font-heading">
              Projects that i have created or contributed to
            </h2>
          </div>
          <div className="lg:flex justify-center mb-4 mx-auto pb-6 border-b border-gray-50">
            <button
              onClick={() => filterProjects(ProjectCategory.All)}
              className={`w-full md:w-auto px-8 py-4 text-lg rounded-lg shadow-sm hover:bg-gray-700 ${
                selectedCategory === ProjectCategory.All
                  ? "font-bold shadow-gray-500"
                  : ""
              } `}
            >
              All
            </button>
            <button
              onClick={() => filterProjects(ProjectCategory.MOBILE)}
              className={`w-full md:w-auto px-8 py-4 text-lg rounded-lg shadow-sm hover:bg-gray-700 ${
                selectedCategory === ProjectCategory.MOBILE
                  ? "font-bold shadow-gray-500"
                  : ""
              }`}
            >
              Mobile
            </button>
            <button
              onClick={() => filterProjects(ProjectCategory.WEB)}
              className={`w-full md:w-auto px-8 py-4 text-lg rounded-lg shadow-sm hover:bg-gray-700 ${
                selectedCategory === ProjectCategory.WEB
                  ? "font-bold shadow-gray-500"
                  : ""
              }`}
            >
              Web
            </button>

            <button
              onClick={() => filterProjects(ProjectCategory.OTHERS)}
              className={`w-full md:w-auto px-8 py-4 text-lg rounded-lg shadow-sm hover:bg-gray-700 ${
                selectedCategory === ProjectCategory.OTHERS
                  ? "font-bold shadow-gray-500"
                  : ""
              }`}
            >
              Others
            </button>
          </div>
          <div className="flex flex-wrap -m-6">
            {projects.map((i) => (
              <ProjectCard project={i} key={i.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

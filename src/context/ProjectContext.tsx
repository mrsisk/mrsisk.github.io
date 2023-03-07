import { createContext, ReactNode, useContext, useState } from "react";


export enum ProjectCategory {
  MOBILE,
  WEB,
  OTHERS,
  All
}
export type Project = {
  id: string;
  subtitle: string;
  description: string;
  image: string;
  category: ProjectCategory;
  link: string
};

type ProjectState = {
  projects: Project[];
  filterProjects: (category :ProjectCategory)=> void,
  selectedCategory: ProjectCategory
};

const ProjectContext = createContext({} as ProjectState);

export function useProjectContext() {
  return useContext(ProjectContext);
}

export function getProjets(): Project[] {
  return [
    {
      id: "1",
      description: "",
      subtitle:
        "Android native application, for your clients to book an appointment,written in kotlin",
      image:
        "https://objectstorage.af-johannesburg-1.oraclecloud.com/p/n-R7mv8wp65Cl9BI7_n4Ns2B8FKmCwCGm7FWvVSCQusmdJyg8MgcWuuTI8IB-xQ-/n/axmxoyufzvax/b/bucket/o/appoint_mockupmockup_new.png",
      category: ProjectCategory.MOBILE,
      link: "https://github.com/mrsisk/appoint",
    },
    {
      id: "2",
      description: "",
      subtitle:
        "Appoint application API, for custom user registration written with Spring boot java",
      image:
        "https://objectstorage.af-johannesburg-1.oraclecloud.com/p/_fgHDgALvF3y-ifkUFnoYb63-IQ1bP5y7xfMNiuDi3JVIIl0o3NjKPGkDmUDhnk7/n/axmxoyufzvax/b/bucket/o/springspring.jpg",
      category: ProjectCategory.OTHERS,
      link: "https://github.com/mrsisk/appoint-api",
    },
    {
      id: "4",
      description: "",
      subtitle: "Appoint dashboard. Build with ReactJs to manage appointments.",
      image:
        "https://objectstorage.af-johannesburg-1.oraclecloud.com/p/guQO4edOiNDq7iRv1xamxiSXaIkNmvqD8M2oqssRhS6AUw7rFQueLcOGIuQ_7UrY/n/axmxoyufzvax/b/bucket/o/adminadmin.jpg",
      category: ProjectCategory.WEB,
      link: "https://github.com/mrsisk/appoint-admin",
    },
  ];
}

export function ProjectProvider(props: { children: ReactNode }) {
  const { children } = props;

  const [selectedCategory, setSelectedCategory] = useState(ProjectCategory.All)
  const [projects, setProjects] = useState(getProjets())

  const filterProjects = (category: ProjectCategory) =>{
    
    category === ProjectCategory.All ? setProjects(getProjets()): setProjects(getProjets().filter((p)=> p.category === category))
    setSelectedCategory(category)
  }

  return (
    <ProjectContext.Provider value={{ projects: projects, filterProjects, selectedCategory}}>
      {children}
    </ProjectContext.Provider>
  );
}

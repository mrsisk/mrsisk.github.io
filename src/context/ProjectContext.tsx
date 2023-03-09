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
        "An appointment booking application, where all your clients can see your schedules and book an appointment within the avialable time periods. Application written in Kotlin",
      image:
        "https://objectstorage.af-johannesburg-1.oraclecloud.com/p/m304ewu5ejNWSdoLXIKwNVMxTk3EDVqZzY-UqKb4B3nVaiqMYcNOTErrdk5kRnRK/n/axmxoyufzvax/b/bucket/o/appoint_mockupmockup_new.png",
      category: ProjectCategory.MOBILE,
      link: "https://github.com/mrsisk/appoint",
    },
    {
      id: "2",
      description: "",
      subtitle:
        "API that serves Appoint mobile application and admin dashboard. It provides services such as user registration, authentication, scheduling, booking etc. API is written with spring boot (Java).",
      image:
        "https://objectstorage.af-johannesburg-1.oraclecloud.com/p/_fgHDgALvF3y-ifkUFnoYb63-IQ1bP5y7xfMNiuDi3JVIIl0o3NjKPGkDmUDhnk7/n/axmxoyufzvax/b/bucket/o/springspring.jpg",
      category: ProjectCategory.OTHERS,
      link: "https://github.com/mrsisk/appoint-api",
    },
    {
      id: "4",
      description: "",
      subtitle:
        "Appoint admin dashboard is used by the administrator to manage all the services provided such as bookings, client accounts etc. Admin dashboard is written with React.js (Typescript).",
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

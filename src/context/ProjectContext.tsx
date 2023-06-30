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
      id: "0",
      description: "",
      subtitle:
        "Experimental Api written in elixir language using Ash framework and plug for web server",
      image: "https://ash-hq.org/images/ash-logo-side.svg",
      category: ProjectCategory.OTHERS,
      link: "https://github.com/mrsisk/bus_api",
    },
    {
      id: "1",
      description: "",
      subtitle:
        "An appointment booking application, where all your clients can see your schedules and book an appointment within the avialable time periods. Application written in Kotlin",
      image:
        "https://firebasestorage.googleapis.com/v0/b/mrsisk-18e7b.appspot.com/o/mockup_new.png?alt=media&token=3a58d556-f39e-44ea-8160-3c5a93a91b4a",
      category: ProjectCategory.MOBILE,
      link: "https://github.com/mrsisk/appoint",
    },
    {
      id: "2",
      description: "",
      subtitle:
        "Microservices written in Java and kotlin to provide services such as scheduling, booking, user registration, authentication etc.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/mrsisk-18e7b.appspot.com/o/Appint%20services.png?alt=media&token=63b6ffc3-085e-4974-a181-27163be713da",
      category: ProjectCategory.OTHERS,
      link: "https://github.com/mrsisk/appoint-services",
    },
    {
      id: "4",
      description: "",
      subtitle:
        "Appoint admin dashboard is used by the administrator to manage all the services provided such as bookings, client accounts etc. Admin dashboard is written with React.js (Typescript).",
      image:
        "https://firebasestorage.googleapis.com/v0/b/mrsisk-18e7b.appspot.com/o/admin.jpg?alt=media&token=b9ce4861-0463-499f-a975-561ac9cf3c66",
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

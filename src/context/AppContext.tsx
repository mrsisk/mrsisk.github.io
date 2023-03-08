import { createContext, ReactNode, useContext, useState } from "react";

type AppState = {
  isSidebarOpen: boolean;
  resume: string,
  toggleSideBar: () => void;
  mailTo: ()=> void
};

const AppContext = createContext({} as AppState);

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider(props: { children: ReactNode }) {
  const { children } = props;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const resume =
    "https://objectstorage.af-johannesburg-1.oraclecloud.com/p/ZM_rDAH3b_4FihozWDG83_5eufjD9_SerjQ5MdPSa97VZV9JYbCcPU6NPKU1AXVv/n/axmxoyufzvax/b/bucket/o/Gabriel%20CV.pdf";

  const toggleSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const mailTo = () => {
    window.open("mailto:gabrielmachona@gmail.com");
  };

  return (
    <AppContext.Provider value={{ isSidebarOpen, toggleSideBar, mailTo , resume}}>
      {children}
    </AppContext.Provider>
  );
}

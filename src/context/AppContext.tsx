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
    "https://objectstorage.af-johannesburg-1.oraclecloud.com/p/U915V7QKS6ft3-yi4BStSW_kXITsAHNTR5rhJNZj2x_6IQpAJq6wRhfNkBWsgm0p/n/axmxoyufzvax/b/bucket/o/resume.pdf";

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

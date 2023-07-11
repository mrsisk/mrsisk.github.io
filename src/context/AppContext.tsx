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
    "https://firebasestorage.googleapis.com/v0/b/mrsisk-18e7b.appspot.com/o/Gabriel%20M.%20CV.pdf?alt=media&token=993c16ad-d2ae-4f04-b445-91a22e6f0b48";

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

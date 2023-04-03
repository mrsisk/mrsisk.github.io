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
    "https://firebasestorage.googleapis.com/v0/b/mrsisk-18e7b.appspot.com/o/Gabriel%20CV.pdf?alt=media&token=534d3978-96b6-4b6f-aa6b-63ecc4373319";

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

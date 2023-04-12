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
    "https://firebasestorage.googleapis.com/v0/b/mrsisk-18e7b.appspot.com/o/Gabriel_resume.pdf?alt=media&token=e2fd9609-1c0b-427c-a507-56f48feda4d1";

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

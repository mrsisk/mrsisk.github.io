
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import SmoothScroll from "./components/SmoothScroll";
import { Toolbar } from "./components/Toolbar";
import { AppProvider } from "./context/AppContext";
import { ProjectProvider } from "./context/ProjectContext";
import AboutPage from "./pages/AboutPage";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";


function App() {

  return (
    <AppProvider>
      <ProjectProvider>
        <div className="bg-gray-900 min-h-screen ">
          <header className="sticky top-0 z-50">
            <Nav />
          </header>
          <Toolbar></Toolbar>
          <SmoothScroll>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </SmoothScroll>
          <Footer />
        </div>
      </ProjectProvider>
    </AppProvider>
  );
}

export default App;

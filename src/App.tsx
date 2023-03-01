import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import { Toolbar } from "./components/Toolbar";

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {

   setIsOpen(!isOpen)
  }
  return (
    <div className="bg-gray-800 min-h-screen ">
      <header className="sticky top-0 z-50">
        <Nav toggle={toggle} />
      </header>
      <main className="">
        <Header isOpen={isOpen} toggle={toggle} />
        <Toolbar isOpen={isOpen} toggle={toggle}></Toolbar>
        <Content />
        <Projects />
        <About />

        <Footer />
      </main>
    </div>
  );
}

export default App;

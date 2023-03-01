import "./App.css";
import About from "./components/About";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-gray-800 min-h-screen ">
      
      <header className="sticky top-0 z-50">
        <Nav />
      </header>
      <main className="">
        <Header />
        <Content/>
        <Projects/>
        <About/>

        <Footer/>
      </main>
    </div>
  );
}

export default App;

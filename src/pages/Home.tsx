import Projects from "../components/Projects";
import About from "../components/About";
import Content from "../components/Content";
import Header from "../components/Header";


export default function Home() {

  return (
    <main className="">
      <Header />
      
      <Content />
      <Projects />
      <About />
    </main>
  );
}

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Achievements from "../components/Achievements";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Achievements />
      <Projects />
      <Contact />
    </main>
  );
}

export default Home;

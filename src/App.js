import Banner from "./pages/Banner";
import About from "./pages/About";
import Socials from "./pages/Socials";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Footer from "./pages/Footer";
import Certifications from "./pages/Certificate";
import Projects from "./pages/Projects";
import Reference from "./pages/Reference";

function App() {
  return (
    <div className="App">
      <Banner />
      <Socials />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Certifications />
      <Skills />
      <Reference />
      <Footer />
    </div>
  );
}

export default App;

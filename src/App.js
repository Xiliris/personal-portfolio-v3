import React, { Suspense, lazy } from "react";
import Loading from "./components/Loading";

const Navbar = lazy(() => import("./components/Navbar"));
const Sidebar = lazy(() => import("./components/Sidebar"));
const Scroll = lazy(() => import("./components/Scroll"));
const Hero = lazy(() => import("./pages/Hero"));
const About = lazy(() => import("./pages/About"));
const Experience = lazy(() => import("./pages/Experience"));
const History = lazy(() => import("./pages/History"));
const Feedback = lazy(() => import("./pages/Feedback"));
const Footer = lazy(() => import("./pages/Footer"));
const Copy = lazy(() => import("./pages/Copy"));
const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Sidebar />
        <Scroll />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <History />
        <Projects />
        <Feedback />
        <Footer />
        <Copy />
      </Suspense>
    </div>
  );
}
export default App;

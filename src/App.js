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
const Skills = lazy(() => wait(2000).then(() => import("./pages/Skills")));

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
        <Feedback />
        <Footer />
        <Copy />
      </Suspense>
    </div>
  );
}

function wait(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export default App;

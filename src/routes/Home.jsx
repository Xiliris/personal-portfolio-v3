import React, { Suspense, lazy } from "react";
import Loading from "../components/Loading";

const Navbar = lazy(() => import("../components/Navbar"));
const Sidebar = lazy(() => import("../components/Sidebar"));
const Scroll = lazy(() => import("../components/Scroll"));
const Footer = lazy(() => import("../components/Footer"));
const Copy = lazy(() => import("../components/Copy"));
const Hero = lazy(() => import("../pages/Home/Hero"));
const About = lazy(() => import("../pages/Home/About"));
const Experience = lazy(() => import("../pages/Home/Experience"));
const History = lazy(() => import("../pages/Home/History"));
const Feedback = lazy(() => import("../pages/Home/Feedback"));

const Projects = lazy(() => import("../pages/Home/Projects"));

function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <Navbar />
      <Sidebar />
      <Scroll />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <History />
      <Feedback />
      <Footer />
      <Copy />
    </Suspense>
  );
}
export default Home;

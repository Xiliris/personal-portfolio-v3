import { useState } from "react";
import { useParams, Outlet } from "react-router-dom";
import projects from "../data/projects";

import Navbar from "../components/Navbar";
import MainProjects from "../pages/Projects/Main";
import Footer from "../components/Footer";
import Copy from "../components/Copy";

export default function Project() {
  const { id } = useParams();
  const [loadState, setLoadState] = useState("load-from-top");

  const project = projects.find((project) => project.name === id);

  setTimeout(() => {
    setLoadState("default");
  }, 1000);

  return (
    <div className={loadState}>
      <Navbar />
      <MainProjects {...project} />
      <Footer />
      <Copy />
      <Outlet />
    </div>
  );
}

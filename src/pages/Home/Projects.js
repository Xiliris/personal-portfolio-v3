import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

import Title from "../../components/Title";
import projects from "../../data/projects";
import "./Projects.scss";
import { opacityAnimation } from "../../animations/opacity";

export default function Projects() {
  return (
    <section id="projects">
      <div className="projects__container">
        <Title>Projects</Title>
        <div className="projects__content">
          {projects.map((project, index) => (
            <Article key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Article({ name, banner }) {
  return (
    <HashLink to={`/project/${name}#root`}>
      <motion.img
        src={banner}
        alt={name}
        title={name}
        variants={opacityAnimation}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
        width={400}
        height={200}
        loading="lazy"
      />

      <h3>{name}</h3>
    </HashLink>
  );
}

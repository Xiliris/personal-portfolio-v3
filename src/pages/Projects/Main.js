import "./Main.scss";
import { motion } from "framer-motion";
import Anchor from "../../components/Anchor";
import Title from "../../components/Title";
import Item from "../../components/Item";
import Button from "../../components/Button";

const variatP = {
  initial: {
    opacity: 0,
    x: -50,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },

  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

export default function MainProjects({ name, link, url, description, stack, banner }) {
  return (
    <main id="projects__route">
      <div className="projects__title">
        <Title>{name}</Title>
        <Anchor link={"/#projects"}>BACK</Anchor>
      </div>
      <div className="projects__content">
        <motion.p
          variants={variatP}
          initial="initial"
          animate="animate"
          viewport={{ once: true, amount: 0.5, type: "spring" }}
        >
          {description}
        </motion.p>
        <div className="projects__stack">
          {stack &&
            stack.length > 0 &&
            stack.map((item, index) => (
              <Item key={index} index={index}>
                {item}
              </Item>
            ))}
        </div>
        <a href={url} target="_blank" rel="noreferrer">
          <Button>Visit website</Button>
        </a>
      </div>
    </main>
  );
}

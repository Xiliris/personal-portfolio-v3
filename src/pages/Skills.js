import { motion } from "framer-motion";
import "./Skills.scss";
import { itemAnimation } from "../animations/itemAnimations";
import Title from "../components/Title";

function Skills() {
  return (
    <div id="skills">
      <main>
        <Title>SKILLS</Title>
        <section>
          <SkillsItem
            title={"Front-end Development"}
            description={
              "ReactJS, JavaScript, TypeScript, HTML, CSS, SASS, Tailwind,Bootstrap, jQuery..."
            }
            index={1}
          />
          <SkillsItem
            title={"Back-end Development"}
            description={"NodeJS, Express, NestJS..."}
            index={1}
          />
          <SkillsItem
            title={"Database"}
            description={"SQL, MongoDB, Redis, Firebase..."}
            index={1}
          />
          <SkillsItem
            title={"Other"}
            description={"GIT, C, Java, Shopify, SCRUM, TypeScript, Jest..."}
            index={1}
          />
        </section>
      </main>
    </div>
  );
}

function SkillsItem({ title, description, index }) {
  return (
    <motion.div
      variants={itemAnimation}
      initial="initial"
      whileInView="animate"
      custom={{ index: index, time: 0.2 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <h2>{title}</h2>
      <h3>{description}</h3>
    </motion.div>
  );
}

export default Skills;

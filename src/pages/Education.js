import { motion } from "framer-motion";
import "./Education.scss";
import Title from "../components/Title";
import { itemAnimation } from "../animations/itemAnimations";

function Education() {
  return (
    <div id="education">
      <main>
        <Title>EDUCATION</Title>
        <section>
          <EducationItem
            date={"2023-2024"}
            title={"IT ACADEMY"}
            description={
              "Completed intensive 1-year program covering web development, SEO optimization, and basic back-end concepts. Gained skills in latestsoftware, design, and site optimization"
            }
            index={1}
          />
          <EducationItem
            date={"2019-2023"}
            title={"COMPUTER TECHNICIAN"}
            description={
              "I learned basics of language C, and I also gained experience inbuilding web applications using HTML, CSS, and JavaScript."
            }
            index={1}
          />
        </section>
      </main>
    </div>
  );
}

function EducationItem({ date, title, description, index }) {
  return (
    <motion.article
      variants={itemAnimation}
      initial="initial"
      whileInView="animate"
      custom={{ index: index, time: 0.2 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <p className="date">{date}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </motion.article>
  );
}

export default Education;

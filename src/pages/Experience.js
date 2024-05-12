import { motion } from "framer-motion";
import "./Experience.scss";

import { itemAnimation } from "../animations/itemAnimations";
import Title from "../components/Title";

function Experience() {
  return (
    <div id="experience">
      <main>
        <Title>EXPERIENCE</Title>
        <section>
          <ExpItem
            title={"Internship"}
            role={"Back-End Team Managment"}
            company={"ITAcademy by LINKGroup"}
            date={"Dec/2023-May/2024"}
            index={1}
          />
          <ExpItem
            title={"Internship"}
            role={"Front-End Team Lead"}
            company={"ITAcademy by LINKGroup"}
            date={"Nov/2023-Dec/2023"}
            index={1}
          />
          <ExpItem
            title={"Freelance"}
            role={"Web Development and Management"}
            company={"OBRT STEELPRO, Elmir Skopljak"}
            date={"Jun/2022-May/2023"}
            index={1}
          />
        </section>
      </main>
    </div>
  );
}

function ExpItem({ title, role, company, date, index }) {
  return (
    <motion.div
      variants={itemAnimation}
      initial="initial"
      whileInView="animate"
      custom={{ index: index, time: 0.2 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <aside>
        <p>{title}</p>
        <h2>{role}</h2>
        <h3>{company}</h3>
        <p className="date-small">{date}</p>
      </aside>
      <p className="date-big">{date}</p>
    </motion.div>
  );
}

export default Experience;

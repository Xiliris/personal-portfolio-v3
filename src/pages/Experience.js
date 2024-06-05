import { motion } from "framer-motion";
import { useState } from "react";
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
            description={
              "Leading the Back-End Team in IT Academy internship application, I control the improvement of the Linker Application's server-facet functionalities. Utilizing NodeJS, Express, MongoDB and GIT, I collaborate with interns to make sure of smooth integration and efficient database control."
            }
            role={"Back-End Team Managment"}
            company={"ITAcademy by LINKGroup"}
            date={"Dec/2023-May/2024"}
            index={1}
          />
          <ExpItem
            title={"Internship"}
            description={
              "As the Front-End Team Lead Intern at IT Academy, I directed the improvement of the Linker Application's consumer interface. Working with ReactJS, SASS, JavaScript, Bootstrap, and GIT, I led a group of interns in growing responsive and visually appealing the front-end solutions."
            }
            role={"Front-End Team Lead"}
            company={"ITAcademy by LINKGroup"}
            date={"Nov/2023-Dec/2023"}
            index={1}
          />
          <ExpItem
            title={"Freelance"}
            description={
              "As the only developer at STEELPRO, I undertook the duty of manufacturing and keeping the agency's public internet site and Inner Dashboard application. I singlehandedly managed the whole improvement lifecycle, from conceptualization to deployment, ensuring a seamless consumer experience across each system."
            }
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

function ExpItem({
  title,
  description,
  techStack,
  role,
  company,
  date,
  index,
}) {
  const [toggleDescription, setToggleDescription] = useState("hide");

  function toggle() {
    setToggleDescription(toggleDescription === "hide" ? "" : "hide");
  }

  return (
    <motion.article
      variants={itemAnimation}
      initial="initial"
      whileInView="animate"
      custom={{ index: index, time: 0.2 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className={`title border-${toggleDescription}`}>
        <div className="content">
          <p>{title}</p>
          <h2>{role}</h2>
          <h3>{company}</h3>
          <p className="date">{date}</p>
        </div>
        <div className="more">
          <i
            className={`fas fa-chevron-right arrow-${toggleDescription}`}
            onClick={() => {
              toggle();
            }}
          ></i>
        </div>
      </div>
      <div className={`description ${toggleDescription}`}>
        <p>{description}</p>
      </div>
    </motion.article>
  );
}

export default Experience;

import { motion } from "framer-motion";
import "./About.scss";
import adnanCV from "../files/AdnanSkopljakCV.pdf";
import Title from "../components/Title";

import { itemAnimation } from "../animations/itemAnimations";
import { titleAnimation } from "../animations/titleAnimation";

function About() {
  return (
    <div id="about">
      <main>
        <Title>ABOUT</Title>
        <motion.section
          variants={itemAnimation}
          initial="initial"
          whileInView="animate"
          custom={{ index: 0, time: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <p>
            My name is Adnan Skopljak and I am a Software Development Engineer
            based in Kreševo, Bosnia and Herzegovina. Certified Front-End
            JavaScript Developer with practical experience gained through
            training sessions with highly skilled mentors from IT Academy.
          </p>
          <p>
            {" "}
            My main focus is working on Front-end, creating, designing and
            developing high-quality, modern content. my abilities do not stop
            there, as I am skilled in Back-end technologies and more.
          </p>
        </motion.section>
        <a
          href={adnanCV}
          download="AdnanSkopljakCV"
          target="_blank"
          rel="noreferrer"
        >
          <motion.button
            variants={titleAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
          >
            DOWNLOAD CV
          </motion.button>
        </a>
      </main>
    </div>
  );
}

export default About;

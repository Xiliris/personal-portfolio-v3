import { motion } from "framer-motion";
import { opacityAnimation } from "../../animations/opacity";
import Title from "../../components/Title";
import "./Experience.scss";

export default function Experience() {
  return (
    <section id="experience">
      <div className="wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <article>
        <Title>Experience</Title>
        <motion.p
          variants={opacityAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
        >
          Acquiring over <span>3 years</span> of practical experience in web application development, with a focus on
          freelance projects and collaborations with dynamic startups.
        </motion.p>
      </article>
    </section>
  );
}

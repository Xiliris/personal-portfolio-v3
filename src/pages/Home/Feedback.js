import { motion } from "framer-motion";
import Title from "../../components/Title";
import feedback from "../../data/feedback";
import { titleAnimation, swipeAnimation } from "../../animations/feedbackAnimation";
import "./Feedback.scss";

export default function Feedback() {
  return (
    <section id="feedback">
      <div className="feedback__container">
        <Title>Feedback</Title>
        {feedback.map((person, index) => (
          <Article key={index} {...person} />
        ))}
      </div>
    </section>
  );
}

function Article({ name, role, company, feedback }) {
  return (
    <article>
      <div className="feedback__content">
        <motion.h3
          variants={swipeAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
        >
          <span className="material-symbols-outlined">format_quote</span>
          {feedback}
        </motion.h3>
        <div>
          <motion.h4
            variants={titleAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
          >
            {name}
          </motion.h4>
          <motion.p
            variants={titleAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
          >
            {role}
          </motion.p>
          <motion.p
            variants={titleAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
          >
            {company}
          </motion.p>
        </div>
      </div>
    </article>
  );
}

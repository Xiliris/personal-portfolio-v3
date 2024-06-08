import { motion } from "framer-motion";
import Title from "../components/Title";
import "./History.scss";
import history from "../data/history";
import { yearAnimation, titleAnimation } from "../animations/historyAnimation";

export default function History() {
  return (
    <section id="history">
      <div>
        <div className="title-bg">
          <Title>History</Title>
        </div>
        {history.map((job, index) => (
          <Article key={index} {...job} />
        ))}
      </div>
    </section>
  );
}

function Article({ year, position, company, key }) {
  return (
    <article key={key}>
      <div className="inner__content">
        <motion.h3
          variants={yearAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 1 }}
        >
          {year}
        </motion.h3>
        <div>
          <motion.h3
            variants={titleAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
          >
            {position}
          </motion.h3>
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

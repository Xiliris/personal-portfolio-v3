import { motion } from "framer-motion";
import { textAnimation } from "../animations/text";
import Background from "../images/background.jpg";
import "./Hero.scss";

export default function Hero() {
  return (
    <main id="hero">
      <img src={Background} alt="Background" />
      <div>
        <p>ADNAN SKOPLJAK</p>
        <motion.h2
          variants={textAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
        >
          Creating <span>innovative</span>
        </motion.h2>
        <motion.h2
          variants={textAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
        >
          solutions to <span>complex</span>
        </motion.h2>
        <motion.h2
          variants={textAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
        >
          problems.
        </motion.h2>
      </div>
    </main>
  );
}

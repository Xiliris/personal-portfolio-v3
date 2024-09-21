import { motion } from "framer-motion";
import { titleAnimation, textAnimation2 } from "../../animations/text";
import Background from "../../images/background.jpg";
import "./Hero.scss";

export default function Hero() {
  return (
    <main id="hero">
      <img
        src={Background}
        alt="Background"
        title="background"
        width={1920}
        height={1280}
        loading="eager"
      />
      <div>
        <motion.h1
          variants={textAnimation2}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
        >
          ADNAN SKOPLJAK
          <span>PORTFOLIO</span>
        </motion.h1>
        <motion.h2
          variants={titleAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
        >
          Creating <span>innovative</span>
        </motion.h2>
        <motion.h2
          variants={titleAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
        >
          solutions to <span>complex</span>
        </motion.h2>
        <motion.h2
          variants={titleAnimation}
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

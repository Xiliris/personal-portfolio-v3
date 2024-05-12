import { motion } from "framer-motion";
import { titleAnimation } from "../animations/titleAnimation";
import "./Title.scss";

function Title({ children }) {
  return (
    <motion.h1
      variants={titleAnimation}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
        amount: 0.5,
      }}
    >
      {children}
    </motion.h1>
  );
}

export default Title;

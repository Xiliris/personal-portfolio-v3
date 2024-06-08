import { motion } from "framer-motion";
import { swipeAnimation } from "../animations/swipe";
import "./Title.scss";

export default function Title({ children }) {
  return (
    <motion.h2
      className="title"
      variants={swipeAnimation}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.5 }}
    >
      {children}
    </motion.h2>
  );
}

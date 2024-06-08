import { motion } from "framer-motion";
import "./Copy.scss";
import { swipeAnimation } from "../animations/swipe";

export default function Copy() {
  return (
    <footer>
      <motion.div
        variants={swipeAnimation}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
      >
        <p>© 2024 Adnan Skopljak. All rights reserved.</p>
      </motion.div>{" "}
    </footer>
  );
}

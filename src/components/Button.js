import { motion } from "framer-motion";
import "./Button.scss";

const buttonVariants = {
  initial: {
    opacity: 0,

    transition: {
      duration: 0.5,
    },
  },

  animate: {
    opacity: 1,

    transition: {
      duration: 0.5,
      type: "tween",
    },
  },
};

export default function Button({ children }) {
  return (
    <motion.button
      variants={buttonVariants}
      initial="initial"
      animate="animate"
      class="button"
      style={{ cursor: "pointer" }}
    >
      <span class="button_lg" style={{ cursor: "pointer" }}>
        <span class="button_sl" style={{ cursor: "pointer" }}></span>
        <span class="button_text" style={{ cursor: "pointer" }}>
          {children}
        </span>
      </span>
    </motion.button>
  );
}

import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import Dogo from "../images/dogo.png";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import "./Error.scss";

import { swipeAnimation } from "../animations/swipe";

export default function MainError() {
  return (
    <>
      <Navbar />
      <main id="error">
        <motion.h1 variants={swipeAnimation} initial="initial" animate="animate" viewport={{ once: true, amount: 0.5 }}>
          404
        </motion.h1>
        <motion.div
          variants={swipeAnimation}
          initial="initial"
          animate="animate"
          viewport={{ once: true, amount: 0.5 }}
        >
          <p>This page took a break.</p>
          <p>Let's go somewhere else.</p>
        </motion.div>
        <HashLink to="/">
          <Button>Go back</Button>
        </HashLink>
        <img src={Dogo} alt="Dogo" className="dogo" />
      </main>
    </>
  );
}

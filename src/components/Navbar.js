import Logo from "../images/logo.png";
import { motion } from "framer-motion";
import { opacityAnimation } from "../animations/opacity";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <motion.nav
      variants={opacityAnimation}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.5 }}
    >
      <a href="#hero">
        <img src={Logo} alt="Logo" />
      </a>
      <div>
        <ul>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#experience">
            <li>Work</li>
          </a>
          <a href="#footer">
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </motion.nav>
  );
}

import { HashLink } from "react-router-hash-link";
import Logo from "../images/logo.png";
import { motion } from "framer-motion";
import { onlyOpacityAnimation } from "../animations/opacity";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <motion.nav
      variants={onlyOpacityAnimation}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.5 }}
    >
      <HashLink to="/#hero">
        <img
          src={Logo}
          alt="Logo"
          title="Logo"
          width={50}
          height={50}
          loading="eager"
        />
      </HashLink>
      <div>
        <ul>
          <HashLink to="/#about">
            <li>About</li>
          </HashLink>
          <HashLink to="/#experience">
            <li>Work</li>
          </HashLink>
          <HashLink to="/#footer">
            <li>Contact</li>
          </HashLink>
        </ul>
      </div>
    </motion.nav>
  );
}

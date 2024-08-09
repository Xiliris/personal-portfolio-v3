import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import { opacityAnimation } from "../animations/opacity";
import "./Anchor.scss";

export default function Anchor({ children, link }) {
  return (
    <HashLink to={link} className="btn">
      <motion.span variants={opacityAnimation} initial="initial" animate="animate">
        {children}
      </motion.span>
    </HashLink>
  );
}

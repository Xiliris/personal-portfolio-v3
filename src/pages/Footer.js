import { motion } from "framer-motion";
import "./Footer.scss";
import { titleAnimation } from "../animations/titleAnimation";

function Footer() {
  return (
    <div id="footer">
      <motion.footer
        variants={titleAnimation}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
          amount: 0.5,
        }}
      >
        <p>© 2024 Adnan Skopljak. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}

export default Footer;

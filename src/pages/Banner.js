import { motion } from "framer-motion";
import "./Banner.scss";
import { titleAnimation, pAnimation } from "../animations/textAnimations";
import background from "../images/background.jpg";

function Banner() {
  return (
    <div id="banner">
      <main>
        <img src={background} alt="bg" />
        <div className="title">
          <motion.h1
            variants={titleAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            ADNAN <br></br>SKOPLJAK
          </motion.h1>
          <motion.p
            variants={pAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            SOFTWARE DEVELOPER
          </motion.p>
        </div>
      </main>
    </div>
  );
}

export default Banner;

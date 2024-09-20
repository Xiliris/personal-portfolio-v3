import "./About.scss";
import { motion } from "framer-motion";
import { opacityAnimation } from "../../animations/opacity";
import Dogo from "../../images/dogo.png";
import Title from "../../components/Title";

export default function About() {
  return (
    <section id="about">
      <div>
        <Title>About</Title>
        <motion.p
          variants={opacityAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
        >
          I am a <span>Web Developer</span> based in Kreševo, Bosnia and Herzegovina. I specialize in creating
          high-quality, modern web applications, bringing innovative ideas to life with cutting-edge technology and a
          passion for excellence.
        </motion.p>
      </div>
      <img src={Dogo} alt="Dogo" />
    </section>
  );
}

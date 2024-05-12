import { motion } from "framer-motion";
import Title from "../components/Title";
import "./Reference.scss";
import { sideAnimation } from "../animations/sideAnimations";
import { scaleAnimation } from "../animations/scaleAnimations";

function Reference() {
  return (
    <div id="reference">
      <main>
        <Title>REFERENCE</Title>
        <section>
          <motion.article
            variants={scaleAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
          >
            <span className="material-symbols-outlined">format_quote</span>
            <p>
              <strong></strong>Adnan Skopljak is technically exceptional, very
              diligent, and responsible. With his work, he has enhanced the
              project in almost every aspect, overcoming all tasks and issues
              with ease. His dedication and commitment to the project are highly
              valuable, making him an exceptionally important team member. His
              work deserves all praise and recommendations.
            </p>
            <span className="material-symbols-outlined quote-end">
              format_quote
            </span>
          </motion.article>
          <motion.p
            className="emphasis"
            variants={sideAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
          >
            {" "}
            - S.S.E. Faris Šišić
          </motion.p>
        </section>
      </main>
    </div>
  );
}

export default Reference;

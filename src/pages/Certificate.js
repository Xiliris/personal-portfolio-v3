import { motion } from "framer-motion";
import "./Certificate.scss";

import Title from "../components/Title";
import { itemAnimation } from "../animations/itemAnimations";

import certificate1 from "../files/IntroductionFrontendDevelopmentCertificate.pdf";
import certificate2 from "../files/IntroductionBackendDevelopmentCertificate.pdf";
import certificate3 from "../files/ProgramingWithJavascriptCertificate.pdf";
import certificate4 from "../files/VersionControlCertificate.pdf";

function Certificate() {
  return (
    <div id="certificate">
      <main>
        <Title>COURSES</Title>
        <section>
          <ItemSection
            file={certificate1}
            date="April/2024"
            description="Introduction to Front-end Development"
            corporation="By Meta"
            index={1}
          />
          <ItemSection
            file={certificate2}
            date="April/2024"
            description="Introduction to Back-end Development"
            corporation="By Meta"
            index={1}
          />
          <ItemSection
            file={certificate3}
            date="April/2024"
            description="Programing with JavaScript"
            corporation="By Meta"
            index={1}
          />
          <ItemSection
            file={certificate4}
            date="April/2024"
            description="Version Control"
            corporation="By Meta"
            index={1}
          />
        </section>
      </main>
    </div>
  );
}

function ItemSection({ file, date, description, corporation, index }) {
  return (
    <motion.article
      variants={itemAnimation}
      initial="initial"
      whileInView="animate"
      custom={{ index: index, time: 0.2 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <a
        href={file}
        rel="noopener noreferrer"
        target="_blank"
        label="certificate"
      >
        <aside>
          <p>{date}</p>
          <h2>{description}</h2>
          <h3>{corporation}</h3>
        </aside>
        <button>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </a>
    </motion.article>
  );
}

export default Certificate;

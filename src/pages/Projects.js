import { motion } from "framer-motion";

import Title from "../components/Title";
import "./Projects.scss";
import { itemAnimation } from "../animations/item";
import { textAnimation2 } from "../animations/text";
import { opacityAnimation } from "../animations/opacity";

import MalaBastaBanner from "../images/banner/malabasta.png";
import DixieBotBanner from "../images/banner/dixiebot.png";
import SteelproBanner from "../images/banner/steelpro.png";
import LinkerAppBanner from "../images/banner/linkerapp.png";
import ClickpulseBanner from "../images/banner/clickpulse.png";
import PortalBanner from "../images/banner/portal.png";
import EnklaBanner from "../images/banner/enkla.png";

export default function Projects() {
  return (
    <section id="projects">
      <div className="projects__container">
        <Title>Projects</Title>
        <div className="projects__content">
          <Article
            name="Mala Basta"
            link="https://malabasta.com"
            url="https://malabasta.com"
            stack={["React", "TypeScript", "Tailwind", "Github"]}
            banner={MalaBastaBanner}
          />
          <Article
            name="Dixie Bot"
            link="https://dixiebot.com"
            url="https://dixiebot.com"
            stack={[
              "React",
              "Sass",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Redis",
              "Discord API",
              "Jest",
              "Github",
            ]}
            banner={DixieBotBanner}
          />
          <Article
            name="Clickpulse"
            link="https://clickpulse.xyz"
            url="https://clickpulse.xyz"
            stack={[
              "React",
              "TypeScript",
              "Tailwind",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Github",
            ]}
            banner={ClickpulseBanner}
          />
          <Article
            name="Steelpro"
            link="Expired"
            url={null}
            stack={["React", "JavaScript", "Sass", "Bootstrap", "Github"]}
            banner={SteelproBanner}
          />
          <Article
            name="Linker"
            link="Expired"
            url={null}
            stack={[
              "React",
              "JavaScript",
              "Sass",
              "Bootstrap",
              "Github",
              "Node.js",
              "Express.js",
              "MongoDB",
            ]}
            banner={LinkerAppBanner}
          />
          <Article
            name="Portal"
            link="Expired"
            url={null}
            stack={["PHP", "JavaScript", "Github", "Apache", "MySQL"]}
            banner={PortalBanner}
          />
          <Article
            name="Enkla Social Media"
            link="Github"
            url={"https://github.com/Xiliris/social-netowrk"}
            stack={[
              "React",
              "JavaScript",
              "Sass",
              "Node.js",
              "Express.js",
              "Redis",
              "MongoDB",
              "Github",
            ]}
            banner={EnklaBanner}
          />
        </div>
      </div>
    </section>
  );
}

function Article({ name, link, url, stack, banner }) {
  return (
    <article>
      <motion.img
        src={banner}
        alt={name}
        variants={opacityAnimation}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
      />
      <div>
        <motion.h3
          variants={textAnimation2}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
        >
          {name}
        </motion.h3>
        <motion.a
          href={url}
          target="_blank"
          rel="noreferrer"
          variants={textAnimation2}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
        >
          {link}
        </motion.a>

        <ul>
          {stack.map((item, index) => (
            <motion.li
              key={index}
              variants={itemAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.5 }}
              custom={{ index: index, time: 0.1 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </article>
  );
}

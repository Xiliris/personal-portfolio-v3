import { motion } from "framer-motion";
import Title from "../components/Title";
import "./Footer.scss";
import {
  itemAnimation,
  valueAnimation,
  titleAnimation,
} from "../animations/footerAnimation";

export default function Footer() {
  return (
    <section id="footer">
      <div className="footer__outer">
        <Title>Get in touch</Title>
        <div className="footer__content">
          <div className="footer__socials">
            <div>
              {fistSocials.map((social, index) => (
                <Anchor
                  link={social.link}
                  label={social.label}
                  index={index}
                  key={index + 3}
                />
              ))}
            </div>

            <div>
              {secondSocials.map((social, index) => (
                <Anchor
                  link={social.link}
                  label={social.label}
                  index={index}
                  key={index + 3}
                />
              ))}
            </div>
          </div>

          <div className="footer__contacts">
            <div>
              <motion.h4
                variants={titleAnimation}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                className="phone"
              >
                Phone
              </motion.h4>
              <motion.p
                variants={valueAnimation}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
              >
                +387 60 340 17 83
              </motion.p>
            </div>
            <div>
              <motion.h4
                variants={titleAnimation}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                className="phone"
              >
                Email
              </motion.h4>
              <motion.p
                variants={valueAnimation}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
              >
                adnanskopljakofficial@gmail.com
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      <div class="wave3">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
}

function Anchor({ link, label, index, key }) {
  return (
    <motion.a
      variants={itemAnimation}
      initial="initial"
      whileInView="animate"
      custom={{ index: index, time: 0.2 }}
      viewport={{ once: true, amount: 0.5 }}
      key={key}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      <span class="material-symbols-outlined">send</span>
      {label}
    </motion.a>
  );
}

const fistSocials = [
  {
    link: "https://github.com/Xiliris",
    icon: "fa-brands fa-github fa-3x",
    label: "GitHub",
  },
  {
    link: "https://www.linkedin.com/in/adnan-skopljak-646994257/",
    icon: "fa-brands fa-linkedin-in fa-3x",
    label: "LinkedIn",
  },
  {
    link: "https://www.npmjs.com/~xiliris",
    icon: "fa-brands fa-npm fa-3x",
    label: "NPM",
  },
];

const secondSocials = [
  {
    link: "https://www.instagram.com/adnan.sko/",
    icon: "fa-brands fa-instagram fa-3x",
    label: "Instagram",
  },
  {
    link: "https://discordapp.com/users/400414917070422017",
    icon: "fa-brands fa-discord fa-3x",
    label: "Discord",
  },
  {
    link: "https://www.facebook.com/adnanskopljak04?locale=hr_HR",
    icon: "fa-solid fa-envelope fa-3x",
    label: "Facebook",
  },
];

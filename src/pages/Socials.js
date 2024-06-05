import { motion } from "framer-motion";
import "./Socials.scss";
import { itemAnimation } from "../animations/itemAnimations";

function Socials() {
  return (
    <div id="socials">
      <section>
        {socialsArray.map(({ index, link, icon, label }) => (
          <motion.a
            key={label}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            variants={itemAnimation}
            initial="initial"
            whileInView="animate"
            custom={{ index: index, time: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <i className={icon}></i>
          </motion.a>
        ))}
      </section>
    </div>
  );
}

const socialsArray = [
  {
    index: 1,
    link: "https://github.com/Xiliris",
    icon: "fa-brands fa-github fa-3x",
    label: "GitHub Profile",
  },
  {
    index: 2,
    link: "https://www.instagram.com/adnan.sko/",
    icon: "fa-brands fa-instagram fa-3x",
    label: "Instagram Profile",
  },
  {
    index: 3,
    link: "https://discordapp.com/users/400414917070422017",
    icon: "fa-brands fa-discord fa-3x",
    label: "Discord Profile",
  },
  {
    index: 4,
    link: "https://www.linkedin.com/in/adnan-skopljak-646994257/",
    icon: "fa-brands fa-linkedin-in fa-3x",
    label: "LinkedIn Profile",
  },
  {
    index: 5,
    link: "mailto: adnanskopljakofficial@gmail.com",
    icon: "fa-solid fa-envelope fa-3x",
    label: "Send Email",
  },
  {
    index: 6,
    link: "https://www.npmjs.com/~xiliris",
    icon: "fa-brands fa-npm fa-3x",
    label: "Node Package Manager Profile",
  },
];

export default Socials;

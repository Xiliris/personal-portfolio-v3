import "./Sidebar.scss";
import { motion } from "framer-motion";
import { itemAnimation } from "../animations/item";

export default function Sidebar() {
  return (
    <aside>
      <div>
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
            custom={{ index: index, time: 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <i className={icon}></i>
          </motion.a>
        ))}
      </div>
    </aside>
  );
}

const socialsArray = [
  {
    index: 6,
    link: "https://github.com/Xiliris",
    icon: "fa-brands fa-github",
    label: "GitHub Profile",
  },
  {
    index: 5,
    link: "https://www.instagram.com/adnan.sko/",
    icon: "fa-brands fa-instagram",
    label: "Instagram Profile",
  },
  {
    index: 4,
    link: "https://discordapp.com/users/400414917070422017",
    icon: "fa-brands fa-discord",
    label: "Discord Profile",
  },
  {
    index: 3,
    link: "https://www.linkedin.com/in/adnan-skopljak-646994257/",
    icon: "fa-brands fa-linkedin-in",
    label: "LinkedIn Profile",
  },
  {
    index: 2,
    link: "mailto: adnanskopljakofficial@gmail.com",
    icon: "fa-solid fa-envelope",
    label: "Send Email",
  },
  {
    index: 1,
    link: "https://www.npmjs.com/~xiliris",
    icon: "fa-brands fa-npm",
    label: "Node Package Manager Profile",
  },
];

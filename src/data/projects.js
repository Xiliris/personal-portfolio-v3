// src/data/projects.js
import MalaBastaBanner from "../images/banner/malabasta.png";
import DixieBotBanner from "../images/banner/dixiebot.png";
import ClickpulseBanner from "../images/banner/clickpulse.png";
import SteelproBanner from "../images/banner/steelpro.png";
import LinkerAppBanner from "../images/banner/linkerapp.png";
import EnklaBanner from "../images/banner/enkla.png";

const projects = [
  {
    name: "Mala Basta",
    link: "https://malabasta.com",
    url: "https://malabasta.com",
    description:
      "Mala Basta is a restaurant in Sarajevo, and its website was developed using React, TypeScript, and Tailwind CSS. The site features a modern, responsive design that highlights the restaurant’s unique offerings and atmosphere. With a focus on user experience and sleek design, the website provides an engaging and intuitive platform for both new and returning customers.",
    stack: ["React", "TypeScript", "Tailwind", "Github"],
    banner: MalaBastaBanner,
  },
  {
    name: "Dixie Bot",
    link: "https://dixiebot.com",
    url: "https://dixiebot.com",
    description:
      "Dixie Bot is a Discord bot featuring a comprehensive website dashboard for management and configuration. The project is built using React, SCSS, Node.js, and MongoDB, combining a user-friendly interface with powerful backend functionality. It allows for seamless interaction and control within Discord, supported by an intuitive web-based interface.",
    stack: ["React", "Sass", "Node.js", "Express.js", "MongoDB", "Redis", "Discord API", "Jest", "Github"],
    banner: DixieBotBanner,
  },
  {
    name: "Clickpulse",
    link: "https://clickpulse.xyz",
    url: "https://clickpulse.xyz",
    description:
      "ClickPulse is a web application built using React, TypeScript, and Tailwind CSS. It features a dynamic and user-friendly interface, supported by a robust backend that leverages both MongoDB and MySQL. The platform is designed to handle complex data efficiently while delivering a seamless user experience.",
    stack: ["React", "TypeScript", "Tailwind", "Node.js", "Express.js", "MariaDB", "Github"],
    banner: ClickpulseBanner,
  },
  {
    name: "Steelpro",
    link: "Github",
    url: "https://github.com/Xiliris?tab=repositories",
    description:
      "Steelpro was a web application developed using React, JavaScript, Sass, and Bootstrap. The project featured a responsive design, providing a platform for managing and tracking various tasks and projects. The app combined frontend technologies with a simple and intuitive user experience.",
    stack: ["React", "JavaScript", "Sass", "Bootstrap", "Github"],
    banner: SteelproBanner,
  },
  {
    name: "Linker",
    link: "Github",
    url: "https://github.com/Xiliris?tab=repositories",
    description:
      "Linker is a web application developed using Bootstrap, SCSS, React, Node.js, and MongoDB. It features a responsive design with a sleek interface, providing a robust platform for managing and linking various types of content. The app combines modern frontend technologies with a powerful backend to deliver an efficient and user-friendly experience.",
    stack: ["React", "JavaScript", "Sass", "Bootstrap", "Github", "Node.js", "Express.js", "MongoDB"],
    banner: LinkerAppBanner,
  },
  {
    name: "Enkla Social Media",
    link: "Github",
    url: "https://github.com/Xiliris?tab=repositories",
    description:
      "Enkla Social Media is a full-stack social media platform developed using React, Node.js, Express.js, Redis, and MongoDB. The project features a modern and responsive design, providing users with a seamless experience for sharing and connecting with others. With a focus on performance and functionality, the platform offers a range of features to enhance user engagement and interaction.",
    stack: ["React", "JavaScript", "Sass", "Node.js", "Express.js", "Redis", "MongoDB", "Github"],
    banner: EnklaBanner,
  },
];

export default projects;

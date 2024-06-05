import { motion } from "framer-motion";
import "./Projects.scss";
import Title from "../components/Title";
import { itemAnimation } from "../animations/itemAnimations";

function Projects() {
  return (
    <div id="projects">
      <main>
        <Title>PROJECTS</Title>
        <section>
          <ProjectsItem
            title={"Linker Application"}
            description={
              "Worked on a team project for ITAcademy, a full-stack application that connects students with companies for internships. The application is built with React, Node.js, Express, and MongoDB. Aplication was designed by a team of 10 UX/UI designers. And developed by a team of 4 developers. I was responsible for the front-end and back-end part of the application, as well as team coordination and project deployment."
            }
            liveDemoUrl={"https://development--ita-linker.netlify.app/"}
            frontEndSourceCodeUrl={
              "https://github.com/sisicfaris-ita/ita-praksa-frontend"
            }
            backEndSourceCodeUrl={
              "https://github.com/Xiliris/ita-linker-backend"
            }
            index={1}
          />
          <ProjectsItem
            title={"Obrt STEELPRO Website"}
            description={
              "Worked as a solo developer on a website for a local company. The website is built with React and sytled with SCSS. The website is designed to be responsive. I was responsible for design, development, and deployment of the website. "
            }
            liveDemoUrl={"https://splendid-rugelach-d85922.netlify.app/"}
            frontEndSourceCodeUrl={"https://github.com/Xiliris/steelpro"}
            index={1}
          />
          <ProjectsItem
            title={"Personal Portfolio Website (Current Version)"}
            description={
              "Worked on a personal portfolio website. Website was built with React, styled with SCSS and animated with Framer-motion. Also, the website is designed to be responsive and SEO friendly."
            }
            liveDemoUrl={"https://adnanskopljak.com"}
            frontEndSourceCodeUrl={
              "https://github.com/Xiliris/personal-portfolio-v2"
            }
            index={1}
          />
          <ProjectsItem
            title={"Personal Portfolio Website (Old Version)"}
            description={
              "Worked on a personal portfolio website. Website was experiment with new design and technologies. It was replaced with a new version very quickly."
            }
            liveDemoUrl={"https://mellifluous-frangipane-cdea2c.netlify.app"}
            frontEndSourceCodeUrl={
              "https://github.com/Xiliris/personal-portfolio"
            }
            index={1}
          />
          <ProjectsItem
            title={"DIXIE Discord Chat Bot (Ongoing Project)"}
            description={
              "I am currently working on a Discord chat bot project in collaboration with a talented team of designers and developers. The chat bot is built with React, SASS, Bootstrap, Node.js, Express, MongoDB, Redis and Discord.js. I am responsible for project management, team lead, front-end and back-end development."
            }
            index={1}
          />
        </section>
      </main>
    </div>
  );
}

function ProjectsItem({
  title,
  description,
  liveDemoUrl,
  frontEndSourceCodeUrl,
  backEndSourceCodeUrl,
  chatBotSourceCodeUrl,
  index,
}) {
  return (
    <motion.article
      variants={itemAnimation}
      initial="initial"
      whileInView="animate"
      custom={{ index: index, time: 0.2 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        {liveDemoUrl ? (
          <>
            <h3>Preview</h3>
            <a
              rel="noopener noreferrer"
              target="_blank"
              label="Linker live demo url"
              href={liveDemoUrl}
            >
              Live Demo
              <span className="material-symbols-outlined">chevron_right</span>
            </a>
          </>
        ) : null}
        {frontEndSourceCodeUrl ? (
          <a
            rel="noopener noreferrer"
            target="_blank"
            label="Linker source code url"
            href={frontEndSourceCodeUrl}
          >
            Front-end Source Code
            <span className="material-symbols-outlined">chevron_right</span>
          </a>
        ) : null}
        {backEndSourceCodeUrl ? (
          <a
            rel="noopener noreferrer"
            target="_blank"
            label="Linker source code url"
            href={backEndSourceCodeUrl}
          >
            Back-end Source Code
            <span className="material-symbols-outlined">chevron_right</span>
          </a>
        ) : null}
        {chatBotSourceCodeUrl ? (
          <a
            rel="noopener noreferrer"
            target="_blank"
            label="Linker source code url"
            href={chatBotSourceCodeUrl}
          >
            Chat-bot Source Code
            <span className="material-symbols-outlined">chevron_right</span>
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}

export default Projects;

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Title from "../../components/Title";
import skills from "../../data/skills";
import "./Skills.scss";
import { animationVariants, itemVariants, swipeAnimation } from "../../animations/skillsAnimation";

export default function Skills() {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [direction, setDirection] = useState("forward");

  const changeSkill = useCallback((isNext = true) => {
    setCurrentSkillIndex((prevIndex) => {
      const nextIndex = isNext ? prevIndex + 1 : prevIndex - 1;
      const resetIndex = isNext ? 0 : skills.length - 1;
      return nextIndex < 0 || nextIndex >= skills.length ? resetIndex : nextIndex;
    });
    setDirection(isNext ? "forward" : "backward");
  }, []);

  if (!skills.length) return null;

  return (
    <section id="skills">
      <div>
        <Title>Skills</Title>
        <div className="skills__content">
          <AnimatePresence mode="wait">
            <Article
              key={skills[currentSkillIndex]?.name}
              name={skills[currentSkillIndex]?.name}
              icon={skills[currentSkillIndex]?.icon}
              description={skills[currentSkillIndex]?.description}
              direction={direction}
              onSwipe={(isNext) => {
                changeSkill(isNext);
              }}
            />
          </AnimatePresence>
          <div className="skills__overview">
            <span className="material-symbols-outlined" onClick={() => changeSkill(false)} aria-label="Previous Skill">
              arrow_left
            </span>
            {skills.map((skill, index) => (
              <i
                key={index}
                className={index === currentSkillIndex ? "active" : ""}
                onClick={() => setCurrentSkillIndex(index)}
              ></i>
            ))}
            <span className="material-symbols-outlined" onClick={() => changeSkill(true)} aria-label="Next Skill">
              arrow_right
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Article({ name, description, icon, direction, onSwipe }) {
  const [swipeDirection, setSwipeDirection] = useState(direction);

  const variants = animationVariants[swipeDirection === "forward" ? "next" : "prev"];
  const swipeVariant = swipeAnimation[swipeDirection === "forward" ? "next" : "prev"];

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -1) {
      setSwipeDirection("forward");
      onSwipe(true);
    } else if (info.offset.x > 1) {
      setSwipeDirection("backward");
      onSwipe(false);
    }
  };

  return (
    <motion.div
      className="article-container"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.1}
      onDragEnd={handleDragEnd}
    >
      <motion.article>
        <div>
          <motion.h3
            id={name}
            variants={swipeVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.i variants={itemVariants} initial="initial" animate="animate" className={`${icon}`}></motion.i>
            {name}
          </motion.h3>
          <motion.p
            variants={swipeVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            dangerouslySetInnerHTML={{ __html: description }}
          ></motion.p>
        </div>
      </motion.article>
    </motion.div>
  );
}

const titleAnimation = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 1, type: "spring" } },
  exit: { opacity: 0, y: 30, transition: { duration: 1, type: "spring" } },
};

const swipeAnimation = {
  initial: {
    opacity: 0,
    x: 100,
  },

  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
  exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },
};

export { titleAnimation, swipeAnimation };

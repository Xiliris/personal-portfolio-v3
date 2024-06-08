const yearAnimation = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 1, type: "spring" } },
  exit: { opacity: 0, y: 30, transition: { duration: 1, type: "spring" } },
};

const titleAnimation = {
  initial: {
    width: 0,
  },
  animate: {
    width: "100%",
    y: 0,
    transition: { duration: 1, type: "spring" },
  },
};

export { yearAnimation, titleAnimation };

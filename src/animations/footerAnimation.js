const itemAnimation = {
  initial: {
    x: -10,
    opacity: 0,
  },

  animate: ({ index, time }) => ({
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.5,
      delay: time * index,
    },
  }),
};

const valueAnimation = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 1, type: "spring" } },
  exit: { opacity: 0, y: 30, transition: { duration: 1, type: "spring" } },
};

const titleAnimation = {
  initial: {
    x: 30,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, type: "spring" },
  },
};

export { itemAnimation, valueAnimation, titleAnimation };

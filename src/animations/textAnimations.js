const titleAnimation = {
  initial: {
    opacity: 0,
  },

  animate: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1,
    },
  },
};

const pAnimation = {
  initial: {
    width: 0,
  },

  animate: {
    width: "100%",
    transition: {
      type: "tween",
      duration: 1,
      delay: 1,
    },
  },
};

module.exports = {
  titleAnimation,
  pAnimation,
};

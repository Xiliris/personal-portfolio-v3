const textAnimation = {
  initial: {
    overflow: "hidden",
    lineHeight: "0%",
    opacity: 0,
    y: 100,
  },

  animate: {
    lineHeight: "100%",
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};

module.exports = {
  textAnimation,
};

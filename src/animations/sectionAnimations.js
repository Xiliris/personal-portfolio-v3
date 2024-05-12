const sectionAnimation = {
  initial: {
    opacity: 0,
    y: 50,
  },

  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 1,
    },
  },
};

module.exports = {
  sectionAnimation,
};

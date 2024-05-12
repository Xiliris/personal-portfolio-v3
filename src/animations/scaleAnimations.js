const scaleAnimation = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },

  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

module.exports = {
  scaleAnimation,
};

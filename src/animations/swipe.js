const swipeAnimation = {
  initial: {
    opacity: 0,
    x: -100,
  },

  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};

module.exports = {
  swipeAnimation,
};

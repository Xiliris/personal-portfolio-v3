const swipeAnimation = {
  initial: {
    opacity: 0,
    x: -50,
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

const opacityAnimation = {
  initial: {
    opacity: 0,
    y: 50,
  },

  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};

const onlyOpacityAnimation = {
  initial: {
    opacity: 0,
  },

  animate: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};

module.exports = {
  opacityAnimation,
  onlyOpacityAnimation,
};

const itemAnimation = {
  initial: {
    x: -10,
    opacity: 0,
  },

  animate: ({ index, time }) => ({
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.3,
      delay: time * index,
    },
  }),
};

module.exports = {
  itemAnimation,
};

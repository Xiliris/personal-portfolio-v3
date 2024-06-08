const animationVariants = {
  next: {
    initial: { opacity: 0, x: 100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, type: "spring" },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: { duration: 0.3, type: "spring" },
    },
  },
  prev: {
    initial: { opacity: 0, x: -100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, type: "spring" },
    },
    exit: { opacity: 0, x: 100, transition: { duration: 0.3, type: "spring" } },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: -20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: 0.5, type: "spring" },
  },
  exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },
};

const swipeAnimation = {
  next: {
    initial: {
      opacity: 0,
      x: 100,
    },

    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 0.5,
        delay: 0.1,
      },
    },
    exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },
  },
  prev: {
    initial: {
      opacity: 0,
      x: -100,
    },

    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 0.5,
        delay: 0.1,
      },
    },
    exit: { opacity: 0, y: 50, transition: { duration: 0.3 } },
  },
};

export { animationVariants, itemVariants, swipeAnimation };

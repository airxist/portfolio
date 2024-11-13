export const mobile_nav_variant = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeIn",
      duration: 0.25,
      when: "beforeChildren",
    },
  },
  hide: {
    opacity: 0,
    y: -2000,
    transition: {
      ease: "easeIn",
      // duration: 1,
      // when: "afterChildren",
    },
  },
  exit: {
    y: -200,
    opacity: 0,
    transition: {
      duration: 0.25,
      when: "afterChildren",
    },
  },
};

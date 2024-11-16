export const section_container = {
  show: {
    opacity: 1,
    x: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.3,
    },
  },
  hide: {
    x: 200,
    opacity: 0,
  },
  exit: {
    x: -200,
    opacity: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren",
      staggerChildren: 0.2,
    },
  },
};

export const title_variant = {
  hide: { x: 200, opacity: 0 },
  show: { x: 0, opacity: 1 },
  // show: { x: 0, opacity: 1, transition: { duration: 1 } },
  exit: { opacity: 0, x: -200 },
};

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

export const resumeBlockVariant = {
  // hide: { opacity: 0 },
  show: { transition: { duration: 0.57, staggerChildren: 0.55 } },
  // exit: {},
};

export const resumDescVarent = {
  hide: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

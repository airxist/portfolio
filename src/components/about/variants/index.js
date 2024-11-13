export const about_container = {
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
    transition: {
      duration: 0.25,
    },
  },
};

export const title_variant = {
  hide: { y: 200, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 1 } },
  exit: { opacity: 0, x: -20 },
};

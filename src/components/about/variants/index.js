export const about_container = {
  show: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.2 },
  },
  hide: { opacity: 0 },
};

export const title_variant = {
  hide: { y: 200, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 1 } },
};
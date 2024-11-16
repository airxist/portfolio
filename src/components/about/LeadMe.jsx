import React, { useState } from "react";
import Btn from "../common/Btn";
import { motion } from "framer-motion";

const btn_variants = {
  hide: {
    opacity: 0,
    scale: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", duration: 1 },
  },
  exit: {
    opacity: 0,
    scale: 0,
  },
};

const container_variant = {
  hide: { x: 200, opacity: 0, transition: { when: "afterChildren" } },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, when: "beforeChildren", staggerChildren: 0.15 },
  },
  exit: {
    scale: 0,
    transition: { when: "afterChildren", staggerChildren: 0.15 },
  },
};

const LeadMe = () => {
  return (
    <motion.div
      initial="hide"
      animate="show"
      exit="exit"
      variants={container_variant}
      className="my-4 flex-apart md:gap-x-6"
      // onViewportLeave={() => setAnimating(false)}
    >
      <Btn
        href="/resume"
        text="Resume"
        styling="lead-btn bg-[var(--orange)]"
        variants={btn_variants}
      />

      <Btn
        href="/projects"
        text="Projects"
        variants={btn_variants}
        styling="lead-btn bg-[var(--soft-red)]"
      />

      <Btn
        href="/contact"
        text="Contact"
        variants={btn_variants}
        styling="lead-btn bg-blue-400"
      />
    </motion.div>
  );
};

export default LeadMe;

import React, { useState } from "react";
import Btn from "../common/Btn";
import { motion } from "framer-motion";

const btn_variants = {
  hide: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", duration: 1 },
  },
};

const container_variant = {
  hide: { x: 200, opacity: 0, transition: { when: "afterChildren" } },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 3, when: "beforeChildren", staggerChildren: 0.55 },
  },
};

const LeadMe = () => {
  const [isAnimating, setAnimating] = useState(false);
  return (
    <motion.div
      initial="hide"
      animate={isAnimating ? "show" : "hide"}
      variants={container_variant}
      className="mt-6 flex-apart md:gap-x-6"
      onViewportEnter={() => setAnimating(true)}
      onViewportLeave={() => setAnimating(false)}
    >
      <Btn
        text="Resume"
        styling="lead-btn bg-orange-600"
        variants={btn_variants}
      />
      <Btn
        text="Projects"
        variants={btn_variants}
        styling="lead-btn bg-red-600"
      />
      <Btn
        text="Contact"
        variants={btn_variants}
        styling="lead-btn bg-blue-400"
      />
    </motion.div>
  );
};

export default LeadMe;

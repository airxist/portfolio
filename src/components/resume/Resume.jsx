import React from "react";
import ResumeBlock from "./ResumeBlock";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
      exit={{ x: 200}}
    >
      <h2 className="text-[27px] md:text-[42px] font-bold">Resume</h2>

      <ResumeBlock label="Work Experience" />
      <ResumeBlock label="Education" />
      <ResumeBlock label="Skills & Expertise" />
    </motion.div>
  );
};

export default Resume;

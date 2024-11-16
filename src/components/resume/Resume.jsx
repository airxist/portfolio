import React from "react";
import ResumeBlock from "./ResumeBlock";
import { motion } from "framer-motion";
import {
  education,
  skillsAndExpertise,
  workExperiences,
} from "../../constants";
import { section_container, title_variant } from "../../constants/variants";

const Resume = () => {
  return (
    <motion.div
      variants={section_container}
      initial="hide"
      animate="show"
      exit="exit"
      className="pb-10 normal-pad lg:py-32 lg:px-[7.5rem]"
    >
      <motion.h2
        variants={title_variant}
        className="text-[27px] md:text-[42px] font-work_sans_sm text-title"
      >
        Resume
      </motion.h2>

      <motion.div className="divide-y">
        <ResumeBlock
          label="Work Experience"
          resumeBlockData={workExperiences}
        />

        <ResumeBlock label="Education" resumeBlockData={education} />

        <ResumeBlock
          label="Skills & Expertise"
          resumeBlockData={skillsAndExpertise.slice(0, 5)}
          type="sentence"
        />
      </motion.div>
    </motion.div>
  );
};

export default Resume;

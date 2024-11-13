import React from "react";
import ResumeBlock from "./ResumeBlock";
import { motion } from "framer-motion";
import {
  education,
  skillsAndExpertise,
  workExperiences,
} from "../../constants";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.34 }}
      exit={{ x: "-100%" }}
      className="pb-10 normal-pad lg:py-32 lg:px-[7.5rem]"
    >
      <h2 className="text-[27px] md:text-[42px] font-work_sans_sm">
        Resume
      </h2>

      <div className="divide-y">
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
      </div>
    </motion.div>
  );
};

export default Resume;

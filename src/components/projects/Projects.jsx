import React from "react";
import Project from "./Project";
import { mockProjects } from "../../constants";
import { motion } from "framer-motion";
import { section_container, title_variant } from "../../constants/variants";

const Projects = () => {
  return (
    <motion.div
      initial="hide"
      animate="show"
      exit="exit"
      variants={section_container}
      className="pb-10 normal-pad lg:py-32 lg:px-[7.5rem]"
    >
      <motion.h2
        variants={title_variant}
        className="text-[27px] md:text-[42px] font-work_sans_sm"
      >
        Projects
      </motion.h2>

      <div>
        {mockProjects.map((project) => (
          <Project {...project} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;

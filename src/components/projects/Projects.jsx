import React from "react";
import Project from "./Project";

const Projects = () => {
  return (
    <div className="normal-pad">
      <h2 className="text-[27px] md:text-[42px] font-work_sans_sm">Projects</h2>

      <div>
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
};

export default Projects;

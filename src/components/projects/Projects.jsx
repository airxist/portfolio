import React from "react";
import Project from "./Project";
import { mockProjects } from "../../constants";

const Projects = () => {
  return (
    <div className="pb-10 normal-pad lg:py-32 lg:px-[7.5rem]">
      <h2 className="text-[27px] md:text-[42px] font-work_sans_sm">Projects</h2>

      <div>
        {mockProjects.map(project => <Project {...project}  />)}
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import HeadDesc from "../common/HeadDesc";
import IconWrapper from "../common/IconWrapper";

const Project = ({
  project_title = "Project Title",
  desc = "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
  imageUrl = "/project.jpg",
}) => {
  return (
    <div className="items-start justify-center md:flex gap-x-6">
      <HeadDesc
        containerStyle="flex-1"
        title={project_title}
        titleStyle="text-[22px] md:text-[26px] font-work_sans_sm"
        desc={desc}
        descStyle="font-avenir font-thin"
      />

      <IconWrapper
        containerStyle="w-full h-[189px] md:h-[331px] border mt-6 flex-1"
        imageUrl={imageUrl}
      />
    </div>
  );
};

export default Project;

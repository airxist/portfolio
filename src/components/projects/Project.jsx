import React from "react";
import HeadDesc from "../common/HeadDesc";
import IconWrapper from "../common/IconWrapper";

const Project = ({
  projectTitle,
  projectDescription,
  imageUrl,
}) => {
  return (
    <div className="items-start justify-center mt-8 md:mt-20 md:flex gap-x-6">
      <HeadDesc
        containerStyle="flex-1"
        title={projectTitle}
        titleStyle="text-xl md:text-2xl font-work_sans_sm"
        desc={projectDescription}
        descStyle="font-avenir mt-2"
      />

      <IconWrapper
        containerStyle="w-full h-[189px] md:h-[331px] border mt-6 md:mt-0 flex-1"
        imageUrl={imageUrl}
      />
    </div>
  );
};

export default Project;

import React from "react";
import HeadDesc from "../common/HeadDesc";
import IconWrapper from "../common/IconWrapper";
import { title_variant } from "../../constants/variants";
import { icons } from "../../constants";

const Project = ({ projectTitle, projectDescription, imageUrl, techStack }) => {
  return (
    <div className="items-start justify-center mt-8 md:mt-20 md:flex gap-x-6">
      <HeadDesc
        containerStyle="flex-1"
        title={projectTitle}
        titleStyle="text-xl md:text-2xl font-work_sans_sm"
        desc={projectDescription}
        descStyle="font-avenir mt-2"
        variants={title_variant}
      />

      <div className="relative">
        <IconWrapper
          containerStyle="w-full h-[189px] md:h-[331px] border mt-6 md:mt-0 flex-1"
          imageUrl={imageUrl}
        />
        
        <div className="absolute bottom-2 left-2">
          {techStack.map((stack, stackIndex) => {
            return (
              <IconWrapper
                imageUrl={icons[`${stack}`]}
                containerStyle="size-10 bg-white/50 backdrop-blur-sm border-2 border-background hover:z-50 hover:bg-background rounded-full absolute bottom-0 p-2"
                imageStyle="size-full object-contain object-center"
                iconStyle={{
                  marginLeft: `${stackIndex * 25}px`
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;

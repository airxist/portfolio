import React from "react";
import HeadDesc from "../common/HeadDesc";

const ResumeDescription = ({ start, end, title, desc }) => {
  return (
    <div className="items-start mt-8 md:mt-0 md:flex gap-x-4">
      <div className="flex-1 text-nowrap">
        <span>{start}</span> - <span>{end}</span>
      </div>
      
      <HeadDesc title={title} titleStyle="font-medium text-[18px]" desc={desc} descStyle="mt-3" />
    </div>
  );
};

export default ResumeDescription;

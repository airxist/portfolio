import React from "react";
import HeadDesc from "../common/HeadDesc";

const ResumeDescription = ({
  startDate,
  endDate,
  title,
  description,
  degreeName,
  establishment,
}) => {
  return (
    <div className="items-start mb-8 md:flex gap-x-4">
      <div className="flex-1 text-nowrap font-avenir">
        <span>{startDate}</span> - <span>{endDate}</span>
      </div>

      <HeadDesc
        title={title || `${establishment} | ${degreeName}`}
        titleStyle="font-work_sans_sm text-lg"
        desc={description}
        descStyle="font-avenir mt-2 line-clamp-5"
      />
    </div>
  );
};

export default ResumeDescription;

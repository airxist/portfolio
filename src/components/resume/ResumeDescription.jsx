import React from "react";
import HeadDesc from "../common/HeadDesc";
import { motion } from "framer-motion";
import { resumDescVarent } from "../../constants/variants";

const ResumeDescription = ({
  startDate,
  endDate,
  title,
  description,
  degreeName,
  establishment,
}) => {
  return (
    <motion.div
      variants={resumDescVarent}
      className="items-start mb-8 md:flex gap-x-4"
    >
      <div className="flex-1 text-nowrap font-avenir text-title">
        <span>{startDate}</span> - <span>{endDate}</span>
      </div>

      <HeadDesc
        title={title || `${establishment} | ${degreeName}`}
        titleStyle="font-work_sans_sm text-lg"
        desc={description}
        descStyle="font-avenir mt-2 line-clamp-5"
      />
    </motion.div>
  );
};

export default ResumeDescription;

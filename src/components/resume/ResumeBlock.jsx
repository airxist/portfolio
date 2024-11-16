import React from "react";
import ResumeDescription from "./ResumeDescription";
import { motion } from "framer-motion";
import { resumeBlockVariant, title_variant } from "../../constants/variants";

const ResumeBlock = ({ label, resumeBlockData = [], type }) => {
  return (
    <motion.div
      variants={resumeBlockVariant}
      className="items-start pt-8 md:flex"
    >
      <motion.h2
        variants={title_variant}
        className="flex-1 mb-8 text-xl md:text-2xl font-work_sans_sm text-title"
      >
        {label}
      </motion.h2>

      <motion.div className="flex-1 ">
        {resumeBlockData.length === 0 ? (
          <>no data currently</>
        ) : (
          <>
            {type === "sentence" ? (
              <ul className="px-8 list-disc">
                {resumeBlockData.map((item) => (
                  <li key={item} className="mb-1 font-avenir">
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <>
                {resumeBlockData.map((resume) => {
                  return <ResumeDescription {...resume} />;
                })}
              </>
            )}
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ResumeBlock;

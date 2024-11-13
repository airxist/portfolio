import React from "react";
import ResumeDescription from "./ResumeDescription";

const ResumeBlock = ({ label, resumeBlockData = [], type }) => {
  return (
    <div className="items-start pt-8 md:flex">
      <p className="flex-1 mb-8 text-xl md:text-2xl font-work_sans_sm">
        {label}
      </p>

      <div className="flex-1 ">
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
      </div>
    </div>
  );
};

export default ResumeBlock;

import React from "react";
import ResumeDescription from "./ResumeDescription";

const ResumeBlock = ({
  label,
  resumeBlockData = [
    {
      start: "2035",
      end: "Present",
      title: "Editor",
      desc: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
    },
    {
      start: "2035",
      end: "Present",
      title: "Editor",
      desc: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
    },
  ],
}) => {
  return (
    <div className="items-start py-10 border border-b md:flex">
      <p className="flex-1 text-2xl font-medium border">{label}</p>

      <div className="flex-1 border">
        {resumeBlockData.length === 0 ? (
          <>no data currently</>
        ) : (
          <>
            {resumeBlockData.map((resume) => {
              return <ResumeDescription {...resume} />;
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default ResumeBlock;

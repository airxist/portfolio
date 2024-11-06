import React from "react";

const HeadDesc = ({ title, titleStyle, desc, descStyle, containerStyle }) => {
  return (
    <div className={containerStyle}>
      <h2 className={titleStyle}>{title}</h2>
      <p className={descStyle}>{desc}</p>
    </div>
  );
};

export default HeadDesc;

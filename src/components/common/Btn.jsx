import React from "react";

const Btn = ({ styling, text, icon: Icon }) => {
  return (
    <button className={styling}>
      {Icon && Icon }
      {text && text}
    </button>
  );
};

export default Btn;

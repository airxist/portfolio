import React from "react";
import { motion } from "framer-motion";

const HeadDesc = ({
  title,
  titleStyle,
  desc,
  descStyle,
  containerStyle,
  ...props
}) => {
  return (
    <motion.div className={containerStyle} {...props}>
      <h2 className={`text-title ${titleStyle}`}>{title}</h2>
      <p className={`text-secondary_text ${descStyle}`}>{desc}</p>
    </motion.div>
  );
};

export default HeadDesc;

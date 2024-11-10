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
      <h2 className={titleStyle}>{title}</h2>
      <p className={descStyle}>{desc}</p>
    </motion.div>
  );
};

export default HeadDesc;

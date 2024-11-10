import React from "react";
import { motion } from "framer-motion";

const Btn = ({ styling, text, icon: Icon, variants, ...props }) => {
  return (
    <motion.button variants={variants} className={styling} {...props}>
      {Icon && Icon}
      {text && text}
    </motion.button>
  );
};

export default Btn;

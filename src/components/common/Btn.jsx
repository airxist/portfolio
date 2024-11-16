import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Btn = ({ styling, text, icon: Icon, variants, href, ...props }) => {
  if (href) {
    return (
      <motion.button variants={variants} className={styling} {...props}>
        <Link to={href} className="size-full flex-join">
          {Icon && Icon}
          {text && text}
        </Link>
      </motion.button>
    );
  }

  return (
    <motion.button variants={variants} className={styling} {...props}>
      {Icon && Icon}
      {text && text}
    </motion.button>
  );
};

export default Btn;

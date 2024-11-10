import React from "react";
import { motion } from "framer-motion";
import Btn from "../Btn";
import { FiX } from "react-icons/fi";

const CustomModal = ({ children, isModalOpen, closeModal, ...props }) => {
  return isModalOpen ? (
    <motion.div {...props}>
      <Btn icon={<FiX size={24} />} styling='absolute top-5 right-5' onClick={closeModal} />
      {children}
    </motion.div>
  ) : null;
};

export default CustomModal;

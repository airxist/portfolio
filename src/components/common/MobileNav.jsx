import React, { useState } from "react";
import CustomModal from "./_custom_ui/CustomModal";
import MenuIcon from "../../assets/icons/menu";
import Btn from "./Btn";
import { mobile_nav_variant } from "../../constants/variants";
import { AnimatePresence, motion } from "framer-motion";

const listItemVariant = {
  show: { y: 0, opacity: 1 },
  hide: { y: -20, opacity: 0 },
  exit: {y: 20, opacity: 0}
};

const MobileNav = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <nav>
      <Btn
        icon={<MenuIcon />}
        styling="md:hidden"
        onClick={() => setNavOpen((prev) => !prev)}
      />
      <AnimatePresence>
        {isNavOpen && (
          <CustomModal
            initial="hide"
            animate="show"
            exit="exit"
            variants={mobile_nav_variant}
            isModalOpen={isNavOpen}
            className="fixed top-0 left-0 z-50 w-full h-full bg-neutral-50 flex-join"
            closeModal={() => setNavOpen(false)}
          >
            <motion.ul
              variants={{
                hide: { x: 200 },
                show: {
                  x: 0,
                  transition: {
                    when: "beforeChildren",
                    staggerChildren: 0.04,
                    delayChildren: 0.34,
                  },
                },
                exit: {
                  opacity: 0,
                  transition: {
                    when: "afterChildren",
                    staggerChildren: 0.04,
                    delayChildren: 0.34,
                  },
                },
              }}
              className="text-[22px] font-avenir"
            >
              <motion.li variants={listItemVariant} className="h-14">
                Resume
              </motion.li>
              <motion.li variants={listItemVariant} className="h-14">
                Projects
              </motion.li>
              <motion.li variants={listItemVariant} className="h-14">
                Contact
              </motion.li>
            </motion.ul>
          </CustomModal>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNav;

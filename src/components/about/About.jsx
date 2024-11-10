import React from "react";
import HeadDesc from "../common/HeadDesc";
import LeadMe from "./LeadMe";
import IconWrapper from "../common/IconWrapper";
import { motion } from "framer-motion";
import { about_desc, about_title } from "../../constants";
import { about_container, title_variant } from "./variants";

const About = () => {
  return (
    <motion.div
      initial="hide"
      animate="show"
      // transition={{ duration: 3 }}
      // exit={{ x: 200, transition: { duration: 10 } }}
      variants={about_container}
      className="flex flex-col normal-pad md:flex-row md:items-center md:justify-center md:gap-x-8"
    >
      <div className="md:order-2">
        <motion.h1 variants={title_variant} className="text-[40px] md:text-[100px] font-bold font-work_sans_sm p-0 mt-4 md:mt-0">
          Hello
        </motion.h1>

        <HeadDesc
          containerStyle="w-full max-w-[371px] mt-4"
          title={about_title}
          titleStyle="capitalize font-semibold text-xl md:text-[22px] font-work_sans_sm"
          desc={about_desc}
          descStyle="mt-3"
          variants={title_variant}
        />

        <LeadMe />
      </div>

      <IconWrapper
        containerStyle="border-2 w-full max-w-[480px] rounded-full aspect-square mt-6 md:order-1 overflow-hidden"
        imageUrl="/placeholder.jpg"
      />
    </motion.div>
  );
};

export default About;

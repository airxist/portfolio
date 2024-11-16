import React from "react";
import HeadDesc from "../common/HeadDesc";
import LeadMe from "./LeadMe";
import IconWrapper from "../common/IconWrapper";
import { motion } from "framer-motion";
import { about_desc, about_title, welcomeText } from "../../constants";
import { section_container, title_variant } from "../../constants/variants";
import { TypewriterEffect } from "../_ui/typewriter-effect";

const About = () => {
  const words = [
    {
      text: "Hello",
      className: "text-[40px] md:text-[100px]",
    },
  ];

  return (
    <motion.div
      initial="hide"
      animate="show"
      exit="exit"
      variants={section_container}
      className="flex flex-col pb-10 md:pb-0 normal-pad md:flex-row md:items-center md:justify-center md:gap-x-8 h-[799px]"
    >
      <div className="w-full max-w-[450px] md:order-2">
        <TypewriterEffect
          variants={title_variant}
          words={words}
          className="p-0 mt-3 font-work_sans_sm md:mt-0 drop-shadow-2xl text-title text-start"
          cursorClassName="h-8 lg:h-20"
        />

        <HeadDesc
          containerStyle="w-full max-w-[371px]"
          title={about_title}
          titleStyle="capitalize text-xl md:text-[22px] font-work_sans_sm"
          desc={about_desc}
          descStyle="mt-1 font-avenir"
          variants={title_variant}
        />

        <LeadMe />
      </div>

      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <IconWrapper
          containerStyle="w-full md:w-[480px] rounded-full aspect-square md:order-1 overflow-hidden shadow-lg shadow-neutral-500"
          imageUrl="/placeholder.jpg"
        />
      </motion.div>
    </motion.div>
  );
};

export default About;

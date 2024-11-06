import React from "react";
import HeadDesc from "../common/HeadDesc";
import LeadMe from "./LeadMe";
import IconWrapper from "../common/IconWrapper";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
      exit={{x: 200, transition: {duration: 10}}}
      className="flex flex-col pt-3 pb-8 border normal-pad md:flex-row md:items-center md:justify-center md:gap-x-8"
    >
      <div className="md:order-2">
        <h1 className="text-[40px] md:text-[100px] font-bold">Hello</h1>

        <HeadDesc
          containerStyle="w-full max-w-[371px]"
          title="A bit about me"
          titleStyle="capitalize font-semibold text-xl md:text-[22px] font-work_sans_sm"
          desc="I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you."
        />

        <LeadMe />
      </div>

      <IconWrapper
        containerStyle="border-2 w-full max-w-[480px] rounded-full aspect-square mt-6 md:order-1 overflow-hidden"
        imageUrl="/profile.jpg"
      />
    </motion.div>
  );
};

export default About;

import React from "react";
import HeadDesc from "../HeadDesc";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="md:pt-10 md:pb-20 md:flex-apart normal-pad md:h-[183px]">
      <div className="flex flex-col justify-between flex-1 px-4 py-5 border-t md:items-center md:flex-row gap-y-5">
        <HeadDesc
          title="Phone"
          titleStyle="text-[17px] font-work_sans_sm"
          desc="123-456-7993"
          descStyle="font-avenir"
        />

        <HeadDesc
          title="Email"
          titleStyle="text-[17px] font-work_sans_sm"
          desc="info@mysite.com"
          descStyle="font-avenir"
        />

        <div>
          <HeadDesc
            title="Follow me"
            titleStyle="text-[17px] font-work_sans_sm"
          />
          <span className="flex items-center gap-2">
            <FaLinkedin />

            <FaTwitter />
          </span>
        </div>
        
        <div className="text-sm font-avenir">
          <p>© 2035 By Your Doris</p>
          <p>powered and secured by <span className="underline">Doris</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

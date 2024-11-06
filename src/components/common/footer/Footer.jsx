import React from "react";
import HeadDesc from "../HeadDesc";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="p-4 border md:pt-10 md:pb-20 md:flex-apart">
      <div className="flex flex-col justify-between flex-1 md:items-center md:flex-row gap-y-5">
        <HeadDesc
          title="Phone"
          titleStyle="font-medium text-[17px]"
          desc="123-456-7993"
        />
        <HeadDesc
          title="Email"
          titleStyle="font-medium text-[17px]"
          desc="info@mysite.com"
        />

        <div>
          <HeadDesc title="Follow me" titleStyle="font-medium text-[17px]" />
          <span className="flex items-center gap-2">
            <FaLinkedin />

            <FaTwitter />
          </span>
        </div>
        <div>
          <p>© 2035 By Your Name.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

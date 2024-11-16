import React from "react";
import HeadDesc from "../HeadDesc";
import { icons, socialLinks } from "../../../constants";

const Footer = () => {
  return (
    <footer className="md:pt-10 md:pb-20 md:flex-apart normal-pad md:h-[183px]">
      <div className="flex flex-col justify-between flex-1 px-4 py-5 border-t md:items-center md:flex-row gap-y-5">
        <div>
          <h2 className="text-[17px] font-work_sans_sm">Phone</h2>
          <a
            href="mailto:"
            className="text-sm font-bold text-medium font-avenir text-link"
          >
          0123456789
          </a>
        </div>

        <div>
          <h2 className="text-[17px] font-work_sans_sm">Email</h2>
          <a
            href="mailto:"
            className="text-sm font-bold text-medium font-avenir text-link"
          >
            exampleemail@gmail.com
          </a>
        </div>

        <div>
          <HeadDesc
            title="Follow me"
            titleStyle="text-[17px] font-work_sans_sm"
          />

          <div className="flex items-center gap-x-4">
            {/* {socialLinks.map((link) => {
              return (
                <a href={link.href}>
                  <img src={link.icon} alt={link.href} className="size-5" />
                </a>
              );
            })} */}
          </div>
        </div>

        <div className="text-sm font-avenir">
          <p>© 2035 By Your Doris</p>
          <p>
            powered and secured by <span className="underline">Doris</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

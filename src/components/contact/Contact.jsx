import React from "react";
import HeadDesc from "../common/HeadDesc";

const Contact = () => {
  return (
    <div className="normal-pad">
      <HeadDesc
        title="Contact"
        titleStyle="text-[27px] md:text-[42px] font-work_sans_sm"
        desc="Looking forward to hearing from you"
        descStyle="font-avenir"
      />

      <HeadDesc
        title="Phone"
        titleStyle="text-2xl md:text-[42px] font-work_sans_sm"
        desc="123-456-7890"
        descStyle="font-avenir"
      />

      <HeadDesc
        title="Email"
        titleStyle="text-2xl md:text-[42px] font-work_sans_sm"
        desc="info@site.com"
        descStyle="font-avenir"
      />

      <p>Form</p>
    </div>
  );
};

export default Contact;

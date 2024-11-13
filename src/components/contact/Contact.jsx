import React from "react";
import HeadDesc from "../common/HeadDesc";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="pb-10 normal-pad lg:py-32 lg:px-[7.5rem] md:flex items-start justify-center">
      <div className="w-full md:w-[497px]">
        <HeadDesc
          title="Contact"
          titleStyle="text-[27px] md:text-[42px] font-work_sans_sm"
          desc="Looking forward to hearing from you"
          descStyle="font-avenir"
        />

        <HeadDesc
          title="Phone"
          containerStyle="mt-4 mb-2"
          titleStyle="md:text-lg font-work_sans_sm"
          desc="123-456-7890"
          descStyle="font-avenir"
        />

        <HeadDesc
          title="Email"
          titleStyle="md:text-lg font-work_sans_sm"
          desc="info@site.com"
          descStyle="font-avenir"
        />
      </div>

      <ContactForm />
    </div>
  );
};

export default Contact;

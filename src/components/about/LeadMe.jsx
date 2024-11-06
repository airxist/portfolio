import React from "react";
import Btn from "../common/Btn";

const LeadMe = () => {
  return (
    <div className="mt-6 flex-apart md:gap-x-6">
      <Btn text="Resume" styling="lead-btn bg-orange-600" />
      <Btn text="Projects" styling="lead-btn bg-red-600" />
      <Btn text="Contact" styling="lead-btn bg-blue-400" />
    </div>
  );
};

export default LeadMe;

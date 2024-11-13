import React, { useState } from "react";
import InputField from "./InputField";
import Btn from "../common/Btn";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="px-6 mt-8 space-y-4 w-full max-w-[431px]"
    >
      <div className="items-center justify-between w-full space-y-4 md:space-y-0 md:flex gap-x-6">
        <InputField
          containerStyle="flex flex-col w-full md:w-[calc(100%/2-12px)]"
          label="First Name"
          name="firstName"
          inputStyle="mt-1 bg-gray-100 border border-black outline-none  focus:border-[var(--soft-red)] h-11 py-2 px-4 font-avenir"
          value={formData.firstName}
          handleInput={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
          placeholder="Enter a first name"
        />

        <InputField
          containerStyle="flex flex-col w-full md:w-[calc(100%/2-12px)]"
          label="Last Name"
          name="lastName"
          inputStyle="mt-1 bg-gray-100 border border-black outline-none  focus:border-[var(--soft-red)] h-11 py-2 px-4 font-avenir"
          value={formData.lastName}
          handleInput={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
          placeholder="Enter a last name"
        />
      </div>

      <div className="items-center justify-between space-y-4 md:space-y-0 md:flex gap-x-6">
        <InputField
          type="email"
          containerStyle="flex flex-col w-full md:w-[calc(100%/2-12px)]"
          label="Email"
          name="email"
          inputStyle="mt-1 bg-gray-100 border border-black outline-none  focus:border-[var(--soft-red)] h-11 py-2 px-4 font-avenir"
          value={formData.email}
          handleInput={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          placeholder="Enter an email"
        />

        <InputField
          containerStyle="flex flex-col w-full md:w-[calc(100%/2-12px)]"
          label="Subject"
          name="subject"
          inputStyle="mt-1 bg-gray-100 border border-black outline-none  focus:border-[var(--soft-red)] h-11 py-2 px-4 font-avenir"
          value={formData.subject}
          handleInput={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
          placeholder="Enter a subject"
        />
      </div>

      <InputField
        type="text-box"
        containerStyle="flex flex-col w-full"
        label="Message"
        name="message"
        inputStyle="mt-1 bg-gray-100 border border-black outline-none  focus:border-[var(--soft-red)] h-32 py-2 px-4 font-avenir"
        value={formData.message}
        handleInput={(e) =>
          setFormData({ ...formData, message: e.target.value })
        }
        placeholder="Enter your message"
      />
      
      <Btn
        text="Submit"
        styling="border-2 border-black w-full bg-[var(--orange)] h-12 rounded-full text-xl md:text-2xl font-work_sans_sm hover:bg-transparent transition duration-1000 text-white hover:text-black"
      />
    </form>
  );
};

export default ContactForm;

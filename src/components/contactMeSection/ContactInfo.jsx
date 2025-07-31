import React from "react";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleInfo
        text="mailto:dorotej.d.arnold@gmail.com"
        label="dorotej.d.arnold@gmail.com"
        Image={HiOutlineMail}
      />
      <SingleInfo
        text="tel:+4917685957205"
        label="+49 176 85957 205"
        Image={FiPhone}
      />
      <SingleInfo
        text="https://www.google.com/maps?q=Basel,+Switzerland"
        label="Basel, Switzerland"
        Image={IoLocationOutline}
      />
    </div>
  );
};

export default ContactInfo;

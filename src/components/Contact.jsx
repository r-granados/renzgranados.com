import React from "react";
import { contactList } from "../data/Data";

const Contact = () => {
  return (
    <div name="contact" className="w-full md:h-screen h-full pt-[75px]">
      <div className="flex flex-col gap-2 w-full max-w-[1000px] h-full mx-auto p-8 ">
        <div className="my-4">
          <h1 className="page-title">CONTACT</h1>
          <h1 className="text-4xl sm:text-5xl font-semibold">Let's Talk!</h1>
          <br />
          <p>Impressed with my skills & experience? Send me an email or call my mobile anytime.</p>
          <p>You may also reach out to me thru my social media accounts.</p>
        </div>

        <div className="flex flex-col gap-3">
          {contactList.map(([icon, text]) => (
            <div className="w-[260px] flex justify-start items-center">
              <div className=" bg-[#5414ac] w-[50px] h-[50px] flex justify-center items-center rounded-full">
                {icon}
              </div>
              <p className="ml-2">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;

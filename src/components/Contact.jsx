import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-[600px] bg-[#0d012c] pt-[75px]">
      <div className="flex flex-col gap-2 w-full max-w-[1000px] h-full mx-auto p-8 ">
        <div className="my-4">
          <h1 className="text-[#03C03C] text-xl">CONTACT</h1>
          <h1 className="text-white text-4xl sm:text-5xl font-semibold">Let's Talk!</h1>
          <br />
          <p className="text-white">
            Impressed with my skills & experience? Send me an email or call my mobile anytime.
          </p>
          <p className="text-white">You may also reach out to me thru my social media accounts.</p>
        </div>

        <div className="flex flex-col gap-3">
          {[
            [<HiOutlineMail size={30} />, "hello@renzgranados.com"],
            [<BsTelephone size={25} />, "+63 917 685 6069"],
          ].map(([icon, text]) => (
            <div className="w-[260px] text-gray-300 flex justify-start items-center">
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

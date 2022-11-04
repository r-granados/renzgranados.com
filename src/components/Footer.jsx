import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { fbUrl, igUrl, gitUrl, liUrl, mailUrl } from "../data/Data";

const Footer = () => {
  return (
    <div className="text-sm w-full flex sm:h-[50px] h-[100px] sm:flex-row flex-col  justify-between items-center p-4 bg-[#5414ac] text-gray-50">
      <div>
        <p className="font-ligh">© Renz Granados 2022</p>
      </div>

      <div className="lg:hidden flex w-[200px] justify-between">
        <a href={fbUrl} target="_blank" rel="noreferrer">
          <FaFacebook size={25} />
        </a>
        <a href={igUrl} target="_blank" rel="noreferrer">
          <FaInstagram size={25} />
        </a>
        <a href={gitUrl} target="_blank" rel="noreferrer">
          <FaGithub size={25} />
        </a>
        <a href={liUrl} target="_blank" rel="noreferrer">
          <FaLinkedin size={25} />
        </a>
        <a href={mailUrl} target="_blank" rel="noreferrer">
          <HiOutlineMail size={25} />
        </a>
      </div>
    </div>
  );
};

export default Footer;

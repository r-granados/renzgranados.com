import React from "react";
import { socialsList } from "../data/Data";

const Footer = () => {
  return (
    <div className="text-sm w-full flex sm:h-[50px] h-[100px] sm:flex-row flex-col  justify-between items-center p-4 bg-[#5414ac] text-gray-50">
      <div>
        <p className="font-ligh">© Renz Granados 2022</p>
      </div>

      <div className="lg:hidden flex w-[200px] justify-between">
        {socialsList.map(([url, icon]) => (
          <a href={url} target="_blank" rel="noreferrer">
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;

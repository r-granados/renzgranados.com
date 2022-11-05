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
      <a
        className="text-[10px]"
        href="https://www.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_10798281.htm#query=developer%20illustration&position=2&from_view=keyword">
        Hero Image by upklyak on Freepik
      </a>
    </div>
  );
};

export default Footer;

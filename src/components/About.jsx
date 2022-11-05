import React from "react";
import { techStack1, techStack2 } from "../data/Data";

const About = () => {
  return (
    <div name="about" className=" w-full h-screen bg-[#0d012c] ">
      <div className="grid md:grid-cols-2 gap-4 w-full max-w-[1000px] h-full mx-auto px-8 ">
        <div className="order-last md:order-first flex flex-col justify-center items-center mx-4">
          <h2 className="text-[#fada5e] my-4">FREQUENTLY USED TECHNOLOGIES</h2>
          <div className="w-full items-center bg-[#5414ac] rounded-3xl py-3 mb-4 font-[monospace]">
            <div className="text-center my-2 px-1 bg-[#fada5e] text-[#0d012c] w-[200px]">
              <p>Data Engineering</p>
            </div>
            <div className="flex justify-evenly  text-white">
              {techStack1.map(([title, img]) => (
                <p>
                  {title} <img src={img} alt="techImg" />
                </p>
              ))}
            </div>
          </div>

          <div className="w-full items-center bg-[#5414ac] rounded-3xl py-3 font-[monospace]">
            <div className="text-center my-2 px-1 bg-[#fada5e] text-[#0d012c] w-[200px]">
              <p>Full Stack Dev</p>
            </div>
            <div className="flex justify-evenly  text-white">
              {techStack2.map(([title, img]) => (
                <p>
                  {title} <img src={img} alt="techImg" />
                </p>
              ))}
            </div>
          </div>
          <p className="text-gray-300 font-semibold my-3">More on my CV.</p>
        </div>

        {/* right side */}
        <div className="flex flex-col justify-center font-semibold text-left">
          <h1 className="text-[#03C03C] text-xl">ABOUT ME</h1>
          <h2 className="text-white text-2xl sm:text-3xl py-2">I MAY BE THE BEST-FIT FOR YOUR UPCOMING PROJECT!</h2>
          <p className="text-gray-300 font-semibold my-2">
            I am a 25 years old creative Data Engineer and a self-taught Full Stack Developer and Cross-Platform App
            Developer. I build robust and scalable data orchestrations with clean, appealing and functional interfaces.
          </p>
          <p className="text-gray-300 font-semibold my-3">
            I am data-driven and always updated with new technologies and web standards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

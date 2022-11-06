import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { SlArrowDown } from "react-icons/sl";
import HomeImg from "../assets/images/home-img.png";
import { mailUrl } from "../data/Data";
const Home = () => {
  return (
    <div name="home" className=" w-full min-h-screen flex flex-col justify-center items-center pt-[75px]">
      <div className="grid md:grid-cols-2 gap-2 w-full max-w-[1000px] h-full mx-auto p-8 ">
        {/* left side */}

        <div className="flex flex-col justify-center font-semibold text-center sm:text-left">
          <p className="text-2xl sm:text-3xl">👋🏻 Hello There! I am</p>
          <h1 className="page-title text-3xl sm:text-5xl">RENZ GRANADOS</h1>
          <h2 className="colored-title text-xl sm:text-2xl">Data Engineer | Full Stack Developer</h2>
          <p className="w-full sm:max-w-[500px] py-3">
            I am a Data Engineer by profession, but I like building websites and cross-platform applications as a hobby.
          </p>
          <div className="font-extralight flex justify-center sm:justify-start">
            <button className="w-[200px] h-[50px] flex justify-center items-center border-2 my-2 border-[#5414ac] hover:scale-105 hover:bg-[#5414ac] hover:text-[#ecedf3] duration-300">
              <a href={mailUrl + "?subject=Interested Working with you!"}>Let's Connect</a>
              <BsBoxArrowUpRight size={15} className="ml-3 mb-1" />
            </button>
          </div>
        </div>

        {/* right side */}
        <div className="flex justify-center items-center">
          <img src={HomeImg} alt="Home" />
        </div>
      </div>
      <div className="mx-auto my-2 flex justify-center animate-bounce">
        <SlArrowDown size={25} />
      </div>
    </div>
  );
};

export default Home;

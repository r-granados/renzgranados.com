import React from "react";
import { useState } from "react";
import SunImg from "../assets/images/sun.png";
import MoonImg from "../assets/images/moon.png";
import { SlArrowUp } from "react-icons/sl";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

const BottomMenu = () => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      setTheme("light");
      root.classList.remove("dark");
    } else {
      setTheme("dark");
      root.classList.add("dark");
    }
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll2 = () => {
    const winScroll = window.scrollY + 785;
    const scrolled = (winScroll / document.documentElement.scrollHeight) * 100;
    setScrollPosition(scrolled);
  };
  window.addEventListener("scroll", handleScroll2);

  return (
    <div className={"fixed bottom-[5%] right-4 flex flex-col gap-2"}>
      <div className="flex justify-center items-center border-4 bg-switch border-gray-500 rounded-full h-[50px] w-[50px] hover:scale-105 duration-300">
        <img
          className="cursor-pointer"
          src={theme === "dark" ? MoonImg : SunImg}
          alt="Sun&Moon"
          style={{ height: "30px" }}
          onClick={toggleTheme}
        />
      </div>
      <motion.div animate={{ y: scrollPosition > 30 ? 0 : 100 }}>
        <CircularProgressbarWithChildren
          styles={{
            path: { stroke: "rgb(107 114 128)" },
          }}
          value={scrollPosition}>
          <div>
            <Link className="z-10 cursor-pointer" to="home" smooth={true} duration={500}>
              <SlArrowUp className="text-[#0d012c] dark:text-gray-300" />
            </Link>
          </div>
        </CircularProgressbarWithChildren>
      </motion.div>
    </div>
  );
};

export default BottomMenu;

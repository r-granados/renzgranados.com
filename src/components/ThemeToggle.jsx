import React from "react";
import { useState } from "react";
import SunImg from "../assets/images/sun.png";
import MoonImg from "../assets/images/moon.png";
import { SlArrowUp } from "react-icons/sl";
import { Link } from "react-scroll";

const ThemeToggle = () => {
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
  const handleScroll = () => {
    const winScroll = window.scrollY + 785;
    const scrolled = (winScroll / document.documentElement.scrollHeight) * 100;
    setScrollPosition(scrolled);
    console.log(scrolled);
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div className="fixed bottom-[8%] right-2 mx-4 flex flex-col gap-2">
      <div className="flex justify-center items-center border-2 border-gray-500 dark:border-[#ecedf3] rounded-full h-[50px] w-[50px] hover:scale-105 duration-300">
        <button onClick={toggleTheme}>
          <img src={theme === "dark" ? MoonImg : SunImg} alt="Sun&Moon" style={{ height: "30px" }} />
        </button>
      </div>
      <div
        className={scrollPosition >= 23 ? "radial-progress border-2 border-gray-500 bg-[#5414ac]" : "hidden"}
        style={{ "--size": "50px", "--thickness": "1px", "--value": scrollPosition }}>
        <Link className="z-10 cursor-pointer" to="home" smooth={true} duration={500}>
          <SlArrowUp />
        </Link>
      </div>
    </div>
  );
};

export default ThemeToggle;

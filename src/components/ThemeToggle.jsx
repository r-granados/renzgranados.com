import React from "react";
import { useState } from "react";
import SunImg from "../assets/images/sun.png";
import MoonImg from "../assets/images/moon.png";

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

  return (
    <div className={"fixed bottom-[15%] right-0 mr-6 flex flex-col"}>
      <div className="flex justify-center items-center border-2 border-gray-500 dark:border-[#ecedf3] rounded-full h-[50px] w-[50px] hover:scale-105 duration-300">
        <img
          className="cursor-pointer"
          src={theme === "dark" ? MoonImg : SunImg}
          alt="Sun&Moon"
          style={{ height: "30px" }}
          onClick={toggleTheme}
        />
      </div>
    </div>
  );
};

export default ThemeToggle;

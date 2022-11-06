import React, { useState } from "react";
import { SlArrowUp } from "react-icons/sl";
import { Link } from "react-scroll";

const ReturnTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const winScroll = window.scrollY + 785;
    const scrolled = (winScroll / document.documentElement.scrollHeight) * 100;
    setScrollPosition(scrolled);
    console.log(scrolled);
  };
  window.addEventListener("scroll", handleScroll);

  const someStyle =
    "fixed bottom-[5%] right-0 mr-6 radial-progress border-2 border-gray-500 bg-[#5414ac] hover:scale-105 duration-300";

  return (
    <div
      className={scrollPosition > 21 ? someStyle : someStyle + " bottom-[-200%]"}
      style={{ "--size": "46px", "--thickness": "1px", "--value": scrollPosition }}>
      <Link className="z-10 cursor-pointer" to="home" smooth={true} duration={500}>
        <SlArrowUp />
      </Link>
    </div>
  );
};

export default ReturnTop;

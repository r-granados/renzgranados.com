import React, { useState } from "react";
import MyCV from "../assets/files/renz-granados-cv.pdf";
import LogoImg from "../assets/images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

import { navList, socialsListColored } from "../data/Data";
import ThemeToggle from "./ThemeToggle";
import ReturnTop from "./ReturnTop";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  const navClass = "fixed w-full h-[75px] flex justify-between items-center p-4 text-gray-50 z-10";

  return (
    <div className={scrolled ? "bg-white dark:bg-[#000112] " + navClass : navClass}>
      {/* Logo */}
      <div className="w-full z-10">
        <img src={LogoImg} alt="Renz." style={{ height: "65px" }} />
      </div>

      {/*Hamburger*/}
      <div className="nav-li md:hidden z-10" onClick={handleClick}>
        {click ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>

      {/*Menu desktop*/}
      <ul className="md:flex hidden w-full justify-end items-center">
        {navList.map(([section, title]) => (
          <li className="nav-li">
            <Link to={section} smooth={true} duration={500}>
              {title}
            </Link>
          </li>
        ))}
        <li>
          <button className="bg-[#03C03C] rounded-xl h-[40px] min-w-[100px] text-[12px] p-2 hover:scale-105 duration-300">
            <a href={MyCV} download>
              Download CV
            </a>
          </button>
        </li>
      </ul>

      {/*Mobile menu*/}

      <ul
        className={
          !click
            ? "absolute top-0 right-[-100%]"
            : "mobi-nav md:hidden absolute w-full h-screen top-0 right-0 flex flex-col justify-center items-center duration-300"
        }>
        {navList.map(([section, title]) => (
          <li className="nav-li py-6 text-4xl">
            <Link to={section} smooth={true} duration={500} onClick={handleClick}>
              {title}
            </Link>
          </li>
        ))}
        <li>
          <button className="bg-[#03C03C] rounded-xl h-[60px] text-2xl p-2 hover:scale-105 duration-300">
            <a href={MyCV} download>
              Download CV
            </a>
          </button>
        </li>
      </ul>

      {/* Socials */}
      <div className="hidden lg:flex fixed  flex-col top-[35%] left-0">
        <ul>
          {socialsListColored.map(([url, title, logo, cls]) => (
            <li className={cls}>
              <a href={url} target="_blank" rel="noreferrer" className="w-full flex justify-between items-center">
                {title} {logo}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {!click ? <ThemeToggle /> : ""}
      {!click ? <ReturnTop /> : ""}
    </div>
  );
};

export default Navbar;

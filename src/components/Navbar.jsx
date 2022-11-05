import React, { useState } from "react";
import { fbUrl, igUrl, gitUrl, liUrl, mailUrl } from "../data/Data";
import MyCV from "../assets/files/renz-cv.pdf";
import LogoImg from "../assets/images/logo.png";
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";

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

  const navClass = "fixed w-full h-[75px] flex justify-between items-center p-4 text-gray-50";

  //will be used in social media class at the bottom
  const socClass = "w-[160px] h-[60px] flex items-center justify-center ml-[-100px] hover:ml-[-10px] duration-300";

  return (
    <div className={scrolled ? "bg-[#000112] " + navClass : "bg-[#0d012c] " + navClass}>
      {/* Logo */}
      <div className="w-full z-10">
        {/*Add logo, for now name*/}
        <a href="/" className="text-4xl font-semibold">
          <img src={LogoImg} alt="Renz." style={{ height: "65px" }} />
        </a>
      </div>

      {/*Hamburger*/}
      <div className="md:hidden z-10" onClick={handleClick}>
        {click ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>

      {/*Menu desktop*/}
      <ul className="md:flex hidden w-full justify-end items-center">
        {[
          ["home", "HOME"],
          ["about", "ABOUT"],
          ["skills", "SKILLS"],
          ["projects", "PROJECTS"],
          ["contact", "CONTACT"],
        ].map(([section, title]) => (
          <li className="hover:text-[#03C03C]">
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
            ? "hidden"
            : "md:hidden absolute w-full h-screen top-0 left-0 flex flex-col justify-center items-center bg-[#0d012cf5] duration-300"
        }>
        {[
          ["home", "HOME"],
          ["about", "ABOUT"],
          ["skills", "SKILLS"],
          ["projects", "PROJECTS"],
          ["contact", "CONTACT"],
        ].map(([section, title]) => (
          <li className="py-6 text-4xl">
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

      {/* Socilas */}
      <div className="hidden lg:flex fixed  flex-col top-[35%] left-0">
        <ul>
          {[
            [fbUrl, "Facebook", <FaFacebook size={25} />, socClass + " bg-[#4267B2]"],
            [igUrl, "Instagram", <FaInstagram size={25} />, socClass + " bg-[#cd486b]"],
            [gitUrl, "Github", <FaGithub size={25} />, socClass + " bg-[#333]"],
            [liUrl, "Linkedin", <FaLinkedin size={25} />, socClass + " bg-[#0A66C2]"],
            [mailUrl, "Email", <HiOutlineMail size={25} />, socClass + " bg-[#6cc644]"],
          ].map(([url, title, logo, cls]) => (
            <li className={cls}>
              <a href={url} target="_blank" rel="noreferrer" className="w-full flex justify-between items-center">
                {title} {logo}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

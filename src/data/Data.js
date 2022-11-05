import PythonImg from "../assets/images/python.png";
import AirflowImg from "../assets/images/airflow.png";
import AwsImg from "../assets/images/aws.png";
import CssImg from "../assets/images/css.png";
import DockerImg from "../assets/images/docker.png";
import GitImg from "../assets/images/git.png";
import HtmlImg from "../assets/images/html.png";
import JsImg from "../assets/images/javascript.png";
import SqlImg from "../assets/images/sql.png";
import ReactImg from "../assets/images/react.png";

import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";

import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

//Add / edit data here to update components

//My socials links
export const fbUrl = "https://www.facebook.com/renzgranados17";
export const igUrl = "https://www.instagram.com/grenadesrrr";
export const gitUrl = "https://www.github.com/r-granados";
export const liUrl = "https://www.linkedin.com/in/renzgranados";
export const mailUrl = "mailto:hello@renzgranados";

// for About page, tech stack list
export const techStack1 = [
  ["Python", PythonImg],
  ["Airflow", AirflowImg],
  ["Docker", DockerImg],
  ["AWS", AwsImg],
  ["SQL", SqlImg],
];

export const techStack2 = [
  ["React", ReactImg],
  ["Javascript", JsImg],
  ["HTML", HtmlImg],
  ["CSS", CssImg],
  ["Git", GitImg],
];

//

// for Contact page, contact list
export const contactList = [
  [<HiOutlineMail size={30} />, "hello@renzgranados.com"],
  [<BsTelephone size={25} />, "+63 917 685 6069"],
];
//

// for footer page, social links list

export const socialsList = [
  [fbUrl, <FaFacebook size={25} />],
  [igUrl, <FaInstagram size={25} />],
  [gitUrl, <FaGithub size={25} />],
  [liUrl, <FaLinkedin size={25} />],
  [mailUrl, <HiOutlineMail size={25} />],
];

//

//for navbar component, social links list with colored bg
const socClass = "w-[160px] h-[60px] flex items-center justify-center ml-[-100px] hover:ml-[-10px] duration-300";
export const socialsListColored = [
  [fbUrl, "Facebook", <FaFacebook size={25} />, socClass + " bg-[#4267B2]"],
  [igUrl, "Instagram", <FaInstagram size={25} />, socClass + " bg-[#cd486b]"],
  [gitUrl, "Github", <FaGithub size={25} />, socClass + " bg-[#333]"],
  [liUrl, "Linkedin", <FaLinkedin size={25} />, socClass + " bg-[#0A66C2]"],
  [mailUrl, "Email", <HiOutlineMail size={25} />, socClass + " bg-[#6cc644]"],
];
//

//for navbar component, navigation links
export const navList = [
  ["home", "HOME"],
  ["about", "ABOUT"],
  ["skills", "SKILLS"],
  ["projects", "PROJECTS"],
  ["contact", "CONTACT"],
];
//

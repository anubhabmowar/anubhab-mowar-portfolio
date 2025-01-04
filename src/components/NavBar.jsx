import React from "react";
import logo from "../assets/logo.png";
import { FaLinkedinIn as Falinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const NavBar = () => {
  return (
    <nav className="w-screen h-[75px]  flex items-center justify-between py-6 px-4">
      <div className="flex items-center justify-center h-[75px] w-[75px]  rounded-full object-fit">
        <img src={logo} alt="" className="w-full h-full rounded-full" />
      </div>
      <div className="flex items-center gap-4">
        <link href="https://www.linkedin.com/in/anubhab-mowar/">
          <Falinkedin className="w-6 h-6 text-white" />
        </link>
        <link href="https://github.com/AnubhabMowar">
          <FaGithub className="w-6 h-6 text-white " />
        </link>
        <link href="https://www.instagram.com/anubhab_mowar/">
          <FaInstagram className="w-6 h-6 text-white" />
        </link>
      </div>
    </nav>
  );
};

export default NavBar;

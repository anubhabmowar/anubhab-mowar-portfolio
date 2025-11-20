import logo from "../assets/logo.png";
import { FaLinkedinIn as Falinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
const NavBar = () => {
  return (
    <nav className="w-screen h-[75px]  flex items-center justify-between py-6 px-4">
      <div className="flex items-center justify-center h-[75px] w-[75px]  rounded-full object-fit">
        <img src={logo} alt="" className="w-full h-full rounded-full" />
      </div>
      <div className="flex items-center gap-4">
        <a
          href="https://www.facebook.com/anubhabmowar31"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:shadow-xl hover:shadow-purple-500"
        >
          <ImFacebook className="w-6 h-6 text-white" />
        </a>
        <a
          href="https://www.linkedin.com/in/anubhab-mowar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Falinkedin className="w-6 h-6 text-white hover:shadow-xl hover:shadow-purple-500" />
        </a>
        <a
          href="https://github.com/AnubhabMowar"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:shadow-xl hover:shadow-purple-500"
        >
          <FaGithub className="w-6 h-6 text-white " />
        </a>
        <a
          href="https://www.instagram.com/anubhab_mowar/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:shadow-xl hover:shadow-purple-500"
        >
          <FaInstagram className="w-6 h-6 text-white" />
        </a>
        <a
          href="https://x.com/Anubhab_Mowar"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:shadow-xl hover:shadow-purple-500"
        >
          <FaXTwitter className="w-6 h-6 text-white" />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;

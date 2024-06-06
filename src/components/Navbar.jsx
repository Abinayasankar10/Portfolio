import logo from "../assets/logo.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaGoogle} from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-6 w-13 h-16"src={logo} alt="logo"/>
        </div>
        <div className=" m-8 flex items-center jutstify-center gap-4 text-2xl"> 
            <a href="https://www.linkedin.com/in/abinaya-s-66abab249/"><FaLinkedin/></a>
           <a href="https://github.com/Abinayasankar10"><FaGithub/></a> 
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"><FaGoogle/></a>
         
        </div>
    </nav>
  );
};

export default Navbar;

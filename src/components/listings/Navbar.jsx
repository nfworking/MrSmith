import { useState } from "react";
import logo from "/src/assets/logo.png";
import {LINKS} from "/src/constants"
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { LINKS_SINGLE } from "../../constants";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };
  return (
    <nav className="top-20 z-50 flex w-full flex-col items-center justify-center fixed ">
      <div className="flex w-full items-center justify-between overflow-y-hidden p-5 bg-black lg:m-2 lg:w-[50rem] lg:rounded-full lg:shadow-lg">
       <h1>SHORLINE</h1>
        <div className="hidden space-x-6 lg:flex">
            {LINKS_SINGLE.map((link, index) => (
                <a key={index} href={`#s{link.targetId}`} className={`text-sm ${index !== 0 ? "border-l-2 border-neutral-300/20 pl-2" : ""} hover:opacity-50`} onClick={(e) => handleScroll (e, link.targetId) }>
                    {link.text}
                </a>
            ))}
        </div>
        <div className="lg:hidden">
            <button onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? <FaTimes/> : <FaBars/>}
            </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="w-full backdrop-blur-lg lg:hidden">
            {LINKS_SINGLE.map((link, index) => (
                <a key={index} href={`#${link.targetId}`} className="block p-4 uppercase tracking-tighter" onClick={(e) => handleScroll (e, link.targetId)}>{link.text}</a>
            ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

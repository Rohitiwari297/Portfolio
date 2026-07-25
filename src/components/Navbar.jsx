import React, { useState } from "react";
import { Link } from "react-router-dom";
import Image from "../../public/Image.png";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { FaDownload } from "react-icons/fa";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "About", link: "/about" },
    { id: 3, text: "Portfolio", link: "/portfolio" },
    { id: 4, text: "Skills", link: "/skills" },
    { id: 5, text: "Contact", link: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#0b0b0d]/90 backdrop-blur-md border-b border-gray-800/80 z-50 transition-all duration-300">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-16 h-16 flex justify-between items-center">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center space-x-3 group cursor-pointer">
          <div className="relative">
            <img 
              src={Image} 
              className="h-10 w-10 rounded-full border-2 border-emerald-400 object-cover object-[50%_15%] group-hover:scale-105 transition-transform duration-300 shadow-[0_0_12px_rgba(52,211,153,0.3)]" 
              alt="Rohit Tiwari" 
            />
            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-[#0b0b0d]"></span>
          </div>
          <div>
            <h1 className="font-extrabold text-xl tracking-wide text-gray-100 group-hover:text-emerald-400 transition-colors">
              Rohit<span className="text-emerald-400">.dev</span>
            </h1>
            <p className="text-[10px] uppercase tracking-wider text-emerald-400 font-mono -mt-1 select-none">
              Full Stack Engineer
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6 font-medium text-sm">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.link}
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 py-1 border-b-2 border-transparent hover:border-emerald-400"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>

          {/* Resume Download CTA */}
          <a
            href="/Rohit_Kumar_Tiwari_Resume.pdf"
            download="Rohit_Kumar_Tiwari_Resume.pdf"
            className="flex items-center space-x-2 px-4 py-2 text-xs font-bold uppercase tracking-wider bg-emerald-500 hover:bg-emerald-400 text-gray-950 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(16,185,129,0.4)]"
          >
            <FaDownload className="text-sm" />
            <span>Resume PDF</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-3">
          <a
            href="/Rohit_Kumar_Tiwari_Resume.pdf"
            download="Rohit_Kumar_Tiwari_Resume.pdf"
            className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider bg-emerald-500 text-gray-950 rounded-md shadow-md flex items-center space-x-1"
          >
            <FaDownload />
            <span>PDF</span>
          </a>
          <button 
            onClick={() => setMenu(!menu)} 
            className="text-gray-200 hover:text-emerald-400 p-1 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {menu ? <IoCloseSharp size={26} /> : <AiOutlineMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menu && (
        <div className="md:hidden bg-[#111317]/95 backdrop-blur-xl border-b border-gray-800 px-6 py-6 space-y-4 text-center animate-fadeIn">
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.link}
                  onClick={() => setMenu(false)}
                  className="text-gray-200 hover:text-emerald-400 font-semibold text-base transition-colors"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pt-2">
            <a
              href="/Rohit_Kumar_Tiwari_Resume.pdf"
              download="Rohit_Kumar_Tiwari_Resume.pdf"
              onClick={() => setMenu(false)}
              className="inline-flex items-center space-x-2 px-5 py-2 text-xs font-bold uppercase tracking-wider bg-emerald-500 text-gray-950 rounded-lg shadow-lg"
            >
              <FaDownload />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

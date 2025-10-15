import React from "react";
import { FaGithub, FaLinkedin, FaTelegram, FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

function Footer() {
  return (
    <footer className="sticky bottom-0 w-full bg-gradient-to-t from-[#0b0b0d] via-[#101214] to-[#1a1c1e] text-gray-400 py-4 px-6 md:px-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
        
        {/* Left: Name / Copyright */}
        <div className="text-center md:text-left text-sm">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Rohit Kumar Tiwari. All rights reserved.</p>
        </div>

        {/* Right: Social Links */}
        <div className="flex space-x-4 text-lg justify-center md:justify-end">
          {[ 
            { icon: <FaGithub />, link: "https://github.com/analyticalrohit" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/rohit-kumar-tiwari-9996ba237/" },
            { icon: <FaTelegram />, link: "https://web.telegram.org/" },
            { icon: <FaFacebookSquare />, link: "https://www.facebook.com/" },
            { icon: <IoLogoYoutube />, link: "https://www.youtube.com/" },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 transition duration-300 select-none hover:drop-shadow-[0_0_8px_#10b981]"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;

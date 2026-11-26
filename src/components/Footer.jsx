import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-[#090a0c] border-t border-gray-800/80 text-gray-400 py-6 px-4 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        {/* Left: Name / Copyright */}
        <div className="text-center md:text-left text-xs sm:text-sm font-mono space-y-1">
          <p className="text-gray-300 font-semibold">
            &copy; {new Date().getFullYear()} Rohit Kumar Tiwari. All rights reserved.
          </p>
          <p className="text-gray-500 text-[11px]">
            Built with React, Tailwind CSS, TypeScript, Redis, Nginx & Node.js
          </p>
        </div>

        {/* Right: Social & Resume Links */}
        <div className="flex items-center space-x-5 text-lg">
          <a
            href="https://github.com/Rohitiwari297"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-400 transition duration-300"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/rohit-kumar-tiwari-9996ba237/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-400 transition duration-300"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:tripathirohit297@gmail.com"
            className="hover:text-indigo-400 transition duration-300"
            title="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="/Rohit_Kumar_Tiwari_Resume.pdf"
            download="Rohit_Kumar_Tiwari_Resume.pdf"
            className="flex items-center space-x-1.5 px-3 py-1.5 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-semibold rounded-md transition duration-300"
            title="Download Resume"
          >
            <FaDownload />
            <span>Resume</span>
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;

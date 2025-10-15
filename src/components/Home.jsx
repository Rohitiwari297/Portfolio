import React from "react";
import { FaFacebookSquare, FaLinkedin, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram, FaSquareGithub } from "react-icons/fa6";
import { SiMongodb, SiExpress } from "react-icons/si";
import { ReactTyped } from "react-typed";
import img from "../assets/Rohit1.jpg";

function Home() {
  return (
    <section className="bg-gradient-to-b from-[#0b0b0d] via-[#101214] to-[#1a1c1e] text-gray-200 min-h-screen flex items-center justify-center px-6 md:px-20">
      <div className="max-w-screen-2xl container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-16">
        
        {/* Left Section */}
        <div className="flex flex-col md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-xl md:text-xl font-semibold text-gray-400 tracking-wide">
            👋 Welcome to my portfolio
          </h2>

          <div className="text-3xl md:text-3xl font-extrabold">
            <h1 className="inline-block">Hi, I’m a </h1>
            <ReactTyped
              className="text-emerald-400"
              strings={["Full Stack Developer", "Programmer", "Tech Enthusiast"]}
              typeSpeed={60}
              backSpeed={40}
              loop
            />
          </div>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg">
            I’m <span className="text-emerald-400 font-medium">Rohit Kumar Tiwari</span> — a passionate developer who loves building clean, scalable, and user-friendly web applications using the latest technologies.
            My focus is on crafting seamless digital experiences that blend performance and design.
          </p>

          {/* Social + Tech Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 mt-8">
            
            {/* Social Links */}
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-lg mb-3 text-gray-300">Connect with me</h3>
              <ul className="flex justify-center md:justify-start gap-5">
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer">
                    <FaFacebookSquare className="text-2xl hover:text-blue-500 transition-all hover:scale-110 duration-200" />
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                    <FaLinkedin className="text-2xl hover:text-blue-400 transition-all hover:scale-110 duration-200" />
                  </a>
                </li>
                <li>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer">
                    <IoLogoYoutube className="text-2xl hover:text-red-600 transition-all hover:scale-110 duration-200" />
                  </a>
                </li>
                <li>
                  <a href="https://web.telegram.org" target="_blank" rel="noreferrer">
                    <FaTelegram className="text-2xl hover:text-sky-400 transition-all hover:scale-110 duration-200" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/rohitiwari297" target="_blank" rel="noreferrer">
                    <FaSquareGithub className="text-2xl hover:text-gray-300 transition-all hover:scale-110 duration-200" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-lg mb-3 text-gray-300">Currently working with</h3>
              <div className="flex justify-center md:justify-start gap-6">
                <SiMongodb className="text-3xl hover:text-green-500 hover:scale-110 transition duration-200" />
                <SiExpress className="text-3xl hover:text-gray-400 hover:scale-110 transition duration-200" />
                <FaReact className="text-3xl hover:text-cyan-400 hover:scale-110 transition duration-200" />
                <FaNodeJs className="text-3xl hover:text-green-400 hover:scale-110 transition duration-200" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Section (Profile Image) */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative group">
            {/* Glowing gradient ring */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-purple-500 to-blue-500 rounded-full blur-lg opacity-60 group-hover:opacity-90 transition duration-700 animate-pulse"></div>
            
            {/* Image */}
            <img
              src={img}
              alt="Rohit"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-[#0b0b0d] shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

import React from "react";
import { FaLinkedin, FaReact, FaNodeJs, FaDownload, FaRocket, FaTerminal, FaCheckCircle } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { SiMongodb, SiExpress, SiTypescript, SiRedis, SiNginx, SiTailwindcss } from "react-icons/si";
import { ReactTyped } from "react-typed";
import img from "../assets/Rohit1.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="bg-gradient-to-b from-[#0b0b0d] via-[#101318] to-[#14171d] text-gray-200 min-h-screen flex items-center justify-center px-4 md:px-16 pt-24 pb-16">
      <div className="max-w-screen-2xl container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">
        
        {/* Left Hero Section */}
        <div className="flex flex-col md:w-3/5 space-y-6 text-center md:text-left">
          
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mx-auto md:mx-0 w-fit backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Available for Full-Stack & Backend Roles</span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h2 className="text-gray-400 text-base md:text-lg font-medium tracking-wide">
              Hello World, I'm
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-gray-100 tracking-tight leading-tight">
              Rohit Kumar <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Tiwari</span>
            </h1>
            <div className="text-lg sm:text-xl md:text-3xl font-extrabold text-gray-300 min-h-[2.5rem]">
              <span className="text-gray-400 font-normal">Specialized in </span>
              <ReactTyped
                className="text-emerald-400 border-b-2 border-emerald-500/50 pb-0.5"
                strings={[
                  "Full Stack Development",
                  "React.js & Next.js",
                  "AWS EC2 & Web Hosting",
                  "AI Tools (ChatGPT, Claude)",
                  "Node.js & Redis Caching",
                  "Nginx Reverse Proxy & DevOps"
                ]}
                typeSpeed={50}
                backSpeed={35}
                loop
              />
            </div>
          </div>

          {/* Bio Description */}
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl">
            Passionate <span className="text-emerald-300 font-semibold">Full Stack Engineer</span> with expertise in <span className="text-emerald-400 font-medium">React.js, Next.js, Node.js, Express, TypeScript, AWS EC2, Hostinger, Hosting Raja, Netlify</span>, and <span className="text-emerald-400 font-medium">MongoDB</span>. I build high-concurrency microservices, real-time video dashboards, matrimonial backends, and multi-vendor e-commerce platforms with bulletproof reliability.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-3 pb-3 border-y border-gray-800/80 max-w-xl mx-auto md:mx-0 text-center">
            <div className="p-2">
              <p className="text-lg sm:text-2xl font-bold text-emerald-400">1+ Years</p>
              <p className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider font-mono">Industry Exp</p>
            </div>
            <div className="p-2 border-x border-gray-800/80">
              <p className="text-lg sm:text-2xl font-bold text-cyan-400">4+ Live</p>
              <p className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider font-mono">Production Apps</p>
            </div>
            <div className="p-2">
              <p className="text-lg sm:text-2xl font-bold text-purple-400">10+ Repos</p>
              <p className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider font-mono">GitHub Repos</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
            <a
              href="/Rohit_Kumar_Tiwari_Resume.pdf"
              download="Rohit_Kumar_Tiwari_Resume.pdf"
              className="px-6 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-gray-950 font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center space-x-2"
            >
              <FaDownload className="text-base" />
              <span>Download ATS Resume</span>
            </a>

            <Link
              to="/portfolio"
              className="px-6 py-3.5 bg-[#181b22] hover:bg-[#202530] border border-gray-700/80 hover:border-emerald-500/50 text-gray-200 font-semibold text-xs sm:text-sm rounded-xl transition-all duration-300 flex items-center space-x-2"
            >
              <FaRocket className="text-emerald-400" />
              <span>View Live Projects</span>
            </Link>
          </div>

          {/* Core Tech Stack Icons */}
          <div className="pt-4 space-y-3">
            <p className="text-[11px] uppercase tracking-widest text-gray-400 font-mono font-semibold">Core Stack & Ecosystem</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 text-xl sm:text-2xl text-gray-300">
              <div className="group relative flex items-center justify-center p-2.5 bg-[#16181e] rounded-xl border border-gray-800 hover:border-blue-400/60 hover:text-blue-400 transition-all duration-300">
                <SiTypescript title="TypeScript" />
              </div>
              <div className="group relative flex items-center justify-center p-2.5 bg-[#16181e] rounded-xl border border-gray-800 hover:border-red-500/60 hover:text-red-500 transition-all duration-300">
                <SiRedis title="Redis" />
              </div>
              <div className="group relative flex items-center justify-center p-2.5 bg-[#16181e] rounded-xl border border-gray-800 hover:border-emerald-500/60 hover:text-emerald-400 transition-all duration-300">
                <SiNginx title="Nginx" />
              </div>
              <div className="group relative flex items-center justify-center p-2.5 bg-[#16181e] rounded-xl border border-gray-800 hover:border-cyan-400/60 hover:text-cyan-400 transition-all duration-300">
                <FaReact title="React.js" />
              </div>
              <div className="group relative flex items-center justify-center p-2.5 bg-[#16181e] rounded-xl border border-gray-800 hover:border-green-500/60 hover:text-green-500 transition-all duration-300">
                <FaNodeJs title="Node.js" />
              </div>
              <div className="group relative flex items-center justify-center p-2.5 bg-[#16181e] rounded-xl border border-gray-800 hover:border-emerald-500/60 hover:text-emerald-500 transition-all duration-300">
                <SiMongodb title="MongoDB" />
              </div>
              <div className="group relative flex items-center justify-center p-2.5 bg-[#16181e] rounded-xl border border-gray-800 hover:border-sky-400/60 hover:text-sky-400 transition-all duration-300">
                <SiTailwindcss title="Tailwind CSS" />
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center md:justify-start space-x-4 pt-2">
            <span className="text-xs uppercase font-mono text-gray-400">Socials:</span>
            <a href="https://github.com/Rohitiwari297" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-emerald-400 text-xl transition-colors">
              <FaSquareGithub />
            </a>
            <a href="https://linkedin.com/in/rohit-kumar-tiwari-9996ba237" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-emerald-400 text-xl transition-colors">
              <FaLinkedin />
            </a>
          </div>

        </div>

        {/* Right Section Profile Image Frame */}
        <div className="md:w-2/5 flex justify-center w-full max-w-sm sm:max-w-md md:max-w-none">
          <div className="relative group w-full max-w-[280px] sm:max-w-[340px] md:max-w-[370px]">
            
            {/* Glowing Outer Glow Ring */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-[2.5rem] blur-xl opacity-65 group-hover:opacity-100 transition duration-700 animate-pulse"></div>
            
            {/* Main Portrait Card Frame */}
            <div className="relative p-2.5 bg-[#111319]/90 backdrop-blur-xl border border-emerald-500/40 rounded-[2.2rem] shadow-2xl overflow-hidden">
              
              {/* Image Container with precise face focal point */}
              <div className="relative w-full h-[320px] sm:h-[390px] md:h-[430px] rounded-[1.8rem] overflow-hidden bg-[#181b24] border border-gray-800">
                <img
                  src={img}
                  alt="Rohit Kumar Tiwari - Full Stack Developer"
                  className="w-full h-full object-cover object-[50%_15%] transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle Gradient Overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0d] via-transparent to-transparent opacity-80"></div>
              </div>

              {/* Bottom Floating Info Pill inside Frame */}
              <div className="absolute bottom-5 left-5 right-5 p-3.5 bg-[#141720]/90 backdrop-blur-md border border-emerald-500/30 rounded-xl shadow-xl space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs sm:text-sm font-bold text-gray-100 flex items-center space-x-1.5">
                    <span>Rohit Kumar Tiwari</span>
                    <FaCheckCircle className="text-emerald-400 text-xs" />
                  </h3>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                    SDE 2026
                  </span>
                </div>
                <p className="text-[11px] font-mono text-gray-300 truncate">
                  Full Stack & Backend Engineer
                </p>
              </div>

            </div>

            {/* Top Floating Badge */}
            <div className="absolute -top-3 -right-2 sm:-right-4 bg-[#141720]/95 backdrop-blur-md border border-cyan-500/40 rounded-xl px-3.5 py-1.5 text-[11px] font-mono text-cyan-300 shadow-xl flex items-center space-x-1.5 z-10 animate-bounce">
              <FaTerminal className="text-emerald-400" />
              <span>TS | Redis | Nginx</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;

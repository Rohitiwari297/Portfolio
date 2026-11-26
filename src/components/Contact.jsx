import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaDownload, FaPaperPlane } from "react-icons/fa";

function Contact() {
  return (
    <section className="bg-gradient-to-b from-[#0b0b0d] via-[#101318] to-[#14171d] text-gray-200 py-20 px-4 md:px-16 min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto space-y-12 w-full">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono uppercase tracking-wider">
            <FaPaperPlane />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-100 tracking-tight">
            Let's Build Something <span className="text-indigo-400">Great</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Open to full-time Full Stack / Backend roles. Available to join within 15 days.
          </p>
        </div>

        {/* ATS Resume Download Banner */}
        <div className="bg-gradient-to-r from-indigo-950/40 via-[#141722] to-indigo-950/40 border border-indigo-500/40 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_0_25px_rgba(99,102,241,0.15)]">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest font-bold">Resume · PDF</span>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-100">Full Stack Developer Resume</h3>
            <p className="text-xs sm:text-sm text-gray-400">MERN, TypeScript, Redis, Nginx and AWS, with work experience and key projects.</p>
          </div>
          <a
            href="/Rohit_Kumar_Tiwari_Resume.pdf"
            download="Rohit_Kumar_Tiwari_Resume.pdf"
            className="px-6 py-3.5 bg-indigo-500 hover:bg-indigo-400 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-[0_0_15px_rgba(99,102,241,0.4)] flex items-center space-x-2 shrink-0 transform hover:scale-105"
          >
            <FaDownload className="text-sm" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          {/* Email Card */}
          <a
            href="mailto:tripathirohit297@gmail.com"
            className="bg-[#14161d] border border-gray-800 p-6 rounded-2xl shadow-lg hover:border-indigo-500/50 hover:shadow-indigo-500/10 transition duration-300 flex items-center space-x-5 group"
          >
            <div className="p-4 bg-[#1c1f28] rounded-xl border border-gray-700/50 group-hover:scale-110 transition-transform">
              <FaEnvelope size={24} className="text-indigo-400" />
            </div>
            <div>
              <h3 className="text-xs font-mono text-gray-400 uppercase tracking-wider">Email Address</h3>
              <p className="text-sm sm:text-base font-bold text-gray-100 group-hover:text-indigo-400 transition-colors">
                tripathirohit297@gmail.com
              </p>
            </div>
          </a>

          {/* Phone Card */}
          <a
            href="tel:+917052515866"
            className="bg-[#14161d] border border-gray-800 p-6 rounded-2xl shadow-lg hover:border-indigo-500/50 hover:shadow-indigo-500/10 transition duration-300 flex items-center space-x-5 group"
          >
            <div className="p-4 bg-[#1c1f28] rounded-xl border border-gray-700/50 group-hover:scale-110 transition-transform">
              <FaPhoneAlt size={24} className="text-indigo-400" />
            </div>
            <div>
              <h3 className="text-xs font-mono text-gray-400 uppercase tracking-wider">Phone / WhatsApp</h3>
              <p className="text-sm sm:text-base font-bold text-gray-100 group-hover:text-indigo-400 transition-colors">
                +91-7052515866
              </p>
            </div>
          </a>

          {/* GitHub Card */}
          <a
            href="https://github.com/Rohitiwari297"
            target="_blank"
            rel="noreferrer"
            className="bg-[#14161d] border border-gray-800 p-6 rounded-2xl shadow-lg hover:border-indigo-500/50 hover:shadow-indigo-500/10 transition duration-300 flex items-center space-x-5 group"
          >
            <div className="p-4 bg-[#1c1f28] rounded-xl border border-gray-700/50 group-hover:scale-110 transition-transform">
              <FaGithub size={24} className="text-indigo-400" />
            </div>
            <div>
              <h3 className="text-xs font-mono text-gray-400 uppercase tracking-wider">GitHub Repositories</h3>
              <p className="text-sm sm:text-base font-bold text-gray-100 group-hover:text-indigo-400 transition-colors">
                github.com/Rohitiwari297
              </p>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/rohit-kumar-tiwari-9996ba237/"
            target="_blank"
            rel="noreferrer"
            className="bg-[#14161d] border border-gray-800 p-6 rounded-2xl shadow-lg hover:border-indigo-500/50 hover:shadow-indigo-500/10 transition duration-300 flex items-center space-x-5 group"
          >
            <div className="p-4 bg-[#1c1f28] rounded-xl border border-gray-700/50 group-hover:scale-110 transition-transform">
              <FaLinkedin size={24} className="text-indigo-400" />
            </div>
            <div>
              <h3 className="text-xs font-mono text-gray-400 uppercase tracking-wider">LinkedIn Profile</h3>
              <p className="text-sm sm:text-base font-bold text-gray-100 group-hover:text-indigo-400 transition-colors">
                rohit-kumar-tiwari-9996ba237
              </p>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;

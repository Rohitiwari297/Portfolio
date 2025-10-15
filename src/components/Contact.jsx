import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function Contact() {
  return (
    <section className="bg-gradient-to-b from-[#0b0b0d] via-[#101214] to-[#1a1c1e] text-gray-200 py-16 px-4 sm:px-6 md:px-20">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-emerald-400 mb-3 sm:mb-4">
            Contact Me
          </h2>
          <p className="text-sm sm:text-base md:text-base text-gray-400">
            I'm always open to discussing new opportunities, collaborations, or
            just a friendly chat about tech.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {/* Email */}
          <div className="bg-[#16181a] p-4 sm:p-6 md:p-6 rounded-2xl shadow-lg hover:shadow-emerald-500/30 transition duration-300 flex items-center space-x-4">
            <FaEnvelope size={25} className="text-emerald-400" />
            <div className="select-none">
              <h3 className="text-lg sm:text-xl md:text-xl font-semibold">Email</h3>
              <a
                href="mailto:tripathirohit297@gmail.com"
                className="text-sm sm:text-base md:text-base text-gray-300 hover:text-emerald-400 transition duration-200 select-none"
              >
                tripathirohit297@gmail.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-[#16181a] p-4 sm:p-6 md:p-6 rounded-2xl shadow-lg hover:shadow-emerald-500/30 transition duration-300 flex items-center space-x-4">
            <FaPhoneAlt size={25} className="text-emerald-400" />
            <div>
              <h3 className="text-lg sm:text-xl md:text-xl font-semibold">Phone</h3>
              <p className="text-sm sm:text-base md:text-base text-gray-300">+91-7052515866</p>
            </div>
          </div>

          {/* GitHub */}
          <div className="bg-[#16181a] p-4 sm:p-6 md:p-6 rounded-2xl shadow-lg hover:shadow-emerald-500/30 transition duration-300 flex items-center space-x-4 cursor-pointer">
            <FaGithub size={25} className="text-emerald-400" />
            <div>
              <a href="https://www.github.com/rohitiwari297" target="_blank" rel="noreferrer">
                <h3 className="text-lg sm:text-xl md:text-xl font-semibold">GitHub</h3>
              </a>
              <p className="text-sm sm:text-base md:text-base text-gray-300">Rohit Kumar Tiwari</p>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="bg-[#16181a] p-4 sm:p-6 md:p-6 rounded-2xl shadow-lg hover:shadow-emerald-500/30 transition duration-300 flex items-center space-x-4 cursor-pointer">
            <FaLinkedin size={25} className="text-emerald-400" />
            <div>
              <a
                href="https://www.linkedin.com/in/rohit-kumar-tiwari-9996ba237/"
                target="_blank"
                rel="noreferrer"
              >
                <h3 className="text-lg sm:text-xl md:text-xl font-semibold">LinkedIn</h3>
              </a>
              <p className="text-sm sm:text-base md:text-base text-gray-300">Rohit Kumar Tiwari</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

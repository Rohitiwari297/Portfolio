import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function Contact() {
  return (
    <section className="bg-gradient-to-b from-[#0b0b0d] via-[#101214] to-[#1a1c1e] text-gray-200 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-emerald-400 mb-4">
            Contact Me
          </h2>
          <p className="text-gray-400">
            I'm always open to discussing new opportunities, collaborations, or
            just a friendly chat about tech.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Email */}
          <div className="bg-[#16181a] p-6 rounded-2xl shadow-lg hover:shadow-emerald-500/30 transition duration-300 flex items-center space-x-4">
            <FaEnvelope size={30} className="text-emerald-400" />
            <div className="select-none">
              <h3 className="text-xl font-semibold">Email</h3>
              <a
                href="mailto:tripathirohit297@gmail.com"
                className="text-gray-300 hover:text-emerald-400 transition duration-200 select-none"
              >
                tripathirohit297@gmail.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-[#16181a] select-none p-6 rounded-2xl shadow-lg hover:shadow-emerald-500/30 transition duration-300 flex items-center space-x-4">
            <FaPhoneAlt size={30} className="text-emerald-400" />
            <div>
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="text-gray-300">+91-120-4570000</p>
            </div>
          </div>

          {/* GitHub */}
          <div className="bg-[#16181a] p-6 rounded-2xl shadow-lg hover:shadow-emerald-500/30 transition duration-300 flex items-center space-x-4 cursor-pointer">
            <FaGithub size={30} className="text-emerald-400" />
            <div>
              <a href="https://www.github.com/rohitiwari297" target="blank">
                <h3 className="text-xl font-semibold">GitHub</h3>
              </a>
              <p className="text-gray-300">Rohit Kumar Tiwari</p>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="bg-[#16181a] p-6 rounded-2xl shadow-lg hover:shadow-emerald-500/30 transition duration-300 flex items-center space-x-4 cursor-pointer">
            <FaLinkedin size={30} className="text-emerald-400" />
            <div>
              <a
                href="https://www.linkedin.com/in/rohit-kumar-tiwari-9996ba237/"
                target="blank"
              >
                <h3 className="text-xl font-semibold">LinkedIn</h3>
              </a>
              <p className="text-gray-300">Rohit Kumar Tiwari</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

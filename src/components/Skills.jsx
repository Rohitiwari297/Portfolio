import React, { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaAws,
  FaServer,
  FaCode,
} from "react-icons/fa";
import { 
  SiMongodb, 
  SiExpress, 
  SiJavascript, 
  SiTailwindcss, 
  SiTypescript, 
  SiMysql, 
  SiRedis, 
  SiNginx, 
  SiDocker,
  SiPostman
} from "react-icons/si";

function Skills() {
  const [filter, setFilter] = useState("All");

  const skillList = [
    { id: 1, name: "JavaScript (ES6+)", category: "Frontend", icon: <SiJavascript size={28} className="text-yellow-400" />, level: 92, tag: "Expert" },
    { id: 2, name: "TypeScript", category: "Backend & DevOps", icon: <SiTypescript size={28} className="text-blue-500" />, level: 85, tag: "Advanced" },
    { id: 3, name: "React.js / Redux", category: "Frontend", icon: <FaReact size={28} className="text-cyan-400" />, level: 90, tag: "Expert" },
    { id: 4, name: "Node.js & Express", category: "Backend & DevOps", icon: <FaNodeJs size={28} className="text-green-500" />, level: 88, tag: "Advanced" },
    { id: 5, name: "Redis Caching", category: "Backend & DevOps", icon: <SiRedis size={28} className="text-red-500" />, level: 82, tag: "Advanced" },
    { id: 6, name: "Nginx Reverse Proxy", category: "Backend & DevOps", icon: <SiNginx size={28} className="text-emerald-400" />, level: 80, tag: "Advanced" },
    { id: 7, name: "MongoDB & Mongoose", category: "Databases", icon: <SiMongodb size={28} className="text-green-400" />, level: 85, tag: "Advanced" },
    { id: 8, name: "MySQL / SQL", category: "Databases", icon: <SiMysql size={28} className="text-blue-400" />, level: 78, tag: "Intermediate" },
    { id: 9, name: "Tailwind CSS", category: "Frontend", icon: <SiTailwindcss size={28} className="text-sky-400" />, level: 90, tag: "Expert" },
    { id: 10, name: "Docker & Containers", category: "Backend & DevOps", icon: <SiDocker size={28} className="text-blue-400" />, level: 75, tag: "Intermediate" },
    { id: 11, name: "Git & GitHub Actions", category: "Backend & DevOps", icon: <FaGitAlt size={28} className="text-orange-500" />, level: 88, tag: "Advanced" },
    { id: 12, name: "Postman & REST APIs", category: "Backend & DevOps", icon: <SiPostman size={28} className="text-orange-400" />, level: 90, tag: "Expert" },
  ];

  const filteredSkills = filter === "All" ? skillList : skillList.filter(s => s.category === filter);

  return (
    <section className="bg-gradient-to-b from-[#0b0b0d] via-[#101318] to-[#14171d] text-gray-200 py-20 px-4 md:px-16 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-wider">
            <FaCode />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-100 tracking-tight">
            Skills & <span className="text-emerald-400">Tech Stack</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Comprehensive toolkit covering full-stack web development, TypeScript microservices, Redis caching layers, and Nginx server infrastructure.
          </p>

          {/* Filter Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-4">
            {["All", "Backend & DevOps", "Frontend", "Databases"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  filter === cat
                    ? "bg-emerald-500 text-gray-950 shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                    : "bg-[#16181e] text-gray-400 hover:text-gray-200 border border-gray-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredSkills.map(({ id, name, icon, level, tag }) => (
            <div
              key={id}
              className="relative bg-[#14161c] border border-gray-800/80 p-6 rounded-2xl shadow-lg hover:border-emerald-500/50 hover:shadow-emerald-500/10 transition duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-[#1c1f26] rounded-xl border border-gray-700/50 group-hover:scale-110 transition-transform duration-300">
                  {icon}
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {tag}
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-100 mb-3">{name}</h3>

              {/* Progress Bar */}
              <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-emerald-500 to-teal-400 h-2.5 rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${level}%` }}
                ></div>
              </div>

              <div className="mt-2 flex justify-between text-xs text-gray-400 font-mono">
                <span>Proficiency</span>
                <span className="text-emerald-400 font-semibold">{level}%</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;

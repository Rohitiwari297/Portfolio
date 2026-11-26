import React, { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaAws,
  FaCode,
  FaRobot,
} from "react-icons/fa";
import {
  SiMongodb,
  SiJavascript,
  SiTailwindcss, 
  SiTypescript, 
  SiMysql, 
  SiRedis, 
  SiNginx, 
  SiDocker,
  SiPostman,
  SiNextdotjs
} from "react-icons/si";

function Skills() {
  const [filter, setFilter] = useState("All");

  const skillList = [
    { id: 1, name: "JavaScript (ES6+)", category: "Frontend", icon: <SiJavascript size={28} className="text-yellow-500" />, tag: "Daily use", usedIn: "Every project, frontend and backend" },
    { id: 2, name: "React.js / Redux Toolkit", category: "Frontend", icon: <FaReact size={28} className="text-orange-400" />, tag: "Daily use", usedIn: "LMS, Freedom Voyages admin panel, grocery platform" },
    { id: 3, name: "Next.js", category: "Frontend", icon: <SiNextdotjs size={28} className="text-gray-100" />, tag: "Working", usedIn: "Frontend projects" },
    { id: 4, name: "TypeScript", category: "Backend & DevOps", icon: <SiTypescript size={28} className="text-blue-600" />, tag: "Working", usedIn: "ERP backend, Wedlock matrimonial backend" },
    { id: 5, name: "Node.js & Express", category: "Backend & DevOps", icon: <FaNodeJs size={28} className="text-green-600" />, tag: "Daily use", usedIn: "All REST APIs: grocery, ERP, travel, LMS, Wedlock" },
    { id: 6, name: "AWS EC2 & Linux VPS Hosting", category: "Backend & DevOps", icon: <FaAws size={28} className="text-orange-300" />, tag: "Working", usedIn: "Grocery platform and Wedlock, with Nginx and PM2" },
    { id: 7, name: "AI Tools (ChatGPT, Claude)", category: "Backend & DevOps", icon: <FaRobot size={28} className="text-orange-300" />, tag: "Daily use", usedIn: "Refactoring, debugging and faster delivery" },
    { id: 8, name: "Redis Caching & Rate Limiting", category: "Backend & DevOps", icon: <SiRedis size={28} className="text-red-600" />, tag: "Working", usedIn: "Grocery platform, ERP, Wedlock" },
    { id: 9, name: "Nginx Reverse Proxy", category: "Backend & DevOps", icon: <SiNginx size={28} className="text-orange-500" />, tag: "Working", usedIn: "Reverse proxy and load balancing on EC2 / VPS" },
    { id: 10, name: "MongoDB & Mongoose", category: "Databases", icon: <SiMongodb size={28} className="text-green-600" />, tag: "Daily use", usedIn: "Schema design across all projects" },
    { id: 11, name: "MySQL / SQL", category: "Databases", icon: <SiMysql size={28} className="text-blue-600" />, tag: "Familiar", usedIn: "Relational database fundamentals" },
    { id: 12, name: "Tailwind CSS", category: "Frontend", icon: <SiTailwindcss size={28} className="text-sky-600" />, tag: "Daily use", usedIn: "LMS and this portfolio" },
    { id: 13, name: "Docker", category: "Backend & DevOps", icon: <SiDocker size={28} className="text-blue-600" />, tag: "Familiar", usedIn: "Basic containerisation" },
    { id: 14, name: "Git & GitHub", category: "Backend & DevOps", icon: <FaGitAlt size={28} className="text-orange-600" />, tag: "Daily use", usedIn: "Version control and collaboration" },
    { id: 15, name: "Postman & REST APIs", category: "Backend & DevOps", icon: <SiPostman size={28} className="text-orange-600" />, tag: "Daily use", usedIn: "API design, testing and documentation" },
  ];

  const filteredSkills = filter === "All" ? skillList : skillList.filter(s => s.category === filter);

  return (
    <section className="bg-gradient-to-b from-[#121212] via-[#121212] to-[#171717] text-gray-200 py-20 px-4 md:px-16 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/40 text-orange-500 text-xs font-mono uppercase tracking-wider">
            <FaCode />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-100 tracking-tight">
            Skills & <span className="text-orange-500">Tech Stack</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            The tools I use to build, secure, speed up and deploy web applications, and where I have used them.
          </p>

          {/* Filter Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-4">
            {["All", "Backend & DevOps", "Frontend", "Databases"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  filter === cat
                    ? "bg-orange-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.35)]"
                    : "bg-[#1c1c1e] text-gray-400 hover:text-gray-200 border border-[#2a2a2d]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredSkills.map(({ id, name, icon, tag, usedIn }) => (
            <div
              key={id}
              className="relative bg-[#1c1c1e] border border-[#2a2a2d] p-6 rounded-2xl shadow-lg hover:border-orange-500/40 hover:shadow-orange-500/10 transition duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-[#242427] rounded-xl border border-[#3a3a3e] group-hover:scale-110 transition-transform duration-300">
                  {icon}
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/40">
                  {tag}
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-100 mb-2">{name}</h3>

              <p className="text-xs text-gray-400 leading-relaxed">
                <span className="text-orange-500 font-mono">Used in: </span>
                {usedIn}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;

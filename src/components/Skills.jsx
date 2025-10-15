import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaAws,
  FaDatabase,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript, SiTailwindcss, SiTypescript, SiMysql } from "react-icons/si";

function Skills() {
  const skillList = [
    { id: 1, name: "JavaScript", icon: <SiJavascript size={30} />, level: 90 },
    { id: 2, name: "TypeScript", icon: <SiTypescript size={30} />, level: 75 },
    { id: 3, name: "React.js", icon: <FaReact size={30} />, level: 85 },
    { id: 4, name: "Tailwind CSS", icon: <SiTailwindcss size={30} />, level: 80 },
    { id: 5, name: "Node.js", icon: <FaNodeJs size={30} />, level: 80 },
    { id: 6, name: "Express.js", icon: <SiExpress size={30} />, level: 75 },
    { id: 7, name: "MongoDB", icon: <SiMongodb size={30} />, level: 70 },
    { id: 8, name: "MySQL", icon: <SiMysql size={30} />, level: 70 },
    { id: 9, name: "Python", icon: <FaPython size={30} />, level: 65 },
    { id: 10, name: "C Programming", icon: <FaDatabase size={30} />, level: 80 },
    { id: 11, name: "AWS", icon: <FaAws size={30} />, level: 65 },
    { id: 12, name: "Git", icon: <FaGitAlt size={30} />, level: 80 },
  ];

  return (
    <section className="bg-gradient-to-b from-[#0b0b0d] via-[#101214] to-[#1a1c1e] text-gray-200 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-emerald-400 mb-4">
            My Skills
          </h2>
          <p className="text-gray-400">
            A showcase of technologies, tools, and frameworks I use regularly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skillList.map(({ id, name, icon, level }) => (
            <div
              key={id}
              className="relative bg-[#16181a] p-6 rounded-2xl shadow-lg hover:shadow-emerald-500/30 transition duration-300"
            >
              {/* Icon + Skill Name */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-emerald-400">{icon}</div>
                <h3 className="text-xl font-semibold">{name}</h3>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div
                  className="bg-emerald-400 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${level}%` }}
                ></div>
              </div>

              <div className="mt-1 text-right text-sm text-gray-300">
                {level}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

import React from "react";
import {
  FaCode,
  FaReact,
  FaServer,
  FaCloud,
  FaDatabase,
  FaRobot,
  FaGitAlt,
  FaShieldAlt,
} from "react-icons/fa";

/* Mirrors the "Technical Skills" section of the resume */
const SKILL_GROUPS = [
  {
    title: "Programming Languages",
    icon: <FaCode />,
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SQL", "C"],
  },
  {
    title: "Front-End Development",
    icon: <FaReact />,
    items: [
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "Responsive Web Design",
      "Mobile Compatibility",
      "UI/UX Collaboration",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Back-End Development",
    icon: <FaServer />,
    items: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "Web Services",
      "Data Integration",
      "Redis Caching",
      "Nginx (Reverse Proxy & Load Balancing)",
    ],
  },
  {
    title: "Cloud & Hosting Platforms",
    icon: <FaCloud />,
    items: [
      "AWS EC2 (Instance Setup & Security Groups)",
      "Linux VPS",
      "Hostinger",
      "Hosting Raja",
      "cPanel Hosting",
      "Netlify",
      "Basic Docker",
    ],
  },
  {
    title: "Databases & Storage",
    icon: <FaDatabase />,
    items: ["MongoDB", "Mongoose", "SQL / MySQL"],
  },
  {
    title: "AI Tools & Generative AI",
    icon: <FaRobot />,
    items: [
      "ChatGPT",
      "Claude AI",
      "Generative AI (Prompt Engineering, Code Refactoring, Debugging & Workflow Optimization)",
    ],
  },
  {
    title: "Version Control & Tools",
    icon: <FaGitAlt />,
    items: ["Git", "GitHub", "Postman", "VS Code", "Bash"],
  },
  {
    title: "Engineering Practices",
    icon: <FaShieldAlt />,
    items: [
      "Troubleshooting & Debugging",
      "Performance Optimization",
      "Web Security (JWT, Role-Based Access, Rate Limiting)",
      "Agile Teamwork",
    ],
  },
];

function Skills() {
  return (
    <section className="bg-gradient-to-b from-[#121212] via-[#121212] to-[#171717] text-gray-200 py-20 px-4 md:px-16 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/40 text-orange-500 text-xs font-mono uppercase tracking-wider">
            <FaCode />
            <span>Technical Skills</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-100 tracking-tight">
            Skills & <span className="text-orange-500">Tech Stack</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            The tools and practices I use to build, secure, speed up and deploy web applications.
          </p>
        </div>

        {/* Category cards (same grouping as the resume) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_GROUPS.map(({ title, icon, items }) => (
            <div
              key={title}
              className="bg-[#1c1c1e] border border-[#2a2a2d] p-6 rounded-2xl shadow-lg hover:border-orange-500/40 transition duration-300 group"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 bg-[#242427] rounded-xl border border-[#3a3a3e] text-orange-500 text-lg group-hover:scale-110 transition-transform duration-300">
                  {icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-100">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs sm:text-sm text-gray-300 bg-[#242427] border border-[#3a3a3e] rounded-lg hover:border-orange-500/50 hover:text-orange-400 transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;

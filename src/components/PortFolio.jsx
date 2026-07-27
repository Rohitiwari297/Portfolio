import React from "react";
import { FaExternalLinkAlt, FaGithub, FaFolderOpen } from "react-icons/fa";
import { SiTypescript, SiRedis, SiNginx, SiReact, SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";

function PortFolio() {
  const projects = [
    {
      id: 1,
      title: "TaazaIt – Multi-Vendor Grocery Platform",
      subtitle: "Full-Stack Grocery E-Commerce Engine (Frontend & Backend)",
      description: "Scalable multi-vendor grocery application featuring customer/vendor/admin role-based authorization, OTP auth, HTTP-only JWT cookies, Redis rate-limiting, and Nginx load balancing.",
      tech: ["React.js", "Node.js", "Express", "Redis", "Nginx", "MongoDB"],
      liveUrl: "https://taazait.com/",
      githubUrl: "https://github.com/Rohitiwari297/backend-node-grocery-api",
      featured: true
    },
    {
      id: 2,
      title: "ERP System (Branch-Wise Management)",
      subtitle: "Multi-Branch Enterprise Resource Backend",
      description: "Complete backend system architected for branch-wise enterprise management. Controls multi-branch data isolation, role-based access, inventory tracking, staff management, and financial reporting APIs.",
      tech: ["TypeScript", "Node.js", "Express", "Redis", "MongoDB", "REST APIs"],
      githubUrl: "https://github.com/Rohitiwari297/ERP_SYSTEM_BRANCH_WISE",
      featured: true
    },
    {
      id: 3,
      title: "Freedom Voyages – Tour & Travel Platform",
      subtitle: "Complete Backend & Admin Panel Frontend",
      description: "Comprehensive travel service platform powering tour packages, instant booking workflows, user trip management, admin panel management, and secure REST APIs.",
      tech: ["Node.js", "Express.js", "React.js", "MongoDB", "REST APIs"],
      liveUrl: "https://freedomvoyages.com/",
      githubUrl: "https://github.com/Rohitiwari297/BACKEND_FREEDOM_VOYAGES_-tours_-_travels-",
      featured: true
    },
    {
      id: 4,
      title: "Simhasth TV (Uff-TV) Admin Panel",
      subtitle: "Video Streaming Content Moderation Portal",
      description: "Admin panel for large video-streaming platform featuring top-viewed video analytics, media push alert notifications, and role-based content moderation.",
      tech: ["React.js", "Bootstrap", "Node.js", "cPanel"],
      liveUrl: "https://rssindia.in.net/uff-tv/",
      githubUrl: "https://github.com/Rohitiwari297",
      featured: true
    },
    {
      id: 5,
      title: "Shyam Aura – Matrimonial Platform Backend & Admin",
      subtitle: "High-Concurrency Backend & Admin Analytics",
      description: "Matrimonial system backend featuring user profile matching algorithms, search filters, chat APIs, JWT auth, rate limiting, and real-time subscription admin dashboard.",
      tech: ["TypeScript", "Node.js", "Express", "Redis", "cPanel/VPS"],
      liveUrl: "https://aura.suryapolypack.com/",
      githubUrl: "https://github.com/Rohitiwari297/Backend---Aura-Matrimonial-App-",
      featured: false
    },
    {
      id: 6,
      title: "E-Commerce Shopping Web App",
      subtitle: "Modern Responsive Shopping Storefront",
      description: "Feature-rich e-commerce frontend built with React.js and Redux Toolkit, offering smooth shopping cart management, product filter workflows, and responsive UI.",
      tech: ["React.js", "Redux Toolkit", "Tailwind CSS"],
      githubUrl: "https://github.com/Rohitiwari297/-E-Commerce-Shopping-App",
      featured: false
    },
    {
      id: 7,
      title: "Scalable Mobile App Backend Architecture",
      subtitle: "TypeScript & Redis Backend Microservice",
      description: "High-performance Node.js & TypeScript backend service focusing on secure authentication, Redis cache acceleration, database indexing, and Nginx reverse proxying.",
      tech: ["TypeScript", "Node.js", "Express", "Redis", "Nginx"],
      githubUrl: "https://github.com/Rohitiwari297/NEW_APP_BACKEND",
      featured: false
    }
  ];

  return (
    <section className="bg-gradient-to-b from-[#0b0b0d] via-[#101318] to-[#14171d] text-gray-200 py-20 px-4 md:px-16 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-wider">
            <FaFolderOpen />
            <span>Featured Work & GitHub Repos</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-100 tracking-tight">
            Production Projects & <span className="text-emerald-400">Open Source</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">
            Demonstrated work featuring TypeScript, Branch-Wise ERP Backends, Redis caching, Nginx reverse proxies, Node.js microservices, and responsive React frontend applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`relative bg-[#14161d] border rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1.5 ${
                project.featured 
                  ? "border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.1)] hover:shadow-emerald-500/20" 
                  : "border-gray-800 hover:border-gray-700"
              }`}
            >
              {/* Header Badges */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    {project.featured ? "Featured Project" : "GitHub Repository"}
                  </span>
                  <div className="flex space-x-3 text-gray-400">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-emerald-400 transition-colors text-lg"
                        title="View GitHub Repository"
                      >
                        <FaGithub />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-cyan-400 transition-colors text-lg"
                        title="Visit Live Application"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h2 className="text-xl font-bold text-gray-100 group-hover:text-emerald-400 transition-colors mb-1">
                  {project.title}
                </h2>
                <p className="text-xs text-emerald-400/80 font-mono mb-3">{project.subtitle}</p>

                {/* Description */}
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Footer Tech Stack & Buttons */}
              <div className="space-y-4 pt-4 border-t border-gray-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-[10px] font-mono bg-[#1c1f28] text-gray-300 rounded border border-gray-700/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-2 px-3 text-center text-xs font-bold uppercase tracking-wider bg-emerald-500 hover:bg-emerald-400 text-gray-950 rounded-lg transition-all shadow-md"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-2 px-3 text-center text-xs font-bold uppercase tracking-wider bg-[#1d212b] hover:bg-[#252a37] text-gray-200 rounded-lg border border-gray-700 transition-all"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Repos Banner */}
        <div className="bg-gradient-to-r from-[#141720] via-[#1a1e29] to-[#141720] border border-emerald-500/30 rounded-2xl p-8 text-center space-y-4 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-100">Want to explore all my open-source projects?</h3>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Visit my official GitHub profile to inspect active repositories, REST API backends, and full-stack implementations.
          </p>
          <a
            href="https://github.com/Rohitiwari297?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg"
          >
            <FaGithub className="text-base" />
            <span>Browse Rohitiwari297 on GitHub</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default PortFolio;

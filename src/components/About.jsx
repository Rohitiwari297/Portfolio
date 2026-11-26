import React, { useEffect, useState } from "react";
import { FaGraduationCap, FaBriefcase, FaAward, FaUserCheck, FaGithub, FaDownload } from "react-icons/fa";

function About() {
  const [githubData, setGithubData] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/Rohitiwari297")
      .then((res) => res.json())
      .then((data) => setGithubData(data))
      .catch((err) => console.error("GitHub fetch error:", err));
  }, []);

  return (
    <section className="bg-gradient-to-b from-[#0b0b0d] via-[#101318] to-[#14171d] text-gray-200 min-h-screen py-20 px-4 md:px-16">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-indigo-400 tracking-tight">
            About Me
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Full Stack Developer building secure, fast web applications: Node.js APIs backed by Redis and Nginx, with responsive React frontends.
          </p>
        </div>

        {/* Content Sections Grid */}
        <div className="space-y-8">
          
          {/* Who I Am */}
          <div className="bg-[#14161d] border border-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:border-indigo-500/40 transition">
            <div className="flex items-center space-x-3 text-indigo-400 mb-4">
              <FaUserCheck className="text-2xl" />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-100">Engineering Profile</h2>
            </div>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Hello, I’m <span className="text-indigo-300 font-bold">Rohit Kumar Tiwari</span>, a Full Stack Developer with ~2 years of experience (including an internship) building production web applications with <span className="text-indigo-400 font-medium">React.js, Next.js, Node.js, Express.js, TypeScript and MongoDB</span>. I enjoy backend work: secure REST APIs, role-based access, caching with <span className="text-indigo-400 font-medium">Redis</span>, and deployments behind <span className="text-indigo-400 font-medium">Nginx</span> on <span className="text-indigo-400 font-medium">AWS EC2, Linux VPS and cPanel</span>. I also use <span className="text-indigo-400 font-medium">AI tools (ChatGPT, Claude)</span> to refactor, debug and ship faster.
            </p>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
              <div className="p-3 rounded-xl bg-[#12141a] border border-gray-800">
                <p className="text-indigo-400 font-bold">Secure APIs</p>
                <p className="text-gray-400 mt-1">RBAC, OTP login, HTTP-only JWT cookies, rate limiting</p>
              </div>
              <div className="p-3 rounded-xl bg-[#12141a] border border-gray-800">
                <p className="text-indigo-400 font-bold">Performance</p>
                <p className="text-gray-400 mt-1">Redis caching and Nginx reverse proxy / load balancing</p>
              </div>
              <div className="p-3 rounded-xl bg-[#12141a] border border-gray-800">
                <p className="text-indigo-400 font-bold">Deployment</p>
                <p className="text-gray-400 mt-1">AWS EC2, Linux VPS, PM2, cPanel hosting</p>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="bg-[#14161d] border border-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:border-indigo-500/40 transition space-y-6">
            <div className="flex items-center space-x-3 text-indigo-400">
              <FaBriefcase className="text-2xl" />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-100">Work Experience</h2>
            </div>

            {/* Experience 1 */}
            <div className="border-l-2 border-indigo-500/60 pl-4 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <h3 className="text-lg font-bold text-gray-100">Junior Full Stack Developer</h3>
                <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded border border-indigo-500/30 w-fit">
                  Apr 2025 – Present
                </span>
              </div>
              <p className="text-xs text-gray-400 font-mono">RSS Infotech Pvt. Ltd.</p>
              <ul className="text-xs sm:text-sm text-gray-300 space-y-1.5 list-disc list-inside pt-1">
                <li>Built full-stack features for a multi-vendor grocery e-commerce platform with RBAC, OTP authentication and HTTP-only JWT cookies.</li>
                <li>Developed REST APIs and backends for an ERP (multi-branch data isolation, inventory, financial reporting), a tour &amp; travel platform with a React admin panel, an LMS and a matrimonial app.</li>
                <li>Added Redis caching, rate limiting and Nginx reverse proxy / load balancing to troubleshoot latency and improve performance.</li>
                <li>Set up and deployed applications on AWS EC2 (instances, security groups), Linux VPS and cPanel using PM2 and Nginx.</li>
                <li>Used AI tools (ChatGPT, Claude) for code refactoring, debugging and faster delivery.</li>
              </ul>
            </div>

            {/* Experience 2 */}
            <div className="border-l-2 border-cyan-500/60 pl-4 space-y-2 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <h3 className="text-lg font-bold text-gray-100">React.js Developer Intern</h3>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded border border-cyan-500/30 w-fit">
                  Oct 2024 – Mar 2025
                </span>
              </div>
              <p className="text-xs text-gray-400 font-mono">Drishtee Development & Communication Ltd.</p>
              <ul className="text-xs sm:text-sm text-gray-300 space-y-1.5 list-disc list-inside pt-1">
                <li>Built React.js front-end features for the Drishtee Kiosk Portal, streamlining document verification for employees.</li>
                <li>Worked with UX/UI designers on responsive interfaces for mobile and desktop, integrating data from backend REST services.</li>
                <li>Debugged front-end issues and improved UI responsiveness and productivity by 35%.</li>
              </ul>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Education */}
            <div className="bg-[#14161d] border border-gray-800 rounded-2xl p-6 shadow-lg space-y-3">
              <div className="flex items-center space-x-3 text-indigo-400">
                <FaGraduationCap className="text-2xl" />
                <h2 className="text-lg font-bold text-gray-100">Education</h2>
              </div>
              <h3 className="text-base font-bold text-gray-200">Master of Computer Science (CS)</h3>
              <p className="text-xs text-gray-400 font-mono">Veer Bahadur Singh Purvanchal University, UP (2023)</p>
              <p className="text-xs text-gray-300">Specialized in Full-Stack Web Development, Data Structures, Software Engineering, and Database Architecture.</p>
            </div>

            {/* Certifications */}
            <div className="bg-[#14161d] border border-gray-800 rounded-2xl p-6 shadow-lg space-y-3">
              <div className="flex items-center space-x-3 text-indigo-400">
                <FaAward className="text-2xl" />
                <h2 className="text-lg font-bold text-gray-100">Certifications</h2>
              </div>
              <ul className="text-xs sm:text-sm text-gray-300 space-y-2 font-medium">
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
                  <span>Full-Stack Web Development Bootcamp – Physics Wallah</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
                  <span>JavaScript Essentials – Physics Wallah</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
                  <span>React.js Basics – Physics Wallah</span>
                </li>
              </ul>
            </div>
          </div>

          {/* GitHub Live Card */}
          {githubData && (
            <div className="bg-gradient-to-r from-[#141720] via-[#1a1e29] to-[#141720] border border-indigo-500/30 rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-indigo-400 flex items-center space-x-2">
                  <FaGithub />
                  <span>GitHub Profile Activity</span>
                </h2>
                <a
                  href="/Rohit_Kumar_Tiwari_Resume.pdf"
                  download="Rohit_Kumar_Tiwari_Resume.pdf"
                  className="inline-flex items-center space-x-2 px-3 py-1.5 bg-indigo-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-indigo-400 transition"
                >
                  <FaDownload />
                  <span>Download Resume</span>
                </a>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <img
                  src={githubData.avatar_url}
                  alt="GitHub Avatar"
                  className="w-24 h-24 rounded-full border-2 border-indigo-400 shadow-md"
                />
                <div className="space-y-2 text-center sm:text-left">
                  <h3 className="text-lg font-bold text-gray-100">{githubData.name} (@{githubData.login})</h3>
                  <p className="text-xs sm:text-sm text-gray-300">{githubData.bio || "Full Stack Web Developer & Software Engineer"}</p>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-xs font-mono text-gray-400 pt-1">
                    <span className="px-2.5 py-1 bg-[#12141a] rounded border border-gray-800">Public Repos: <strong className="text-indigo-400">{githubData.public_repos}</strong></span>
                    <span className="px-2.5 py-1 bg-[#12141a] rounded border border-gray-800">Followers: <strong className="text-indigo-400">{githubData.followers}</strong></span>
                    <span className="px-2.5 py-1 bg-[#12141a] rounded border border-gray-800">Following: <strong className="text-indigo-400">{githubData.following}</strong></span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

export default About;

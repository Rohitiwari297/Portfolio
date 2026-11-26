import React, { useEffect, useState } from "react";
import {
  FaGraduationCap,
  FaBriefcase,
  FaAward,
  FaUserCheck,
  FaGithub,
  FaDownload,
  FaStar,
  FaLanguage,
  FaExternalLinkAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

/* ---------- Content (mirrors the resume) ---------- */

const SUMMARY =
  "Full Stack Developer specializing in JavaScript (ES6+), TypeScript, React.js, Next.js, Node.js, and Express.js with MongoDB and SQL databases. Experienced in building low-latency RESTful APIs, implementing Redis caching and Nginx load balancing, and deploying scalable applications across AWS EC2, Linux VPS, and cPanel environments. Leverages AI tools and CI/CD best practices to accelerate feature delivery, optimize performance, and solve complex engineering problems in fast-paced, dynamic team environments.";

const GH = "https://github.com/Rohitiwari297";

const PROJECTS = [
  {
    no: 1,
    title: "Multi-Vendor Grocery Platform",
    sub: "Palace of Flavours (Frontend & Backend)",
    live: "https://palaceofflavours.com.au/",
    repo: `${GH}/backend-node-grocery-api`,
    stack: ["JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "Redis", "Nginx", "AWS EC2", "RESTful APIs", "Git"],
    points: [
      "Engineered full-stack web application features using React.js and Node.js for a multi-vendor grocery e-commerce platform.",
      "Built RESTful APIs and integrated MongoDB database services with role-based access control, OTP authentication, and HTTP-only JWT cookies.",
      "Configured server environments and hosted application services on AWS EC2 instances using Nginx reverse proxying and PM2.",
      "Implemented Redis rate-limiting and Nginx reverse proxying to troubleshoot latency and optimize web application performance.",
    ],
  },
  {
    no: 2,
    title: "ERP System (Branch-Wise Management)",
    sub: "Multi-branch enterprise backend",
    live: "https://api.shantielectricals.tech/login",
    repo: `${GH}/ERP_SYSTEM_BRANCH_WISE`,
    stack: ["JavaScript", "TypeScript", "Node.js", "Express.js", "Redis", "MongoDB", "RESTful APIs"],
    points: [
      "Architected and implemented enterprise resource management backend APIs using Node.js, Express, and MongoDB.",
      "Designed multi-branch data isolation, inventory tracking, role-based access, and financial reporting RESTful services.",
    ],
  },
  {
    no: 3,
    title: "Freedom Voyages",
    sub: "Tour & Travel Platform (Complete Backend & Admin Panel Frontend)",
    live: "https://freedomvoyages.com/",
    repo: `${GH}/BACKEND_FREEDOM_VOYAGES_-tours_-_travels-`,
    stack: ["JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "RESTful APIs", "Git"],
    points: [
      "Developed complete Node.js backend services and responsive React.js Admin Panel for tour and travel booking platform.",
      "Integrated backend data with custom React UI components, enabling real-time package updates and user trip management.",
    ],
  },
  {
    no: 4,
    title: "Learning Management System (LMS)",
    sub: "Hosted on cPanel server",
    live: "https://rssindia.in.net/lms-plateform/",
    repo: `${GH}/LMS-E`,
    stack: ["JavaScript", "React.js", "Tailwind CSS", "Redux Toolkit", "Node.js", "MongoDB", "RESTful APIs"],
    points: [
      "Built an end-to-end Learning Management System from scratch using React and Node.js/Express, delivering a responsive interface for course browsing, enrollment, and progress tracking.",
      "Developed RESTful APIs and designed structured database schemas in MongoDB to efficiently manage user profiles, course modules, and learning content.",
      "Implemented secure user authentication (JWT/OAuth) and Role-Based Access Control (RBAC) to enforce distinct permissions across Admin, Instructor, and Student dashboards.",
    ],
  },
  {
    no: 5,
    title: "Wedlock",
    sub: "Matrimonial Application (Backend & Admin Panel)",
    live: "https://wedlock.com.au/",
    repo: `${GH}/Backend---Aura-Matrimonial-App-`,
    stack: ["JavaScript", "TypeScript", "Node.js", "Express.js", "Redis", "AWS EC2 / VPS", "RESTful APIs", "Nginx"],
    points: [
      "Architected scalable backend microservices for matrimonial user onboarding, profile matching, search filters, and chat APIs.",
      "Integrated JWT authentication, Redis caching, rate-limiting, and deployed Node.js backend on AWS EC2 / VPS cloud environment.",
    ],
  },
];

const STRENGTHS = [
  ["Problem-Solving & Debugging", "Efficient root-cause diagnosis and code optimization."],
  ["Cross-Functional Collaboration", "Seamless teamwork with UI/UX designers, backend developers, and product teams."],
  ["Adaptability", "Fast learner staying continuously updated with emerging web technologies, cloud infrastructure, and AI tools."],
];

const CERTIFICATIONS = [
  "Full-Stack Web Development Bootcamp – Physics Wallah",
  "JavaScript & Backend – Physics Wallah",
  "System Design – Physics Wallah",
];

/* ---------- Small building blocks ---------- */

function Section({ icon, title, children }) {
  return (
    <div className="bg-[#1c1c1e] border border-[#2a2a2d] rounded-2xl p-6 sm:p-8 shadow-lg">
      <div className="flex items-center space-x-3 mb-5 pb-3 border-b border-[#2a2a2d]">
        <span className="text-orange-500 text-xl">{icon}</span>
        <h2 className="text-lg sm:text-xl font-extrabold text-gray-100 uppercase tracking-wider">{title}</h2>
      </div>
      {children}
    </div>
  );
}

function Chip({ children }) {
  return (
    <span className="px-2 py-0.5 text-[10px] sm:text-[11px] font-mono bg-[#242427] text-gray-300 rounded border border-[#3a3a3e]">
      {children}
    </span>
  );
}

function LinkPill({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center space-x-1.5 px-2.5 py-1 text-[11px] font-mono font-semibold rounded-md bg-orange-500/10 text-orange-500 border border-orange-500/40 hover:bg-orange-500/20 transition"
    >
      {children}
    </a>
  );
}

function About() {
  const [githubData, setGithubData] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/Rohitiwari297")
      .then((res) => res.json())
      .then((data) => setGithubData(data))
      .catch((err) => console.error("GitHub fetch error:", err));
  }, []);

  return (
    <section className="bg-gradient-to-b from-[#121212] via-[#121212] to-[#171717] text-gray-200 min-h-screen py-20 px-4 md:px-16">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Resume-style header */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-100 tracking-tight">
            Rohit Kumar <span className="text-orange-500">Tiwari</span>
          </h1>
          <p className="text-orange-500 font-mono text-sm sm:text-base uppercase tracking-widest">Full Stack Developer</p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs sm:text-sm text-gray-400">
            <span className="inline-flex items-center space-x-1.5"><FaMapMarkerAlt className="text-orange-500" /><span>Delhi, India</span></span>
            <a href="mailto:tripathirohit297@gmail.com" className="inline-flex items-center space-x-1.5 hover:text-orange-500 transition">
              <FaEnvelope className="text-orange-500" /><span>tripathirohit297@gmail.com</span>
            </a>
            <a href={GH} target="_blank" rel="noreferrer" className="inline-flex items-center space-x-1.5 hover:text-orange-500 transition">
              <FaGithub className="text-orange-500" /><span>github.com/Rohitiwari297</span>
            </a>
          </div>
          <a
            href="/Rohit_Kumar_Tiwari_Resume.pdf"
            download="Rohit_Kumar_Tiwari_Resume.pdf"
            className="inline-flex items-center space-x-2 px-5 py-2.5 mt-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition shadow-[0_0_15px_rgba(249,115,22,0.35)]"
          >
            <FaDownload />
            <span>Download Resume</span>
          </a>
        </div>

        {/* SUMMARY */}
        <Section icon={<FaUserCheck />} title="Summary">
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{SUMMARY}</p>
        </Section>

        {/* PROFESSIONAL EXPERIENCE */}
        <Section icon={<FaBriefcase />} title="Professional Experience">
          <div className="space-y-10">

            {/* Role 1 */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-gray-100">Junior Full Stack Developer</h3>
                  <p className="text-sm text-orange-500 font-mono">RSS Infotech Pvt. Ltd.</p>
                </div>
                <span className="text-xs font-mono text-orange-500 bg-orange-500/10 px-2.5 py-1 rounded border border-orange-500/40 w-fit">
                  04/2025 – Present
                </span>
              </div>

              <div className="mt-5 space-y-5">
                {PROJECTS.map((p) => (
                  <div key={p.no} className="border-l-2 border-orange-500/40 pl-4 space-y-2.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-base font-bold text-gray-100">
                        <span className="text-orange-500">{p.no}.</span> {p.title}
                        <span className="text-gray-400 font-medium"> – {p.sub}</span>
                      </h4>
                      <div className="flex gap-2">
                        {p.live && (
                          <LinkPill href={p.live}>
                            <FaExternalLinkAlt className="text-[10px]" /><span>Live</span>
                          </LinkPill>
                        )}
                        {p.repo && (
                          <LinkPill href={p.repo}>
                            <FaGithub /><span>GitHub</span>
                          </LinkPill>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 items-center">
                      <span className="text-[11px] font-mono text-gray-500 mr-1">Tech Stack:</span>
                      {p.stack.map((t) => <Chip key={t}>{t}</Chip>)}
                    </div>
                    <ul className="text-xs sm:text-sm text-gray-300 space-y-1.5 list-disc list-outside pl-5 marker:text-orange-500">
                      {p.points.map((pt) => <li key={pt}>{pt}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Role 2 */}
            <div className="pt-6 border-t border-[#2a2a2d]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-gray-100">React.js Developer Intern</h3>
                  <p className="text-sm text-orange-500 font-mono">Drishtee Development &amp; Communication Limited</p>
                </div>
                <span className="text-xs font-mono text-orange-500 bg-orange-500/10 px-2.5 py-1 rounded border border-orange-500/40 w-fit">
                  10/2024 – 03/2025
                </span>
              </div>
              <ul className="mt-4 text-xs sm:text-sm text-gray-300 space-y-1.5 list-disc list-outside pl-5 marker:text-orange-500">
                <li>Developed and implemented high-quality front-end features using JavaScript, React.js, HTML, and CSS for the Drishtee Kiosk Portal.</li>
                <li>Collaborated with UX/UI designers to craft user-friendly, responsive interfaces optimized for mobile and desktop compatibility.</li>
                <li>Integrated data from backend RESTful services and databases to streamline document verification workflows for internal users.</li>
                <li>Troubleshot and debugged front-end web application issues, improving UI responsiveness and user productivity by 35%.</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* EDUCATION */}
        <Section icon={<FaGraduationCap />} title="Education">
          <h3 className="text-base sm:text-lg font-bold text-gray-100">Master of Computer Science (CS)</h3>
          <p className="text-sm text-orange-500 font-mono">Veer Bahadur Singh Purvanchal University, Uttar Pradesh</p>
          <ul className="mt-3 text-xs sm:text-sm text-gray-300 space-y-1.5 list-disc list-outside pl-5 marker:text-orange-500">
            <li>Specialized in Full-Stack Web Development (MERN Stack: React.js, Node.js, JavaScript).</li>
            <li>Coursework in Software Engineering, Web Development, Database Management, and Data Structures.</li>
          </ul>
        </Section>

        {/* KEY STRENGTHS */}
        <Section icon={<FaStar />} title="Key Strengths">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {STRENGTHS.map(([title, text]) => (
              <div key={title} className="p-4 rounded-xl bg-[#242427] border border-[#2a2a2d]">
                <p className="text-orange-500 font-bold text-sm">{title}</p>
                <p className="text-gray-400 text-xs sm:text-sm mt-1 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* CERTIFICATIONS + LANGUAGES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Section icon={<FaAward />} title="Certifications">
              <ul className="text-sm text-gray-300 space-y-2.5 font-medium">
                {CERTIFICATIONS.map((c) => (
                  <li key={c} className="flex items-center space-x-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0"></span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </Section>
          </div>
          <Section icon={<FaLanguage />} title="Languages">
            <ul className="text-sm text-gray-300 space-y-2.5 font-medium">
              {["English", "Hindi"].map((l) => (
                <li key={l} className="flex items-center space-x-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0"></span>
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </Section>
        </div>

        {/* GitHub Live Card */}
        {githubData && githubData.login && (
          <div className="bg-gradient-to-r from-[#1c1c1e] via-[#222225] to-[#1c1c1e] border border-orange-500/40 rounded-2xl p-6 sm:p-8 shadow-xl">
            <h2 className="text-xl font-bold text-orange-500 flex items-center space-x-2 mb-4">
              <FaGithub />
              <span>GitHub Profile Activity</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <img
                src={githubData.avatar_url}
                alt="GitHub Avatar"
                className="w-24 h-24 rounded-full border-2 border-orange-500/40 shadow-md"
              />
              <div className="space-y-2 text-center sm:text-left">
                <h3 className="text-lg font-bold text-gray-100">{githubData.name} (@{githubData.login})</h3>
                <p className="text-xs sm:text-sm text-gray-300">{githubData.bio || "Full Stack Web Developer & Software Engineer"}</p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-xs font-mono text-gray-400 pt-1">
                  <span className="px-2.5 py-1 bg-[#242427] rounded border border-[#2a2a2d]">Public Repos: <strong className="text-orange-500">{githubData.public_repos}</strong></span>
                  <span className="px-2.5 py-1 bg-[#242427] rounded border border-[#2a2a2d]">Followers: <strong className="text-orange-500">{githubData.followers}</strong></span>
                  <span className="px-2.5 py-1 bg-[#242427] rounded border border-[#2a2a2d]">Following: <strong className="text-orange-500">{githubData.following}</strong></span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default About;

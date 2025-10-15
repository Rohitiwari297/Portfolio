import React, { useEffect, useState } from "react";

function About() {
  const [githubData, setGithubData] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/rohitiwari297")
      .then((res) => res.json())
      .then((data) => setGithubData(data))
      .catch((err) => console.error("GitHub fetch error:", err));
  }, []);

  return (
    <section className="bg-gradient-to-b from-[#0b0b0d] via-[#101214] to-[#1a1c1e] text-gray-200 min-h-screen py-16 px-4 md:px-16">
      <div className="max-w-5xl mx-auto space-y-10 md:space-y-12">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-emerald-400 mb-3 sm:mb-4 tracking-tight">
            About Me
          </h1>
          <p className="text-sm sm:text-base md:text-gray-400 max-w-2xl mx-auto">
            I’m a passionate Full Stack Developer focused on crafting smooth, modern, and scalable web experiences.
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-6 sm:gap-8 md:gap-12">
          
          {/* Intro */}
          <div className="bg-[#16181a] rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-emerald-600/20 transition">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-emerald-400 mb-2 sm:mb-3">
              Who I Am
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Hello, I’m <span className="text-emerald-300 font-semibold">Rohit Kumar Tiwari</span>, a creative and goal-driven Full Stack Developer specializing in the{" "}
              <span className="text-emerald-400 font-medium">MERN stack</span>. I have a passion for designing and developing responsive, user-friendly, and visually appealing web applications.
              My approach combines clean code, modern UI design, and robust backend systems.
            </p>
          </div>

          {/* Education */}
          <div className="bg-[#16181a] rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-emerald-600/20 transition">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-emerald-400 mb-2 sm:mb-3">
              Education & Training
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              🎓 <span className="font-medium text-emerald-300">M.Sc. in Computer Science</span> — Veer Bahadur Singh Purvanchal University (2023)
              <br />
              💻 <span className="font-medium text-emerald-300">Full Stack Development Certification</span> — Physics Wallah
              <br />
              I gained strong foundations in Data Structures, Algorithms, Databases, React, Node.js, and API Development — enabling me to build end-to-end solutions.
            </p>
          </div>

          {/* Skills */}
          <div className="bg-[#16181a] rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-emerald-600/20 transition">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-emerald-400 mb-2 sm:mb-3">
              Skills & Expertise
            </h2>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 text-sm sm:text-base text-gray-300">
              <ul className="space-y-1 sm:space-y-2">
                <li>🚀 JavaScript, Python, SQL</li>
                <li>⚛️ React.js, Next.js, Tailwind CSS</li>
                <li>🌐 Node.js, Express.js, MongoDB</li>
              </ul>
              <ul className="space-y-1 sm:space-y-2">
                <li>🧩 RESTful APIs, JWT Auth, Firebase</li>
                <li>🧰 Git, Docker, Postman</li>
                <li>🧠 Clean Code & Scalable Architecture</li>
              </ul>
            </div>
          </div>

          {/* Experience */}
          <div className="bg-[#16181a] rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-emerald-600/20 transition">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-emerald-400 mb-2 sm:mb-3">
              Professional Experience
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              <strong className="text-emerald-300">Front-End Intern</strong> — Drishtee Development and Communication Ltd.
              <br />
              Contributed to the <span className="text-emerald-400 font-medium">Drishtee Kiosk Portal</span>, enhancing user experience for CSPs and admins. Built responsive UI components using React.js, integrated backend APIs, and improved document verification flows. Focused on performance optimization, accessibility, and clean UI/UX design.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-[#16181a] rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-emerald-600/20 transition">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-emerald-400 mb-2 sm:mb-3">
              Mission Statement
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              My mission is to build meaningful, elegant web solutions that empower people and businesses.  
              I believe in continuous learning, innovation, and using technology as a force for good — one project at a time.
            </p>
          </div>

          {/* GitHub Card */}
          {githubData && (
            <div className="bg-gradient-to-r from-[#1a1d20] to-[#141618] rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg border border-emerald-700/30">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-emerald-400 mb-4 sm:mb-5">
                GitHub Profile
              </h2>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                <img
                  src={githubData.avatar_url}
                  alt="GitHub Avatar"
                  className="w-20 h-20 sm:w-28 sm:h-28 rounded-full border-2 border-emerald-400 shadow-md"
                />
                <div>
                  <h3 className="text-base sm:text-xl font-semibold">{githubData.name}</h3>
                  <p className="text-sm sm:text-gray-400 mb-1">@{githubData.login}</p>
                  <p className="text-sm sm:text-gray-300 mb-2">{githubData.bio}</p>
                  <div className="flex flex-wrap gap-4 text-gray-400 text-xs sm:text-sm">
                    <span>Repos: {githubData.public_repos}</span>
                    <span>Followers: {githubData.followers}</span>
                    <span>Following: {githubData.following}</span>
                  </div>
                  <a
                    href={githubData.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-3 px-4 py-1 sm:px-5 sm:py-2 bg-emerald-500 text-gray-900 font-medium rounded-lg hover:bg-emerald-400 transition-transform transform hover:scale-105 text-sm sm:text-base"
                  >
                    Visit GitHub
                  </a>
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

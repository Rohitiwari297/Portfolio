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
    <section className="bg-gradient-to-b from-[#0b0b0d] via-[#101214] to-[#1a1c1e] text-gray-200 min-h-screen py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-400 mb-4 tracking-tight">
            About Me
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I’m a passionate Full Stack Developer focused on crafting smooth, modern, and scalable web experiences.
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-10 md:gap-12">
          {/* Intro */}
          <div className="bg-[#16181a] rounded-2xl p-8 shadow-lg hover:shadow-emerald-600/20 transition">
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
              Who I Am
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Hello, I’m <span className="text-emerald-300 font-semibold">Rohit Kumar Tiwari</span>, a creative and goal-driven Full Stack Developer specializing in the{" "}
              <span className="text-emerald-400 font-medium">MERN stack</span>. I have a passion for designing and developing responsive, user-friendly, and visually appealing web applications.
              My approach combines clean code, modern UI design, and robust backend systems.
            </p>
          </div>

          {/* Education */}
          <div className="bg-[#16181a] rounded-2xl p-8 shadow-lg hover:shadow-emerald-600/20 transition">
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
              Education & Training
            </h2>
            <p className="text-gray-300 leading-relaxed">
              🎓 <span className="font-medium text-emerald-300">M.Sc. in Computer Science</span> — Veer Bahadur Singh Purvanchal University (2023)
              <br />
              💻 <span className="font-medium text-emerald-300">Full Stack Development Certification</span> — Physics Wallah
              <br />
              I gained strong foundations in Data Structures, Algorithms, Databases, React, Node.js, and API Development — enabling me to build end-to-end solutions.
            </p>
          </div>

          {/* Skills */}
          <div className="bg-[#16181a] rounded-2xl p-8 shadow-lg hover:shadow-emerald-600/20 transition">
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
              Skills & Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-gray-300">
              <ul className="space-y-2">
                <li>🚀 JavaScript, Python, SQL</li>
                <li>⚛️ React.js, Next.js, Tailwind CSS</li>
                <li>🌐 Node.js, Express.js, MongoDB</li>
              </ul>
              <ul className="space-y-2">
                <li>🧩 RESTful APIs, JWT Auth, Firebase</li>
                <li>🧰 Git, Docker, Postman</li>
                <li>🧠 Clean Code & Scalable Architecture</li>
              </ul>
            </div>
          </div>

          {/* Experience */}
          <div className="bg-[#16181a] rounded-2xl p-8 shadow-lg hover:shadow-emerald-600/20 transition">
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
              Professional Experience
            </h2>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-emerald-300">Front-End Intern</strong> — Drishtee Development and Communication Ltd.
              <br />
              Contributed to the <span className="text-emerald-400 font-medium">Drishtee Kiosk Portal</span>, enhancing user experience for CSPs and admins. Built responsive UI components using React.js, integrated backend APIs, and improved document verification flows. Focused on performance optimization, accessibility, and clean UI/UX design.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-[#16181a] rounded-2xl p-8 shadow-lg hover:shadow-emerald-600/20 transition">
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
              Mission Statement
            </h2>
            <p className="text-gray-300 leading-relaxed">
              My mission is to build meaningful, elegant web solutions that empower people and businesses.  
              I believe in continuous learning, innovation, and using technology as a force for good — one project at a time.
            </p>
          </div>

          {/* GitHub Card */}
          {githubData && (
            <div className="bg-gradient-to-r from-[#1a1d20] to-[#141618] rounded-2xl p-8 shadow-lg border border-emerald-700/30">
              <h2 className="text-2xl font-semibold text-emerald-400 mb-5">
                GitHub Profile
              </h2>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <img
                  src={githubData.avatar_url}
                  alt="GitHub Avatar"
                  className="w-28 h-28 rounded-full border-2 border-emerald-400 shadow-md"
                />
                <div>
                  <h3 className="text-xl font-semibold">{githubData.name}</h3>
                  <p className="text-gray-400 mb-2">@{githubData.login}</p>
                  <p className="text-gray-300 mb-3">{githubData.bio}</p>
                  <div className="flex gap-6 text-gray-400 text-sm">
                    <span>Repos: {githubData.public_repos}</span>
                    <span>Followers: {githubData.followers}</span>
                    <span>Following: {githubData.following}</span>
                  </div>
                  <a
                    href={githubData.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-5 px-5 py-2 bg-emerald-500 text-gray-900 font-medium rounded-lg hover:bg-emerald-400 transition-transform transform hover:scale-105"
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

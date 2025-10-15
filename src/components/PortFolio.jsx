import clang from "../../public/clang.png";
import express from "../../public/express.jpeg";
import react from "../../public/react.png";
import js from "../../public/JavaScript.png";
import mongo from "../../public/MongoDB.png";
import node from "../../public/Node.jpeg";

function PortFolio() {
  const cardItem = [
    { id: 1, logo: clang, name: "C Programming" },
    { id: 2, logo: express, name: "Express.js" },
    { id: 3, logo: react, name: "React.js" },
    { id: 4, logo: js, name: "JavaScript" },
    { id: 5, logo: mongo, name: "MongoDB" },
    { id: 6, logo: node, name: "Node.js" },
  ];

  return (
    <section className="bg-gradient-to-b from-[#0b0b0d] via-[#101214] to-[#1a1c1e] text-gray-200 py-16 px-6 md:px-20">
      <div className="max-w-screen-2xl container mx-auto text-center">
        
        {/* Heading */}
        <h1 className="text-4xl font-extrabold mb-3 text-emerald-400">
          Portfolio
        </h1>
        <p className="text-gray-400 mb-10 text-base">
          A showcase of the tools, technologies, and frameworks I’ve worked with.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {cardItem.map(({ id, logo, name }) => (
            <div
              key={id}
              className="relative bg-[#111315] border border-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 hover:border-emerald-500 transition-all duration-300 group"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 blur-md transition duration-500"></div>

              {/* Tech Icon */}
              <img
                src={logo}
                alt={name}
                className="w-28 h-28 object-contain rounded-full border-2 border-gray-700 mb-4 group-hover:border-emerald-400 transition-all duration-300"
              />

              {/* Name */}
              <h2 className="text-xl font-semibold text-gray-100 mb-2">
                {name}
              </h2>
              <p className="text-gray-400 text-sm text-center mb-4">
                Building efficient and high-performing applications using {name}.
              </p>

              {/* Buttons */}
              <div className="flex justify-center gap-4">
                <button className="px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold rounded-lg transition duration-300 shadow-md">
                  Video
                </button>
                <button className="px-4 py-2 text-sm bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-semibold rounded-lg transition duration-300 shadow-md">
                  Source Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortFolio;

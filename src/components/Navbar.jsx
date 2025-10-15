import React, { useState } from "react";
import { Link } from "react-router-dom";
import Image from "../../public/Image.png";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "About", link: "/about" },
    { id: 3, text: "Portfolio", link: "/portfolio" },
    { id: 4, text: "Skills", link: "/skills" },
    { id: 5, text: "Contacts", link: "/contact" },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 bg-[#0b0b0d] z-50">
      <div className="flex justify-between items-center h-16">
        
        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <img src={Image} className="h-10 w-10 rounded-full border border-emerald-400" alt="Logo" />
          <div>
            <h1 className="font-bold text-xl tracking-wide text-gray-100">
              Rohi<span className="text-emerald-400 text-2xl">t</span>
            </h1>
            <p className="text-xs text-gray-400 -mt-1 select-none">Software Engineer</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.id} className="hover:scale-105 duration-200 cursor-pointer font-semibold text-gray-100">
              <Link
                to={item.link}
                className="hover:text-emerald-400 transition duration-200"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div onClick={() => setMenu(!menu)} className="md:hidden text-gray-100 cursor-pointer">
          {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <ul className="md:hidden flex flex-col items-center justify-center space-y-3 text-xl mt-4">
          {navItems.map((item) => (
            <li key={item.id} className="hover:scale-105 duration-200 cursor-pointer font-semibold">
              <Link
                to={item.link}
                onClick={() => setMenu(false)}
                className="hover:text-emerald-400 transition duration-200"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;

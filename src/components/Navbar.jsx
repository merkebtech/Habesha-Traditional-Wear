import React, { useState } from "react";
import logo from "../assets/2.jpg";
import bgImage from "../assets/6.jpg"; // imported background

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav
      className="shadow-md bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-7xl mx-auto px-9 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/">
            <img
              src={logo}
              alt="Logo"
              className="h-8 w-8 rounded-full object-cover"
            />
          </a>
        </div>

        <ul className="flex items-center gap-4 md:gap-6 text-sm md:text-base">
          <li>
            <a
              href="/"
              className="text-gray-800 hover:text-red-600 font-medium transition-colors duration-200"
            >
              Home
            </a>
          </li>

          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="text-gray-800 font-medium hover:text-blue-600 transition-colors duration-200"
            >
              Dresses
            </button>

            {dropdownOpen && (
              <ul className="absolute left-0 top-full mt-1 bg-white shadow-lg rounded-lg py-2 w-56 z-10">
                {[
                  { name: "Events & Holidays", href: "/eve" },
                  { name: "Simple Dresses", href: "/sim" },
                  { name: "Wedding Dresses", href: "/wed" },
                  { name: "Coffee Dresses", href: "/cof" },
                  { name: "Group Matching Sets", href: "/gro" },
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {[
            { name: "Couples'", href: "/cap" },
            { name: "Men's", href: "/men" },
            { name: "Contact Us", href: "/contact" },
            { name: "About Us", href: "/about" },
          ].map((item, i) => (
            <li key={i}>
              <a
                href={item.href}
                className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

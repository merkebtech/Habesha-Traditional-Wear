import React from "react";
import bgImage from "../assets/6.jpg"; // background image for footer
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-cover bg-center text-black py-10 mt-16 shadow-inner"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Column 1 — Logo / Brand */}
        <div>
          <h2 className="text-2xl font-extrabold text-red-600 mb-2 tracking-wide">
            Habesha Traditional Wear
          </h2>
          <p className="text-black/90 text-sm">
            Celebrating Ethiopian culture with style and elegance.
          </p>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-red-600 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="hover:text-yellow-300 transition duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-yellow-300 transition duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-yellow-300 transition duration-200"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/cap"
                className="hover:text-yellow-300 transition duration-200"
              >
                Couples Wear
              </a>
            </li>
            <li>
              <a
                href="/men"
                className="hover:text-yellow-300 transition duration-200"
              >
                Men’s Collection
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 — Social Icons */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-lg font-semibold text-red-600 mb-3">
            Follow Us
          </h3>
          <div className="flex gap-5">
            <a
              href="#"
              className="hover:text-blue-400 transform hover:scale-110 transition"
            >
              <FaFacebookF size={26} />
            </a>
            <a
              href="#"
              className="hover:text-pink-500 transform hover:scale-110 transition"
            >
              <FaInstagram size={26} />
            </a>
            <a
              href="#"
              className="hover:text-blue-300 transform hover:scale-110 transition"
            >
              <FaTwitter size={26} />
            </a>
            <a
              href="#"
              className="hover:text-gray-200 transform hover:scale-110 transition"
            >
              <FaTiktok size={26} />
            </a>
            <a
              href="#"
              className="hover:text-blue-500 transform hover:scale-110 transition"
            >
              <FaLinkedin size={26} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-400 mt-10 pt-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} <span className="text-blue-600">Habesha Traditional Wear. All rights reserved. </span><br />
        <span className="text-blue-600">
          Designed with ❤️ by <span className="font-semibold text-blue-600">Beast Team</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;

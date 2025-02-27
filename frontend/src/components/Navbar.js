import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ toggleDarkMode }) => (
  <nav className="bg-white shadow-md">
    <div className="container mx-auto px-4 py-2 flex justify-between items-center">
      {/* Move.IQ Logo on the Left */}
      <a className="text-2xl font-bold text-gray-800" href="/">
        Move.IQ
      </a>

      {/* Navbar Links on the Right */}
      <ul className="flex space-x-8 font-bold ml-auto">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-gray-800 border-b-2 border-gray-800"
                : "text-gray-600"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ai"
            className={({ isActive }) =>
              isActive
                ? "text-gray-800 border-b-2 border-gray-800"
                : "text-gray-600"
            }
          >
            YogZone
          </NavLink>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800" href="/ex">
            Exercises
          </a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800" href="#">
            About Us
          </a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800" href="#">
            Contact
          </a>
        </li>
      </ul>

      {/* Dark Mode Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className="bg-gray-800 text-white px-4 py-2 rounded-md ml-4"
      >
        Toggle Dark Mode
      </button>
    </div>
  </nav>
);

export default Navbar;

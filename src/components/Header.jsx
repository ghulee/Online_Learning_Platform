import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react";
import Logo from "../assets/ira-logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="bg-white dark:bg-gray-900 border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Brand Logo + Name */}
        <div className="flex items-center space-x-2 animate-fade-in">
          <img src={Logo} alt="IRA Logo" className="h-10 w-10 rounded-full" />
          <span className="text-2xl font-bold text-blue-600 dark:text-white tracking-wide">
            IRA Learn
          </span>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 justify-center px-6">
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full max-w-md px-4 py-1 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-800 text-sm dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-gray-700 dark:text-gray-100 font-medium">
          <Link to="/" className="hover:text-blue-500">Home</Link>

          <div className="relative">
            <button
              onClick={() => setCoursesOpen(!coursesOpen)}
              className="flex items-center hover:text-blue-500"
            >
              Courses <ChevronDown size={16} className="ml-1" />
            </button>
            {coursesOpen && (
              <div className="absolute top-8 left-0 bg-white dark:bg-gray-800 shadow-md rounded-md w-40 py-2 z-10">
                <Link to="/courses/html" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">HTML</Link>
                <Link to="/courses/css" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">CSS</Link>
                <Link to="/courses/js" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">JavaScript</Link>
              </div>
            )}
          </div>

          <Link to="/notes" className="hover:text-blue-500">Notes</Link>
          <Link to="/teachers" className="hover:text-blue-500">Mentors</Link>
          <Link to="/login" className="hover:text-blue-500">Login</Link>
          <Link to="/register" className="hover:text-blue-500">Register</Link>

          {/* Dark Mode Toggle */}
          <button onClick={toggleDarkMode} className="ml-2">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <button onClick={toggleDarkMode}>
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-gray-700 dark:text-white">
          <Link to="/" className="block hover:text-blue-500">Home</Link>

          <div>
            <button
              onClick={() => setCoursesOpen(!coursesOpen)}
              className="flex items-center hover:text-blue-500"
            >
              Courses <ChevronDown size={16} className="ml-1" />
            </button>
            {coursesOpen && (
              <div className="ml-4 mt-1 space-y-1">
                <Link to="/courses/html" className="block hover:text-blue-400">HTML</Link>
                <Link to="/courses/css" className="block hover:text-blue-400">CSS</Link>
                <Link to="/courses/js" className="block hover:text-blue-400">JavaScript</Link>
              </div>
            )}
          </div>

          <Link to="/notes" className="block hover:text-blue-500">Notes</Link>
          <Link to="/teachers" className="block hover:text-blue-500">Mentors</Link>
          <Link to="/login" className="block hover:text-blue-500">Login</Link>
          <Link to="/register" className="block hover:text-blue-500">Register</Link>
        </div>
      )}
    </nav>
  );
};

export default Header;

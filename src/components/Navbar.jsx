import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import logo from "../assets/logo.png"; // my logo here
import profilePic from "../assets/profile.png"; // dummy profile image

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const dropdownRef = useRef();

  // Dark mode toggle
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  // Load theme on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setDarkMode(storedTheme === "dark");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    setDropdownOpen(false);
    navigate("/");
    // optional: force reload if other parts rely on reload
    // window.location.reload();
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="IRA Learn" className="h-8 w-8 object-contain" />
          <span className="text-xl font-bold text-indigo-600 dark:text-white animate-pulse">
            IRA Learn
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600">Home</Link>
          <Link to="/courses" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600">Courses</Link>
          <Link to="/notes" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600">Notes</Link>
          <Link to="/teachers" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600">Mentors</Link>
        </nav>

        {/* Right section */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button onClick={toggleDarkMode} className="text-gray-600 dark:text-gray-300 hover:text-indigo-600">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            {user ? (
              <>
                <img
                  src={profilePic}
                  alt={user.name || "Profile"}
                  className="h-9 w-9 rounded-full border cursor-pointer"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                />
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2 z-50">
                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                      👤 Profile
                    </Link>
                    <Link to="/my-courses" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                      📚 My Courses
                    </Link>
                    <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                      ⚙️ Settings
                    </Link>
                    <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100 dark:hover:bg-red-900">
                      🚪 Logout
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="flex items-center gap-3">
                <Link to="/login" className="text-sm text-gray-700 dark:text-gray-200 hover:underline">
                  Login
                </Link>
                <Link to="/register" className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

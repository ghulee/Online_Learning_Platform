// src/pages/Home.jsx

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import webdevImg from "../assets/webdev.png";
import aimlImg from "../assets/aiml.png";
import cybersecurityImg from "../assets/cybersecurity.png";

const Home = () => {
  // Dark mode toggle with localStorage persistence
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("ira-dark-mode") === "true");

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("ira-dark-mode", darkMode);
  }, [darkMode]);

  return (
    <main className="min-h-screen bg-gradient-to-r from-indigo-50 via-white to-blue-50 dark:bg-gray-900 transition-colors duration-500 px-6 py-12">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl font-extrabold text-indigo-900 dark:text-indigo-300 leading-tight">
            Learn Coding & AI <br /> The Smart Way with <span className="text-blue-600 dark:text-blue-400">IRA Learn</span>
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Interactive courses, expert mentors, and hands-on projects to help you become a professional developer, data scientist, or AI engineer.
          </p>
          <div className="flex gap-4 items-center">
            <Link
              to="/courses"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Explore Courses
            </Link>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              aria-label="Toggle dark mode"
              title="Toggle dark mode"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src={webdevImg}
            alt="Learn coding illustration"
            className="rounded-lg shadow-lg max-w-full mx-auto"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto mt-20 grid md:grid-cols-3 gap-10 text-center">
        <FeatureCard
          icon="ri-code-s-slash-line"
          title="Expert-Led Courses"
          description="Learn from experienced mentors with real-world projects."
        />
        <FeatureCard
          icon="ri-team-line"
          title="Community Support"
          description="Join a vibrant community of learners and developers."
        />
        <FeatureCard
          icon="ri-customer-service-2-line"
          title="24/7 Assistance"
          description="Get help whenever you need with dedicated support."
        />
      </section>

      {/* Popular Courses Preview */}
      <section className="max-w-7xl mx-auto mt-24">
        <h2 className="text-3xl font-bold text-center text-indigo-900 dark:text-indigo-300 mb-8">Popular Courses</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <CoursePreview
            title="Full Stack Web Development"
            desc="Build dynamic websites using React, Node.js & more."
            img={webdevImg}
          />
          <CoursePreview
            title="Artificial Intelligence & ML"
            desc="Master AI algorithms and ML models with hands-on practice."
            img={aimlImg}
          />
          <CoursePreview
            title="Cybersecurity Essentials"
            desc="Learn to protect networks and systems from attacks."
            img={cybersecurityImg}
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto mt-32 text-center bg-blue-600 rounded-xl p-12 text-white">
        <h3 className="text-4xl font-semibold mb-4">Ready to Start Your Journey?</h3>
        <p className="mb-6 text-lg max-w-xl mx-auto">
          Join thousands of students learning new skills everyday with IRA Learn.
        </p>
        <Link
          to="/register"
          className="inline-block bg-white text-blue-600 font-bold px-10 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Get Started Now
        </Link>
      </section>
    </main>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
    <i className={`${icon} text-5xl text-blue-600 mb-4`}></i>
    <h4 className="font-semibold text-xl mb-2 dark:text-white">{title}</h4>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

const CoursePreview = ({ title, desc, img }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer">
    <img src={img} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h5 className="font-bold text-lg mb-2 dark:text-white">{title}</h5>
      <p className="text-gray-700 dark:text-gray-300">{desc}</p>
    </div>
  </div>
);

export default Home;

// src/pages/Courses.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { coursesData } from "../data/coursesData";
import { PlayCircle } from "lucide-react";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "HTML", "CSS", "JavaScript", "Blockchain", "AI/ML", "Cloud", "C++", "Java"];

  const filteredCourses = coursesData.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6 sm:p-10 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <h2 className="text-3xl font-bold text-center flex items-center gap-2">
          <i className="ri-graduation-cap-fill text-blue-600 text-4xl"></i> All Courses
        </h2>

        <div className="flex gap-3 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search course..."
            className="px-4 py-2 rounded-lg border w-full md:w-64 dark:bg-gray-800 dark:text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 rounded-lg border dark:bg-gray-800 dark:text-white w-full md:w-52"
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
          >
            <img src={course.image} alt={course.title} className="w-full h-44 object-cover" />
            <div className="p-4 flex flex-col justify-between h-52">
              <div>
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{course.description}</p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <Link
                  to={`/courses/${course.id}`}
                  className="text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  View Details
                </Link>
                <PlayCircle className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;

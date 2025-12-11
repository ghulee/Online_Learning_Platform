// src/pages/Teachers.jsx
import React from "react";

const Teachers = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-300">Our Mentor</h1>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-center max-w-md mx-auto">
        <img
          src="https://cdn.pixabay.com/photo/2020/08/28/10/50/teacher-5527306_1280.jpg"
          alt="Mentor"
          className="w-40 h-40 rounded-full object-cover mb-4 shadow-lg"
        />
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Ishwar Tilkari</h2>
        <p className="text-gray-500 dark:text-gray-400">Admin & Mentor</p>
        <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
          I'm Ishwar Tilkari, your coding mentor and platform admin. I created IRA Learn to support every passionate IT/CS student with free, accessible, and high-quality learning. Let’s build a better future, one line of code at a time!
        </p>
      </div>
    </div>
  );
};

export default Teachers;

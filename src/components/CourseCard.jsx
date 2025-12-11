// src/components/CourseCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { RiVideoLine } from "react-icons/ri";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition hover:scale-105 duration-300">
      <div className="relative pb-56">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover rounded-t-xl"
          src={course.video}
          controls
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 dark:text-white">
          {course.title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {course.description}
        </p>
        <Link
          to={`/course/${course.id}`}
          className="mt-3 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Start Learning <RiVideoLine className="inline ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;

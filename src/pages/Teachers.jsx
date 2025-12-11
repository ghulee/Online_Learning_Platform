import React from "react";
import { Link } from "react-router-dom";
import mentor1 from "../assets/mentor1.png";
import mentor2 from "../assets/mentor2.png";
import mentor3 from "../assets/mentor3.png";

const teachers = [
  {
    id: 1,
    name: "Dr. Aditi Sharma",
    subject: "Machine Learning",
    image: mentor1,
    bio: "PhD in Computer Science with 10+ years of teaching and industry experience. Passionate about AI and data-driven solutions.",
  },
  {
    id: 2,
    name: "Ms. Priya Deshmukh",
    subject: "Full Stack Web Development",
    image: mentor2,
    bio: "Senior Developer at Infosys. Expert in MERN stack, RESTful APIs, and system design. Loves mentoring students.",
  },
  {
    id: 3,
    name: "Mr. Rahul Sharma",
    subject: "Data Structures & Algorithms",
    image: mentor3,
    bio: "Competitive programmer and author. Trains students for coding interviews and Olympiads.",
  },
];

const Teachers = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-10">Our Expert Teachers</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {teachers.map((teacher) => (
          <div
            key={teacher.id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 hover:scale-105 transition"
          >
            <img
              src={teacher.image}
              alt={teacher.name}
              className="rounded-full w-32 h-32 mx-auto object-cover border-4 border-indigo-500"
            />
            <div className="text-center mt-4">
              <h2 className="text-xl font-semibold">{teacher.name}</h2>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium">{teacher.subject}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{teacher.bio}</p>
              <Link
                to={`/teacher/${teacher.id}`}
                className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
              >
                View Profile
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teachers;

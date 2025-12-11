import React from "react";
import { useParams, Link } from "react-router-dom";
import mentor1 from "../assets/mentor1.png";
import mentor2 from "../assets/mentor2.png";
import mentor3 from "../assets/mentor3.png";

const teacherData = {
  1: {
    name: "Dr. Aditi Sharma",
    subject: "Machine Learning",
    image: mentor1,
    bio: "PhD in Computer Science. Published 30+ papers on AI, taught 5,000+ students globally.",
    experience: "10+ years in academia and industry",
    skills: ["Python", "TensorFlow", "Data Science", "Research"],
    email: "aditi.sharma@iralearn.com",
    linkedin: "https://linkedin.com/in/aditisharma",
  },
  2: {
    name: "Mr. Priya Deshmukh",
    subject: "Full Stack Web Development",
    image: mentor2,
    bio: "Senior MERN Developer at Infosys. Guided 100+ projects.",
    experience: "8 years in web development",
    skills: ["React", "Node.js", "MongoDB", "System Design"],
    email: "rahul.verma@iralearn.com",
    linkedin: "https://linkedin.com/in/priyadeshmukh",
  },
  3: {
    name: "Ms. Rahul sharma",
    subject: "Data Structures & Algorithms",
    image: mentor3,
    bio: "Olympiad trainer and CP coach. Placed 100+ students in top tech firms.",
    experience: "6 years in teaching + competitive programming",
    skills: ["C++", "DSA", "Problem Solving", "Mentoring"],
    email: "priya.desai@iralearn.com",
    linkedin: "https://linkedin.com/in/rahulsharma",
  },
};

const TeacherProfile = () => {
  const { id } = useParams();
  const teacher = teacherData[id];

  if (!teacher) return <p className="text-center text-red-500 mt-10">Teacher not found</p>;

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <Link
        to="/teachers"
        className="text-indigo-600 hover:underline mb-6 inline-block"
      >
        ← Back to Teachers
      </Link>
      <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl flex flex-col md:flex-row items-center gap-8">
        <img
          src={teacher.image}
          alt={teacher.name}
          className="w-40 h-40 rounded-full object-cover border-4 border-indigo-600"
        />
        <div>
          <h2 className="text-3xl font-bold">{teacher.name}</h2>
          <p className="text-indigo-500">{teacher.subject}</p>
          <p className="mt-2 text-gray-700 dark:text-gray-300">{teacher.bio}</p>
          <p className="mt-2 font-medium">Experience: {teacher.experience}</p>
          <p className="mt-2">Email: <a href={`mailto:${teacher.email}`} className="text-blue-500 hover:underline">{teacher.email}</a></p>
          <p className="mt-2">LinkedIn: <a href={teacher.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Profile</a></p>
          <div className="mt-4">
            <h4 className="font-semibold mb-1">Skills:</h4>
            <ul className="flex flex-wrap gap-2">
              {teacher.skills.map((skill, index) => (
                <li
                  key={index}
                  className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;

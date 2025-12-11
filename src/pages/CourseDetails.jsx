import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { coursesData } from "../data/coursesData";
import {
  RiPlayCircleLine,
  RiFileTextLine,
  RiCodeBoxLine,
  RiExternalLinkLine,
  RiCloseLine,
} from "react-icons/ri";

const CourseDetails = () => {
  const { id } = useParams();
  const course = coursesData.find((c) => c.id === id);

  const [showNotes, setShowNotes] = useState(false);
  const [showCompiler, setShowCompiler] = useState(false);
  const [currentNote, setCurrentNote] = useState(null);

  if (!course) {
    return (
      <div className="p-8 text-center text-red-600 font-semibold text-xl">
        Course not found.
      </div>
    );
  }

  const notesList = [
    {
      title: "Introduction to HTML",
      content: "HTML stands for HyperText Markup Language. It's used to build webpages. Example: `<h1>Hello</h1>`",
    },
    {
      title: "CSS Selectors",
      content: "CSS Selectors define the elements to style. Example: `p { color: red; }`",
    },
    {
      title: "Flexbox Basics",
      content: "Flexbox is a layout model. Example: `display: flex; justify-content: center;`",
    },
  ];

  return (
    <div className="min-h-screen px-6 md:px-16 py-10 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
        <img
          src={course.image}
          alt={course.title}
          className="w-40 h-40 object-contain rounded-xl shadow-md border dark:border-gray-700"
        />
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-2 text-blue-700 dark:text-blue-300">
            {course.title}
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">
            {course.description}
          </p>
          <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-semibold">
            Category: {course.category}
          </span>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <button
              onClick={() => setShowNotes(true)}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow transition"
            >
              <RiFileTextLine className="text-lg" /> View Notes
            </button>
            <button
              onClick={() => setShowCompiler(true)}
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg shadow transition"
            >
              <RiCodeBoxLine className="text-lg" /> Open Compiler
            </button>
            <a
              href="https://developer.mozilla.org/en-US/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow transition"
            >
              <RiExternalLinkLine className="text-lg" /> Explore More
            </a>
          </div>
        </div>
      </div>

      {/* Lessons Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 border-b border-gray-300 dark:border-gray-600 pb-2 text-blue-800 dark:text-blue-200">
          📚 Course Lessons
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {course.lessons.map((lesson, index) => (
            <div
              key={index}
              className="bg-white/80 dark:bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-md hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-2 text-lg font-semibold">
                <RiPlayCircleLine className="text-blue-500 dark:text-blue-400 text-2xl" />
                <span>Lesson {index + 1}</span>
              </div>
              <video
                controls
                className="w-full rounded-xl border border-gray-300 dark:border-gray-700 shadow"
              >
                <source src={`/videos/${lesson}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </section>

      {/* Notes Modal */}
      {showNotes && (
        <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center">
          <div className="bg-white dark:bg-gray-800 w-[90%] max-w-xl p-6 rounded-lg shadow-xl relative max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-100">
            <button
              onClick={() => setShowNotes(false)}
              className="absolute top-3 right-3 text-red-500 hover:text-red-700 text-2xl"
            >
              <RiCloseLine />
            </button>
            <h2 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-300">📓 Course Notes</h2>
            <ul className="space-y-3">
              {notesList.map((note, idx) => (
                <li
                  key={idx}
                  onClick={() => setCurrentNote(note)}
                  className="cursor-pointer bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-white px-4 py-2 rounded hover:bg-blue-200 dark:hover:bg-blue-800 transition"
                >
                  {note.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Note Detail Modal */}
      {currentNote && (
        <div className="fixed inset-0 z-50 bg-black/60 flex justify-center items-center">
          <div className="bg-white dark:bg-gray-900 w-[90%] max-w-lg p-6 rounded-xl relative shadow-lg max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-blue-200">
            <button
              onClick={() => setCurrentNote(null)}
              className="absolute top-3 right-3 text-red-500 hover:text-red-700 text-2xl"
            >
              <RiCloseLine />
            </button>
            <h3 className="text-2xl font-bold mb-2 text-blue-700 dark:text-blue-200">
              {currentNote.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg">{currentNote.content}</p>
          </div>
        </div>
      )}

      {/* Compiler Modal */}
      {showCompiler && (
        <div className="fixed inset-0 z-50 bg-black/60 flex justify-center items-center">
          <div className="bg-white dark:bg-gray-900 w-[95%] h-[90vh] p-2 rounded-xl relative shadow-lg">
            <button
              onClick={() => setShowCompiler(false)}
              className="absolute top-3 right-3 text-red-500 hover:text-red-700 text-2xl"
            >
              <RiCloseLine />
            </button>
            <iframe
              src="https://onecompiler.com/html"
              title="HTML CSS Compiler"
              className="w-full h-full rounded-xl border border-gray-300 dark:border-gray-700"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;

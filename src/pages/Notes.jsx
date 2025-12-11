import React, { useState } from "react";
import { FaDownload, FaEye, FaPlus, FaTimes } from "react-icons/fa";

const notesData = [
  {
    id: 1,
    title: "HTML Notes",
    course: "HTML",
    pdf: "src/assets/notes/html_notes.pdf",
    preview: "src/assets/thumbnails/html_thumb.png",
  },
  {
    id: 2,
    title: "CSS Notes",
    course: "CSS",
    pdf: "src/assets/notes/css_notes.pdf",
    preview: "src/assets/thumbnails/thumb-2.png",
  },
  {
    id: 3,
    title: "JavaScript Notes",
    course: "JavaScript",
    pdf: "src/assets/notes/js_notes.pdf",
    preview: "src/assets/thumbnails/thumb-3.png",
  },
  {
    id: 4,
    title: "Machine Learning Notes",
    course: "ML",
    pdf: "src/assets/notes/ml_notes.pdf",
    preview: "src/assets/thumbnails/thumb-4.png",
  },
  {
    id: 5,
    title: "Python Notes",
    course: "Python",
    pdf: "src/assets/notes/python_notes.pdf",
    preview: "src/assets/thumbnails/thumb-5.png",
  },
];

const Notes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNote, setSelectedNote] = useState(null);

  const filteredNotes = notesData.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">📚 Shared Notes</h1>
        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-indigo-700"
          title="Upload (Mentors only)"
        >
          <FaPlus /> Upload Notes
        </button>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by course or title..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredNotes.map((note) => (
          <div
            key={note.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={note.preview}
              alt={note.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{note.title}</h2>
              <p className="text-gray-500">{note.course}</p>
              <div className="flex justify-between mt-4 text-sm text-indigo-600 font-medium">
                <button
                  onClick={() => setSelectedNote(note)}
                  className="flex items-center gap-1 hover:underline"
                >
                  <FaEye /> View
                </button>
                <a
                  href={note.pdf}
                  download
                  className="flex items-center gap-1 hover:underline text-green-600"
                >
                  <FaDownload /> Download
                </a>
              </div>
            </div>
          </div>
        ))}

        {filteredNotes.length === 0 && (
          <div className="text-center col-span-full text-gray-500 text-lg">
            No notes found for: <strong>{searchTerm}</strong>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedNote && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white w-11/12 md:w-3/4 lg:w-2/3 max-h-[90vh] overflow-auto rounded-xl p-6 relative">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
              onClick={() => setSelectedNote(null)}
            >
              <FaTimes size={20} />
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedNote.title}</h2>
            <iframe
              src={selectedNote.pdf}
              title="PDF Preview"
              className="w-full h-[70vh] border rounded-md"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notes;

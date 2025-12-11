// src/components/NoteCard.jsx
import React from "react";
import { RiDownloadLine } from "react-icons/ri";

const NoteCard = ({ note }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{note.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{note.description}</p>
      <a
        href={note.link}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center mt-2 text-blue-600 dark:text-blue-400 hover:underline"
      >
        <RiDownloadLine className="mr-1" />
        Download
      </a>
    </div>
  );
};

export default NoteCard;

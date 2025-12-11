import React from "react";
import { useNavigate } from "react-router-dom";

const sampleVideos = [
  {
    id: 1,
    title: "Introduction to HTML",
    thumbnail: "https://img.youtube.com/vi/pQN-pnXPaVg/hqdefault.jpg",
    duration: "15:20",
  },
  {
    id: 2,
    title: "CSS Basics and Styling",
    thumbnail: "https://img.youtube.com/vi/1PnVor36_40/hqdefault.jpg",
    duration: "20:45",
  },
  {
    id: 3,
    title: "JavaScript for Beginners",
    thumbnail: "https://img.youtube.com/vi/PkZNo7MFNFg/hqdefault.jpg",
    duration: "35:10",
  },
  {
    id: 4,
    title: "Responsive Web Design",
    thumbnail: "https://img.youtube.com/vi/srvUrASNj0s/hqdefault.jpg",
    duration: "25:30",
  },
];

const Playlist = () => {
  const navigate = useNavigate();

  const handleWatch = (id) => {
    navigate(`/watch/${id}`);
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-white to-blue-100 dark:from-gray-800 dark:to-gray-900">
      <h2 className="text-3xl font-bold mb-6 text-center dark:text-white">📺 Course Playlist</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleVideos.map((video) => (
          <div
            key={video.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-xl transition-all duration-200"
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="rounded-lg w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 dark:text-white">{video.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">⏱ Duration: {video.duration}</p>
            <button
              onClick={() => handleWatch(video.id)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Watch Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;

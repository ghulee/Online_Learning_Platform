import React from "react";

const Watch = () => {
  const videoList = [
    {
      id: 1,
      title: "Introduction to HTML",
      url: "https://www.youtube.com/embed/qz0aGYrrlhU",
    },
    {
      id: 2,
      title: "CSS Crash Course",
      url: "https://www.youtube.com/embed/yfoY53QXEnI",
    },
    {
      id: 3,
      title: "JavaScript Basics",
      url: "https://www.youtube.com/embed/W6NZfCO5SIk",
    },
    {
      id: 4,
      title: "React JS for Beginners",
      url: "https://www.youtube.com/embed/bMknfKXIFA8",
    },
  ];

  const currentVideo = videoList[0];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Video Player */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4">
          <div className="aspect-w-16 aspect-h-9 w-full mb-4">
            <iframe
              className="w-full h-[400px] rounded-lg"
              src={currentVideo.url}
              title={currentVideo.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
            {currentVideo.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            This is a lesson from the IRA Learn course. Make sure to take notes and follow along with the code demonstrations.
          </p>
        </div>

        {/* Suggested Videos */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">More Lessons</h3>
          <ul className="space-y-3">
            {videoList.map((video) => (
              <li
                key={video.id}
                className="p-3 bg-gray-100 dark:bg-gray-700 rounded-md cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-600"
              >
                <p className="text-gray-800 dark:text-white text-sm">{video.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Watch;

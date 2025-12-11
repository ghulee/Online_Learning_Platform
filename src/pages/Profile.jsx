import React from "react";

const Profile = () => {
  // In future, pull user data from context, props, or localStorage
  const user = {
    name: "RUPALI GHULE",
    email: "rupali@example.com",
    role: "Student",
    joined: "June 2025",
    bio: "Enthusiastic learner passionate about Web & AI.",
    avatar:
      "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", // Free avatar image
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="flex items-center space-x-6 mb-6">
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-24 h-24 rounded-full border-4 border-blue-500"
          />
          <div>
            <h2 className="text-2xl font-bold dark:text-white">{user.name}</h2>
            <p className="text-gray-600 dark:text-gray-300">{user.email}</p>
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mt-2">
              {user.role}
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-white">Joined:</h3>
            <p className="text-gray-600 dark:text-gray-300">{user.joined}</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 dark:text-white">Bio:</h3>
            <p className="text-gray-600 dark:text-gray-300">{user.bio}</p>
          </div>

          <div className="pt-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

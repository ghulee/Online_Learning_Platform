import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = existingUsers.some(
      (u) => u.email === user.email.trim()
    );

    if (userExists) {
      setError("Email is already registered.");
      return;
    }

    existingUsers.push(user);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    navigate("/login");
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white dark:bg-gray-800 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-900 dark:text-white">
        Register on IRA Learn
      </h2>
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      <form onSubmit={handleRegister}>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="w-full px-3 py-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-white"
            value={user.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="w-full px-3 py-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-white"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="w-full px-3 py-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-white"
            value={user.password}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded"
        >
          Register
        </button>
        <p
          onClick={() => navigate("/login")}
          className="text-sm text-blue-600 hover:underline mt-3 cursor-pointer text-center"
        >
          Already have an account? Login
        </p>
      </form>
    </div>
  );
};

export default Register;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Placeholder for real backend
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      const matchedUser = storedUsers.find(
        (u) => u.email === email && u.password === password
      );

      if (matchedUser) {
        localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
        navigate("/profile");
        window.location.reload(); // force refresh to update navbar
      } else {
        setError("Invalid email or password.");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white dark:bg-gray-800 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-900 dark:text-white">
        Login to IRA Learn
      </h2>
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-1">
            Password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
        >
          Login
        </button>
        <p
          onClick={() => navigate("/register")}
          className="text-sm text-blue-600 hover:underline mt-3 cursor-pointer text-center"
        >
          Don’t have an account? Register
        </p>
        <p
          onClick={() => navigate("/forgot-password")}
          className="text-sm text-blue-600 hover:underline mt-1 cursor-pointer text-center"
        >
          Forgot Password?
        </p>
      </form>
    </div>
  );
};

export default Login;

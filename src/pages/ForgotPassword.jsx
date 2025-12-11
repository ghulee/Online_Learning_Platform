import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Added states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Simple email validator
  const isValidEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  // Updated submit handler to be async and robust
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const trimmed = email.trim();

    if (!isValidEmail(trimmed)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      // TODO: Replace URL with your backend endpoint
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });

      if (!res.ok) {
        // Optionally read server error message:
        // const data = await res.json();
        // setError(data.message || "Failed to send reset link.");
        setError("Failed to send reset link. Please try again later.");
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      setError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Forgot Password
        </h2>

        {submitted ? (
          <p
            className="text-green-600 text-center"
            role="status"
            aria-live="polite"
          >
            If this email exists, a reset link has been sent.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
                className="mt-1 w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="you@example.com"
                aria-invalid={!!error}
              />
              {error && (
                <p className="mt-2 text-sm text-red-600" role="alert">
                  {error}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={!isValidEmail(email) || loading}
              className={`w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded ${
                (!isValidEmail(email) || loading) &&
                "opacity-60 cursor-not-allowed"
              }`}
              aria-busy={loading}
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;

import React from "react";

const Contact = () => {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-indigo-600 mb-6">Contact Us</h1>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
        Have questions, feedback, or suggestions? We'd love to hear from you!
      </p>

      <form className="space-y-6">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
            required
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
            required
          />
        </div>

        <div>
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-md"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;

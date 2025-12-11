import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Notes from "./pages/Notes";
import Teachers from "./pages/Teachers";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lightweight placeholders
const MyCourses = () => (
  <div className="min-h-screen flex items-center justify-center">
    <h1 className="text-2xl">My Courses (placeholder)</h1>
  </div>
);

const Settings = () => (
  <div className="min-h-screen flex items-center justify-center">
    <h1 className="text-2xl">Settings (placeholder)</h1>
  </div>
);

const App = () => {
  return (
    <>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/my-courses" element={<MyCourses />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<div className="p-8">404 — Page not found</div>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;

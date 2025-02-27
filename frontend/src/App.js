import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Yoga from "./pages/Yoga/Yoga";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import ExercisePage from "./pages/ExercisePage";
import YogZone from "./pages/Yoga/YogZone";
import AiZone from "./pages/Yoga/AiZone";
import "./App.css";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check localStorage for dark mode preference on page load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.body.classList.remove("dark");
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  return (
    <Router>
      <Navbar toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ex" element={<ExercisePage />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/start" element={<YogZone />} />
        <Route path="/ai" element={<AiZone />} />
      </Routes>
    </Router>
  );
}

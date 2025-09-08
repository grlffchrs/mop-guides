// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Tsulong from "./pages/tsulong.jsx";
import LeiShi from "./pages/lei-shi.jsx";
// Add other boss pages as needed
import Home from "./pages/home.jsx"; // Your landing page

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tsulong" element={<Tsulong />} />
        <Route path="/leishi" element={<LeiShi />} />
        {/* Add more bosses here */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

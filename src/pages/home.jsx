// src/pages/home.jsx
import React from "react";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <div style={{maxWidth: 700, margin: "0 auto", padding: "24px"}}>
        <h1>Boss Guide Visualizer</h1>
        <p>Welcome! Select a boss guide from the navigation above.</p>
      </div>
    </>
  );
}

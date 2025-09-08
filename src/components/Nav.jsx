// src/components/Nav.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav style={{marginBottom: "24px", display: "flex", gap: "18px"}}>
      <Link to="/" className="btn-jade">Home</Link>
      <Link to="/tsulong" className="btn-jade">Tsulong 10H</Link>
      <Link to="/leishi" className="btn-jade">Lei Shi 10H</Link>
      {/* Add more bosses here */}
    </nav>
  );
}

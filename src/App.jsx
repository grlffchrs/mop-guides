// src/App.jsx
import React, { useState } from "react";
import { guides } from "./guides";
import GuideViewer from "./GuideViewer";
import "./index.css";

export default function App() {
  const [selected, setSelected] = useState(guides[0]);

  return (
    <div className="container">
      <aside className="sidebar">
        <h2>Boss Guides</h2>
        <ul>
          {guides.map((g) => (
            <li
              key={g.id}
              className={selected.id === g.id ? "active" : ""}
              onClick={() => setSelected(g)}
            >
              {g.name}
            </li>
          ))}
        </ul>
      </aside>
      <main>
        <GuideViewer guide={selected} />
      </main>
    </div>
  );
}

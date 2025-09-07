// src/GuideViewer.jsx
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./index.css";

function Expandable({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="accordion-section">
      <button className="accordion-title" onClick={() => setOpen((o) => !o)}>
        {open ? "▼" : "►"} {title}
      </button>
      {open && <div className="accordion-content">{children}</div>}
    </div>
  );
}

export default function GuideViewer({ guide }) {
  if (!guide) return <div className="empty">Select a guide to view.</div>;
  return (
    <div className="guide-viewer">
      {guide.sections.map((section, i) => (
        <div key={i} className="guide-section">
          <h2>{section.title}</h2>
          <ReactMarkdown>{section.concise}</ReactMarkdown>
          <Expandable title={`${section.title} (Detailed)`}>
            <ReactMarkdown>{section.detailed}</ReactMarkdown>
          </Expandable>
        </div>
      ))}
    </div>
  );
}

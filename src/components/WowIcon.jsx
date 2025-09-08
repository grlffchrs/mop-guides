// src/components/WowIcon.jsx
import React from "react";

export default function WowIcon({ name, size = 28, alt = "" }) {
  if (!name) return null;
  return (
    <img
      src={`https://wow.zamimg.com/images/wow/icons/large/${name.toLowerCase()}.jpg`}
      width={size}
      height={size}
      alt={alt}
      style={{ verticalAlign: "middle" }}
      loading="lazy"
    />
  );
}

// src/pages/tsulong.jsx
import React from "react";
import Nav from "../components/Nav";
import BossGuide from "../components/BossGuide";
import {
  boss,
  overview,
  raidComp,
  mechanics,
  strategy,
  summary,
  links
} from "../data/tsulong";

export default function Tsulong() {
  return (
    <>
      <Nav />
      <BossGuide
        boss={boss}
        overview={overview}
        raidComp={raidComp}
        mechanics={mechanics}
        strategy={strategy}
        summary={summary}
        links={links}
      />
    </>
  );
}

// src/components/BossGuide.jsx
import React from "react";
import "../styles/theme.css";
import WowIcon from "./WowIcon";

function BossMedallion({ name, icon }) {
  return (
    <div style={{display:'flex', alignItems:'center', gap:16, margin:'10px 0 14px'}}>
      <div style={{
        width:64, height:64, borderRadius:'50%',
        border:'3px solid var(--gold)', outline:'3px solid var(--jade)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: '#222'
      }}>
        <WowIcon name={icon} size={56} alt={name} />
      </div>
      <h1 className="section-title" style={{margin:0}}>{name}</h1>
    </div>
  );
}

function ProtectorChips({ killIndex=0 }) {
  return (
    <div style={{display:'flex', gap:8, flexWrap:'wrap', margin:'8px 0'}}>
      {[0,1,2,3].map(i => (
        <span
          key={i}
          className="ref-chip"
          style={{
            borderColor: i===killIndex ? 'var(--lacquer)' : 'var(--gold)',
            fontWeight: i===killIndex ? 800 : 600
          }}
        >
          Protector {i+1}{i===killIndex ? ' • KILL' : ' • CC'}
        </span>
      ))}
    </div>
  );
}

function GetAwayMeter({ dealtPct }) {
  const pct = Math.min(100, (dealtPct / 4) * 100);
  return (
    <div style={{background:'#f2e7c8', border:'1px solid var(--gold)', borderRadius:12, padding:3, margin:'8px 0'}}>
      <div style={{
        height:12, width:`${pct}%`,
        background:'linear-gradient(180deg,#3c9c88,#2e7d6f)',
        borderRadius:10, transition:'width .25s ease'
      }} />
      <small style={{marginLeft:6}}>Get Away progress: {dealtPct.toFixed(1)}% / 4%</small>
    </div>
  );
}

export default function BossGuide({
  boss,
  overview,
  raidComp,
  mechanics,
  strategy,
  summary,
  links
}) {
  return (
    <div className="page-mist" style={{position:'relative', zIndex:1, padding:'24px 0'}}>
      <div style={{maxWidth:700, margin:'0 auto', position:'relative', zIndex:1}}>
        <BossMedallion name={boss.name} icon={boss.icon} />

        <section className="scroll">
          <h2 className="section-title">
            Overview <span className="tag tag-easy">{boss.difficulty || "Recommended"}</span>
          </h2>
          {overview.map((item, i) => (
            <p key={i}>
              {item.text}{" "}
              {item.link && <a className="ref-chip" href={links[item.link]}>{item.ref}</a>}
            </p>
          ))}
        </section>

        <div className="divider" />

        <section className="scroll">
          <h2 className="section-title">Raid Composition</h2>
          <ul>
            {raidComp.map((item, i) => (
              <li key={i}>
                {item.text}{" "}
                {item.link && <a className="ref-chip" href={links[item.link]}>{item.ref}</a>}
              </li>
            ))}
          </ul>
        </section>

        <div className="divider" />

        <section className="scroll">
          <h2 className="section-title">Key Mechanics</h2>
          {mechanics.map((mech, i) => (
            <div className="mechanic" key={i}>
              <WowIcon name={mech.icon} />
              <div>
                <strong>
                  {mech.name}
                  {mech.spellId && (
                    <span data-wowhead={`spell=${mech.spellId}`}> ({mech.spellName})</span>
                  )}
                  :
                </strong>{" "}
                {mech.text}{" "}
                {mech.link && <a className="ref-chip" href={links[mech.link]}>{mech.ref}</a>}
                {mech.type === "getaway" && <GetAwayMeter dealtPct={0} />}
                {mech.type === "protect" && <ProtectorChips killIndex={mech.killIndex || 0} />}
              </div>
            </div>
          ))}
        </section>

        <div className="divider" />

        <section className="scroll">
          <h2 className="section-title">Strategy Tips</h2>
          <ul>
            {strategy.map((item, i) => (
              <li key={i}>
                {item.text}{" "}
                {item.link && <a className="ref-chip" href={links[item.link]}>{item.ref}</a>}
              </li>
            ))}
          </ul>
        </section>

        <div className="divider" />

        <section className="scroll">
          <h2 className="section-title">Summary</h2>
          <p>
            {summary.text}{" "}
            {summary.link && <a className="ref-chip" href={links[summary.link]}>{summary.ref}</a>}
          </p>
        </section>
      </div>
    </div>
  );
}

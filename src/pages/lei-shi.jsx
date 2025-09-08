// src/pages/lei-shi.jsx
import React from "react";
import "../styles/theme.css";

const links = {
  roqai_007: "url://1",
  roqai_014: "url://2",
  roqai_025: "url://3",
  roqai_105: "url://4",
  roqai_114: "url://5",
  roqai_131: "url://6",
  roqai_200: "url://7",
  roqai_300: "url://8",
  roqai_339: "url://11",
  roqai_425: "url://9",
  roqai_607: "url://10",
  roqai_1222: "url://12",
  roqai_1244: "url://13",
  roqai_1250: "url://14",
  roqai_1315: "url://15",
};

function BossMedallion({ name, src }) {
  return (
    <div style={{display:'flex', alignItems:'center', gap:16, margin:'10px 0 14px'}}>
      <div style={{
        width:64, height:64, borderRadius:'50%',
        border:'3px solid var(--gold)', outline:'3px solid var(--jade)',
        background:`center/cover url(${src})`
      }} />
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

export default function LeiShi() {
  return (
    <div className="page-mist" style={{position:'relative', zIndex:1, padding:'24px 0'}}>
      <div style={{maxWidth:700, margin:'0 auto', position:'relative', zIndex:1}}>
        <BossMedallion
          name="Lei Shi (10H)"
          src="/icons/mop/inv_lei_shi.png"
        />

        <section className="scroll">
          <h2 className="section-title">
            Overview <span className="tag tag-easy">Recommended</span>
          </h2>
          <p>
            Easiest boss in ToES Heroic; great for quick progression.{" "}
            <a className="ref-chip" href={links.roqai_007}>Roqai 0:07</a>
          </p>
          <p>
            If you only have time for one heroic, do this one.{" "}
            <a className="ref-chip" href={links.roqai_014}>Roqai 0:14</a>
          </p>
        </section>

        <div className="divider" />

        <section className="scroll">
          <h2 className="section-title">Raid Composition</h2>
          <ul>
            <li>
              2 healers possible, 3 healers makes it trivial.{" "}
              <a className="ref-chip" href={links.roqai_025}>Roqai 0:25</a>
            </li>
            <li>
              2 tanks required.{" "}
              <a className="ref-chip" href={links.roqai_105}>Roqai 1:05</a>
            </li>
            <li>
              Any DPS mix works, more ranged is slightly better.{" "}
              <a className="ref-chip" href={links.roqai_114}>Roqai 1:14</a>
            </li>
          </ul>
        </section>

        <div className="divider" />

        <section className="scroll">
          <h2 className="section-title">Key Mechanics</h2>

          <div className="mechanic">
            <img src="/icons/mop/spell_frost_chillingblast.png" width="28" height="28" alt="" />
            <div>
              <strong>Soft Enrage (<span data-wowhead="spell=123705">Afraid</span>):</strong> Every 10% HP lost, Lei Shi gains 8% spell haste. Healers should save throughput cooldowns for the end.{" "}
              <a className="ref-chip" href={links.roqai_131}>Roqai 1:31</a>
            </div>
          </div>

          <div className="mechanic">
            <img src="/icons/mop/spell_frost_frostbolt.png" width="28" height="28" alt="" />
            <div>
              <strong>Tank Swap (<span data-wowhead="spell=123121">Spray</span>):</strong> Lei Shi does not auto-attack; instead, she casts "Spray" on the active tank. "Spray" deals AoE damage (2.5 yards) and applies a stacking debuff (+12% frost damage taken for 10s). Tanks must stand apart and taunt-swap to let debuffs drop.{" "}
              <a className="ref-chip" href={links.roqai_200}>Roqai 2:00–2:39</a>
            </div>
          </div>

          <div className="mechanic">
            <img src="/icons/mop/ability_stealth.png" width="28" height="28" alt="" />
            <div>
              <strong>Hide:</strong> Boss disappears; raid must use AoE to reveal her.{" "}
              <a className="ref-chip" href={links.roqai_300}>Roqai 3:00</a>
            </div>
          </div>

          <div className="mechanic">
            <img src="/icons/mop/spell_nature_windfury.png" width="28" height="28" alt="" />
            <div>
              <strong>Get Away:</strong> Boss moves to center, pushes raid back, and deals heavy raid damage until 4% HP is dealt. Run against the wind to reduce damage by 50%.{" "}
              <a className="ref-chip" href={links.roqai_339}>Roqai 3:39</a>
              <GetAwayMeter dealtPct={0} />
            </div>
          </div>

          <div className="mechanic">
            <img src="/icons/mop/achievement_boss_protectors.png" width="28" height="28" alt="" />
            <div>
              <strong>Protect:</strong> Every 20% HP, Lei Shi becomes immune, spawns four adds ("Protectors"). CC three adds, kill one to end the phase. Quick, organized crowd control is essential.{" "}
              <a className="ref-chip" href={links.roqai_425}>Roqai 4:25–5:44</a>
              <ProtectorChips killIndex={0} />
            </div>
          </div>

          <div className="mechanic">
            <img src="/icons/mop/spell_shadow_mindtwisting.png" width="28" height="28" alt="" />
            <div>
              <strong>Scary Fog:</strong> Players outside a ring get a stacking DoT and take 10% more damage per stack (4k/sec per stack, 35s duration). Assign two ranged DPS to rotate carrying stacks (ideally 7–10), then bring the damage amp to the boss or adds for burst phases. During "Hide," the whole raid may get a stack—just stay spread out to avoid overlapping damage amps.{" "}
              <a className="ref-chip" href={links.roqai_607}>Roqai 6:07–9:44</a>
            </div>
          </div>
        </section>

        <div className="divider" />

        <section className="scroll">
          <h2 className="section-title">Strategy Tips</h2>
          <ul>
            <li>
              Main focus: Manage "Scary Fog" stacks and CC adds quickly.{" "}
              <a className="ref-chip" href={links.roqai_1222}>Roqai 12:22</a>
            </li>
            <li>
              Slow and steady: Don’t panic if stacks aren’t perfect; the fight is very forgiving with three healers.{" "}
              <a className="ref-chip" href={links.roqai_1244}>Roqai 12:44</a>
            </li>
            <li>
              Avoid silly deaths: Pay attention to add control and don’t let "Scary Fog" stacks get too high on one player.{" "}
              <a className="ref-chip" href={links.roqai_1250}>Roqai 12:50</a>
            </li>
          </ul>
        </section>

        <div className="divider" />

        <section className="scroll">
          <h2 className="section-title">Summary</h2>
          <p>
            Lei Shi is a loot piñata if you manage add control and damage amp mechanics. Assign two ranged for "Scary Fog," use three healers if possible, and keep the raid spread during AoE phases.{" "}
            <a className="ref-chip" href={links.roqai_1315}>Roqai 13:15</a>
          </p>
        </section>
      </div>
    </div>
  );
}

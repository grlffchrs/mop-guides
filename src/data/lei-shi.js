// src/data/lei-shi.js
export const boss = {
  name: "Lei Shi (10H)",
  icon: "/icons/mop/inv_lei_shi.png",
  difficulty: "Recommended"
};

export const links = {
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

export const overview = [
  { text: "Easiest boss in ToES Heroic; great for quick progression.", link: "roqai_007", ref: "Roqai 0:07" },
  { text: "If you only have time for one heroic, do this one.", link: "roqai_014", ref: "Roqai 0:14" }
];

export const raidComp = [
  { text: "2 healers possible, 3 healers makes it trivial.", link: "roqai_025", ref: "Roqai 0:25" },
  { text: "2 tanks required.", link: "roqai_105", ref: "Roqai 1:05" },
  { text: "Any DPS mix works, more ranged is slightly better.", link: "roqai_114", ref: "Roqai 1:14" }
];

export const mechanics = [
  {
    name: "Soft Enrage",
    spellId: 123705,
    spellName: "Afraid",
    icon: "/icons/mop/spell_frost_chillingblast.png",
    text: "Every 10% HP lost, Lei Shi gains 8% spell haste. Healers should save throughput cooldowns for the end.",
    link: "roqai_131",
    ref: "Roqai 1:31"
  },
  {
    name: "Tank Swap",
    spellId: 123121,
    spellName: "Spray",
    icon: "/icons/mop/spell_frost_frostbolt.png",
    text: "Lei Shi does not auto-attack; instead, she casts 'Spray' on the active tank. 'Spray' deals AoE damage (2.5 yards) and applies a stacking debuff (+12% frost damage taken for 10s). Tanks must stand apart and taunt-swap to let debuffs drop.",
    link: "roqai_200",
    ref: "Roqai 2:00–2:39"
  },
  {
    name: "Hide",
    icon: "/icons/mop/ability_stealth.png",
    text: "Boss disappears; raid must use AoE to reveal her.",
    link: "roqai_300",
    ref: "Roqai 3:00"
  },
  {
    name: "Get Away",
    icon: "/icons/mop/spell_nature_windfury.png",
    text: "Boss moves to center, pushes raid back, and deals heavy raid damage until 4% HP is dealt. Run against the wind to reduce damage by 50%.",
    link: "roqai_339",
    ref: "Roqai 3:39",
    type: "getaway"
  },
  {
    name: "Protect",
    icon: "/icons/mop/achievement_boss_protectors.png",
    text: "Every 20% HP, Lei Shi becomes immune, spawns four adds ('Protectors'). CC three adds, kill one to end the phase. Quick, organized crowd control is essential.",
    link: "roqai_425",
    ref: "Roqai 4:25–5:44",
    type: "protect",
    killIndex: 0
  },
  {
    name: "Scary Fog",
    icon: "/icons/mop/spell_shadow_mindtwisting.png",
    text: "Players outside a ring get a stacking DoT and take 10% more damage per stack (4k/sec per stack, 35s duration). Assign two ranged DPS to rotate carrying stacks (ideally 7–10), then bring the damage amp to the boss or adds for burst phases. During 'Hide,' the whole raid may get a stack—just stay spread out to avoid overlapping damage amps.",
    link: "roqai_607",
    ref: "Roqai 6:07–9:44"
  }
];

export const strategy = [
  { text: "Main focus: Manage 'Scary Fog' stacks and CC adds quickly.", link: "roqai_1222", ref: "Roqai 12:22" },
  { text: "Slow and steady: Don’t panic if stacks aren’t perfect; the fight is very forgiving with three healers.", link: "roqai_1244", ref: "Roqai 12:44" },
  { text: "Avoid silly deaths: Pay attention to add control and don’t let 'Scary Fog' stacks get too high on one player.", link: "roqai_1250", ref: "Roqai 12:50" }
];

export const summary = {
  text: "Lei Shi is a loot piñata if you manage add control and damage amp mechanics. Assign two ranged for 'Scary Fog,' use three healers if possible, and keep the raid spread during AoE phases.",
  link: "roqai_1315",
  ref: "Roqai 13:15"
};

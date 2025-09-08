// src/data/tsulong.js
export const boss = {
  name: "Tsulong (10H)",
  icon: "inv_tsulong", // Wowhead CDN icon name; change if you prefer another icon
  difficulty: "Recommended"
};

export const links = {
  roqai_040: "https://www.youtube.com/watch?v=DJAsntlrnKA&t=40",
  joardee_204: "https://www.youtube.com/watch?v=SJb83ZcYEb0&t=124",
  roqai_240: "https://www.youtube.com/watch?v=DJAsntlrnKA&t=160",
  joardee_259: "https://www.youtube.com/watch?v=SJb83ZcYEb0&t=179",
  roqai_154: "https://www.youtube.com/watch?v=DJAsntlrnKA&t=114",
  joardee_406: "https://www.youtube.com/watch?v=SJb83ZcYEb0&t=246",
  roqai_226: "https://www.youtube.com/watch?v=DJAsntlrnKA&t=146",
  joardee_340: "https://www.youtube.com/watch?v=SJb83ZcYEb0&t=220",
  roqai_432: "https://www.youtube.com/watch?v=DJAsntlrnKA&t=272",
  joardee_523: "https://www.youtube.com/watch?v=SJb83ZcYEb0&t=323",
  roqai_500: "https://www.youtube.com/watch?v=DJAsntlrnKA&t=300",
  joardee_542: "https://www.youtube.com/watch?v=SJb83ZcYEb0&t=342",
  roqai_706: "https://www.youtube.com/watch?v=DJAsntlrnKA&t=426",
  joardee_642: "https://www.youtube.com/watch?v=SJb83ZcYEb0&t=402",
  roqai_855: "https://www.youtube.com/watch?v=DJAsntlrnKA&t=535",
  joardee_1057: "https://www.youtube.com/watch?v=SJb83ZcYEb0&t=657",
  roqai_637: "https://www.youtube.com/watch?v=DJAsntlrnKA&t=397",
  joardee_1222: "https://www.youtube.com/watch?v=SJb83ZcYEb0&t=742"
};

export const overview = [
  { text: "Two phases: Night (survive, kill adds) and Day (heal boss, kill adds)." },
  { text: "Fight alternates every ~2 minutes; mechanics change each phase." }
];

export const raidComp = [
  { text: "2 tanks required." },
  { text: "3 healers recommended for Day phase burst." },
  { text: "Any DPS mix; assign add control roles." }
];

export const mechanics = [
  // Night Phase
  {
    name: "Dread Shadows",
    spellId: 122768,
    spellName: "Dread Shadows",
    icon: "spell_shadow_shadowwordpain",
    text: "Stacking DoT, increases damage taken by 10% per stack. Reset at 5–7 stacks by stepping into the sunbeam briefly. Don't camp in the beam or it disappears for everyone.",
    link: "roqai_040",
    ref: "Roqai 0:40"
  },
  {
    name: "Dark of Night",
    icon: "spell_shadow_possession",
    text: "Adds spawn in waves, fixate on the sunbeam. Use slows/knockbacks; don’t let them reach the beam or you wipe.",
    link: "roqai_240",
    ref: "Roqai 2:40"
  },
  {
    name: "Nightmares",
    icon: "spell_shadow_mindbomb",
    text: "Purple swirls; move out before they detonate. If hit, healers dispel the fear.",
    link: "roqai_154",
    ref: "Roqai 1:54"
  },
  {
    name: "Shadow Breath",
    icon: "ability_warrior_taunt",
    text: "Tanks face away from raid, use defensives, swap on breath debuff. Position boss near (not the beam) for easy resets.",
    link: "roqai_226",
    ref: "Roqai 2:26"
  },

  // Day Phase
  {
    name: "Healers Heal Tsulong",
    icon: "spell_holy_heal",
    text: "All healing done reduces his HP for the next Night. Save all healing cooldowns for this phase.",
    link: "roqai_432",
    ref: "Roqai 4:32"
  },
  {
    name: "Sun Breath",
    icon: "spell_fire_sunfire",
    text: "Every ~30s, stand in front for 500% healing/25% mana. Don't let beacon healer get this buff (it overwrites the 1,500%).",
    link: "roqai_500",
    ref: "Roqai 5:00"
  },
  {
    name: "Light of Day Beacons",
    icon: "spell_holy_prayerofhealing",
    text: "Clickable, spawn every ~10s, grant 1,500% healing for 6s. Assign your best single-target healer to rotate and use all CDs.",
    link: "roqai_706",
    ref: "Roqai 7:06"
  },
  {
    name: "Unstable Sha",
    icon: "achievement_boss_shaofanger",
    text: "Spawn around the room, move to Tsulong. If they reach him, they heal him and prolong the fight. Split DPS to kill/slow/stun.",
    link: "roqai_855",
    ref: "Roqai 8:55"
  },
  {
    name: "Big Add",
    icon: "achievement_boss_shaofanger",
    text: "Tanks bring in front, kill just before breath so the breath wipes the small fearing adds that spawn.",
    link: "roqai_637",
    ref: "Roqai 6:37"
  }
];

export const strategy = [
  { text: "Assign add-killing responsibility." },
  { text: "Time healing cooldowns and beacon clicks with breath." },
  { text: "Don’t let adds reach beam/boss. Don’t overwrite beacon buff with breath." }
];

export const summary = {
  text: "Survive Night, heal Tsulong in Day, control adds, and time cooldowns for phase transitions."
};

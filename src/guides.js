// src/guides.js
export const guides = [
  {
    id: "tsulong-10h",
    name: "Tsulong 10H",
    sections: [
      {
        title: "Night Phase",
        concise: `
- **Reset Dread Shadows:** Step into sunbeam at 5–7 stacks, then out.
- **Kill Dark of Night adds:** Use slows/knockbacks; don’t let them reach the beam.
- **Dodge purple swirls:** Move out; healers dispel fear if hit.
- **Tanks:** Swap on breath, use defensives, never face boss to raid.
        `,
        detailed: `
- **Dread Shadows:** Stacking DoT, increases damage taken by 10% per stack. Reset at 5–7 stacks by stepping into the sunbeam briefly. Don't camp in the beam or it disappears for everyone.
- **Dark of Night adds:** Spawn in waves, fixate on the sunbeam. If they reach it, the beam is lost and you wipe. Use slows, knockbacks, and assign responsibility (personal or quadrants).
- **Nightmares:** Purple swirls; move out before they detonate. If hit, healers dispel the fear.
- **Shadow Breath:** Tanks face away from raid, use defensives, swap on breath debuff. Position boss near (not in) the beam for easy resets.
        `
      },
      {
        title: "Day Phase",
        concise: `
- **Healers:** Heal Tsulong; healing = boss HP loss next Night.
- **Sun Breath:** Stand in for 500% healing/25% mana (not beacon healer).
- **Beacon healer:** Click Light of Day for 1,500% healing, use all CDs.
- **Kill Unstable Sha:** Before they reach boss.
- **Tanks:** Drag big add in front, kill just before breath to wipe small fearing adds.
        `,
        detailed: `
- **Healers heal Tsulong:** All healing done reduces his HP for the next Night. Save all healing cooldowns for this phase.
- **Sun Breath:** Every ~30s, stand in front for 500% healing/25% mana. Don't let beacon healer get this buff (it overwrites the 1,500%).
- **Light of Day beacons:** Clickable, spawn every ~10s, grant 1,500% healing for 6s. Assign your best single-target healer to rotate and use all CDs.
- **Unstable Sha:** Spawn around the room, move to Tsulong. If they reach him, they heal him and prolong the fight. Split DPS to kill/slow/stun.
- **Big Add:** Tanks bring in front, kill just before breath so the breath wipes the small fearing adds that spawn.
        `
      },
      {
        title: "General",
        concise: `
- Assign add-killing responsibility.
- Time CDs and beacon clicks with breath.
- Don’t let adds reach beam/boss. Don’t overwrite beacon buff with breath.
        `,
        detailed: `
- Assign add-killing responsibility.
- Time healing CDs and beacon clicks with breath.
- Don't let adds reach beam/boss.
- Don't overwrite beacon buff with breath.
- Don't kill the big add too early/late (small adds must be in breath).
- Tanks: swap/defensive on breath, reset stacks after swap.
        `
      }
    ]
  }
];

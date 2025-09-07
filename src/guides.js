// src/guides.js
export const guides = [
  {
    id: "tsulong-10h",
    name: "Tsulong 10H",
    sections: [
      {
        title: "Night Phase",
        concise: `
- **Reset Dread Shadows:** Step into sunbeam at 5–7 stacks, then out. ([Roqai 0:40](https://www.youtube.com/watch?v=DJAsntlrnKA&t=40), [Joardee 2:04](https://www.youtube.com/watch?v=SJb83ZcYEb0&t=124))
- **Kill Dark of Night adds:** Use slows/knockbacks; don’t let them reach the beam. ([Roqai 2:40](https://www.youtube.com/watch?v=DJAsntlrnKA&t=160), [Joardee 2:59](https://www.youtube.com/watch?v=SJb83ZcYEb0&t=179))
- **Dodge purple swirls:** Move out; healers dispel fear if hit. ([Roqai 1:54](https://www.youtube.com/watch?v=DJAsntlrnKA&t=114), [Joardee 4:06](https://www.youtube.com/watch?v=SJb83ZcYEb0&t=246))
- **Tanks:** Swap on breath, use defensives, never face boss to raid. ([Roqai 2:26](https://www.youtube.com/watch?v=DJAsntlrnKA&t=146), [Joardee 3:40](https://www.youtube.com/watch?v=SJb83ZcYEb0&t=220))
        `,
        detailed: `
- **Dread Shadows:** Stacking DoT, increases damage taken by 10% per stack. Reset at 5–7 stacks by stepping into the sunbeam briefly. Don't camp in the beam or it disappears for everyone. ([Roqai 0:56–1:53](https://www.youtube.com/watch?v=DJAsntlrnKA&t=56), [Joardee 2:30–2:54](https://www.youtube.com/watch?v=SJb83ZcYEb0&t=150))
- **Sunbeam usage:** Each entry drains the beam; step in/out quickly. ([Roqai 0:56–1:53](https://www.youtube.com/watch?v=DJAsntlrnKA&t=56), [Joardee 2:30–2:54](https://www.youtube.com/watch?v=SJb83ZcYEb0&t=150))
- **Dark of Night adds:** Spawn in waves, fixate on the sunbeam. If they reach it, the beam is lost and you wipe. Use slows, knockbacks, and assign responsibility (personal or quadrants). ([Roqai 2:40–4:17](https://www.youtube.com/watch?v=DJAsntlrnKA&t=160), [Joardee 2:59–3:25](https://www.youtube.com/watch?v=SJb83ZcYEb0&t=179))
- **Nightmares:** Purple swirls; move out before they detonate. If hit, healers dispel the fear. ([Roqai 1:54–2:20](https://www.youtube.com/watch?v=DJAsntlrnKA&t=114), [Joardee 4:06–4:35](https://www.youtube.com/watch?v=SJb83ZcYEb0&t=246))
- **Shadow Breath:** Tanks face away from raid, use defensives, swap on breath debuff. Position boss near (not in) the beam for easy resets. ([Roqai 2:26–2:38](https://www.youtube.com/watch?v=DJAsntlrnKA&t=146), [Joardee 3:40–4:06](https://www.youtube.com/watch?v=SJb83ZcYEb0&t=220))
        `
      },
      {
        title: "Day Phase",
        concise: `
- **Healers:** Heal Tsulong; healing = boss HP loss next Night. ([Roqai 4:32](https://www.youtube.com/watch?v=DJAsntlrnKA&t=272), [Joardee 5:23](https://www.youtube.com/watch?v=SJb83ZcYEb0&t=323))
- **Sun Breath:** Stand in for 500% healing/25% mana (not beacon healer). ([Roqai 5:00](https://www.youtube.com/watch?v=DJAsntlrnKA&t=300), [Joardee 5:42](https://www.youtube.com/watch?v=SJb83ZcYEb0&t=342))
- **Beacon healer:** Click Light of Day for 1,500% healing, use all CDs. ([Roqai 7:06](https://www.youtube.com/watch?v=DJAsntlrnKA&t=426), [Joardee 6:42](https://www.youtube.com/watch?v=SJb83ZcYEb0&t=402))
- **Kill Unstable Sha:** Before they reach boss. ([Roqai 8:55](https://www.youtube.com/watch?v=DJAsntlrnKA&t=535), [Joardee 10:57](https://www.youtube.com/watch?v=SJb83ZcYEb0&t=657))
- **Tanks:** Drag big add in front, kill just before breath to wipe small fearing adds. ([Roqai 6:37](https://www.youtube.com/watch?v=DJAsntlrnKA&t=397), [Joardee 12:22](https://www.youtube.com/watch?v=SJb83ZcYEb0&t=742))
        `,
        detailed: `
- **Healers heal Tsulong:** All healing done reduces his HP for the next Night. Save all healing cooldowns for this phase. ([Roqai 4:32–5:00](https://www.youtube.com/watch?v=DJAsntlrnKA&t=272), [Joardee 5:23–5:40](https://www.youtube.com/watch?v=SJb83ZcYEb0&t=323))
- **Sun Breath:** Every ~30s, stand in front for 500% healing/25% mana. Don't let beacon healer get this buff (it overwrites the 1,500%). ([Roqai 5:00–5:24](https://www.youtube.com/watch?v=DJAsntlrnKA&t=300), [Joardee 5:42–6:40](https://www.youtube.com/watch?v=SJb83ZcYEb0&t=342))
- **Light of Day beacons:** Clickable, spawn every ~10s, grant 1,500% healing for 6s. Assign your best single-target healer to rotate and use all CDs. ([Roqai 7:06–7:36](https://www.youtube.com/watch?v=DJAsntlrnKA&t=426), [Joardee 6:42–7:27](https://www.youtube.com/watch?v=SJb83ZcYEb0&t=402))
- **Beacon macro tip:** Use /target Light of Day + Interact with Target for fast clicking. ([Joardee 7:11–7:29](https://www.youtube.com/watch?v=SJb83ZcYEb0&t=431))
- **Unstable Sha:** Spawn around the room, move to Tsulong. If they reach him, they heal him and prolong the fight. Split DPS to kill/slow/stun. ([Roqai 8:55–9:29](https://www.youtube.com/watch?v=DJAsntlrnKA&t=535), [Joardee 10:57–11:28](https://www.youtube.com/watch?v=SJb83ZcYEb0&t=657))
- **Big Add:** Tanks bring in front, kill just before breath so the breath wipes the small fearing adds that spawn. ([Roqai 6:37–7:24](https://www.youtube.com/watch?v=DJAsntlrnKA&t=397), [Joardee 12:22–13:06](https://www.youtube.com/watch?v=SJb83ZcYEb0&t=742))
- **Dispel Terrorize:** Boss first, then players. ([Joardee 11:44–12:17](https://www.youtube.com/watch?v=SJb83ZcYEb0&t=704))
- **Breath cadence:** 30/60/90/120s; purge HoTs before night. ([Joardee 13:10–13:31](https://www.youtube.com/watch?v=SJb83ZcYEb0&t=790))
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
- For full fight flow and phase rotation: ([Roqai 9:32–10:06](https://www.youtube.com/watch?v=DJAsntlrnKA&t=572), [Joardee 13:10–13:31](https://www.youtube.com/watch?v=SJb83ZcYEb0&t=790))
        `
      }
    ]
  }
];

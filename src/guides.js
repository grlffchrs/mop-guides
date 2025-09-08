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
  },
  {
    id: "leishi-10h",
    name: "Lei Shi 10H",
    sections: [
      {
        title: "Overview",
        concise: `
- Easiest boss in ToES Heroic; great for quick progression. ([Roqai 0:07](https://www.youtube.com/watch?v=DzIDctr6dGM&t=7))
- If you only have time for one heroic, do this one. ([Roqai 0:14](https://www.youtube.com/watch?v=DzIDctr6dGM&t=14))
        `,
        detailed: `
- Lei Shi is the third and by far the easiest boss in Terrace of Endless Springs Heroic. Highly recommended for a quick and smooth progression. ([Roqai 0:07](https://www.youtube.com/watch?v=DzIDctr6dGM&t=7))
- Ideal for limited raid time: If you only have time for one heroic boss, do this one. ([Roqai 0:14](https://www.youtube.com/watch?v=DzIDctr6dGM&t=14))
        `
      },
      {
        title: "Raid Composition",
        concise: `
- 2 healers possible, 3 healers makes it trivial. ([Roqai 0:25](https://www.youtube.com/watch?v=DzIDctr6dGM&t=25))
- 2 tanks required. ([Roqai 1:05](https://www.youtube.com/watch?v=DzIDctr6dGM&t=65))
- Any DPS mix works, more ranged is slightly better. ([Roqai 1:14](https://www.youtube.com/watch?v=DzIDctr6dGM&t=74))
        `,
        detailed: `
- Healers: Fight is two-healable, but three healers make it trivial. ([Roqai 0:25](https://www.youtube.com/watch?v=DzIDctr6dGM&t=25))
- Tanks: Two tanks required. ([Roqai 1:05](https://www.youtube.com/watch?v=DzIDctr6dGM&t=65))
- DPS: Any mix works, but more ranged is slightly better. ([Roqai 1:14](https://www.youtube.com/watch?v=DzIDctr6dGM&t=74))
        `
      },
      {
        title: "Key Mechanics",
        concise: `
- Every 10% HP lost, Lei Shi gains 8% spell haste (soft enrage). ([Roqai 1:31](https://www.youtube.com/watch?v=DzIDctr6dGM&t=91))
- Tanks taunt swap due to stacking frost debuff from "Spray." ([Roqai 2:00](https://www.youtube.com/watch?v=DzIDctr6dGM&t=120))
- Every 30–45s: "Hide" (AoE to reveal) or "Get Away" (pushback, run against wind, deal 4% HP to end). ([Roqai 3:00](https://www.youtube.com/watch?v=DzIDctr6dGM&t=180))
- Every 20% HP: "Protect" spawns 4 adds—CC 3, kill 1. ([Roqai 4:25](https://www.youtube.com/watch?v=DzIDctr6dGM&t=265))
- "Scary Fog": 2 ranged rotate stacks for damage amp; stay spread during Hide. ([Roqai 6:07](https://www.youtube.com/watch?v=DzIDctr6dGM&t=367))
        `,
        detailed: `
- **Soft Enrage ("Afraid"):** Every 10% HP lost, Lei Shi gains 8% spell haste (casting speed). Healers should save throughput cooldowns for the end. ([Roqai 1:31](https://www.youtube.com/watch?v=DzIDctr6dGM&t=91))
- **Tank Swap ("Spray"):** Lei Shi does not auto-attack; instead, she casts "Spray" on the active tank. "Spray" deals AoE damage (2.5 yards) and applies a stacking debuff (+12% frost damage taken for 10s). Tanks must stand apart and taunt-swap to let debuffs drop. ([Roqai 2:00–2:39](https://www.youtube.com/watch?v=DzIDctr6dGM&t=120))
- **Special Abilities (Every 30–45s):**
  - **Hide:** Boss disappears; raid must use AoE to reveal her. ([Roqai 3:00](https://www.youtube.com/watch?v=DzIDctr6dGM&t=180))
  - **Get Away:** Boss moves to center, pushes raid back, and deals heavy raid damage until 4% HP is dealt. Run against the wind to reduce damage by 50%. ([Roqai 3:39](https://www.youtube.com/watch?v=DzIDctr6dGM&t=219))
- **Protect (Every 20% HP):** Lei Shi becomes immune, spawns four adds ("Protectors"). CC three adds, kill one to end the phase. Quick, organized crowd control is essential. ([Roqai 4:25–5:44](https://www.youtube.com/watch?v=DzIDctr6dGM&t=265))
- **Scary Fog (Damage Amp Mechanic):** Players outside a ring get a stacking DoT and take 10% more damage per stack (4k/sec per stack, 35s duration). Assign two ranged DPS to rotate carrying stacks (ideally 7–10), then bring the damage amp to the boss or adds for burst phases. During "Hide," the whole raid may get a stack—just stay spread out to avoid overlapping damage amps. ([Roqai 6:07–9:44](https://www.youtube.com/watch?v=DzIDctr6dGM&t=367))
        `
      },
      {
        title: "Strategy Tips",
        concise: `
- Main focus: Manage "Scary Fog" stacks and CC adds quickly. ([Roqai 12:22](https://www.youtube.com/watch?v=DzIDctr6dGM&t=742))
- Slow and steady: Fight is forgiving with 3 healers. ([Roqai 12:44](https://www.youtube.com/watch?v=DzIDctr6dGM&t=764))
- Avoid silly deaths: Pay attention to add control and don't let "Scary Fog" stacks get too high. ([Roqai 12:50](https://www.youtube.com/watch?v=DzIDctr6dGM&t=770))
        `,
        detailed: `
- Main focus: Manage "Scary Fog" stacks and CC adds quickly. ([Roqai 12:22](https://www.youtube.com/watch?v=DzIDctr6dGM&t=742))
- Slow and steady: Don’t panic if stacks aren’t perfect; the fight is very forgiving with three healers. ([Roqai 12:44](https://www.youtube.com/watch?v=DzIDctr6dGM&t=764))
- Avoid silly deaths: Pay attention to add control and don’t let "Scary Fog" stacks get too high on one player. ([Roqai 12:50](https://www.youtube.com/watch?v=DzIDctr6dGM&t=770))
        `
      },
      {
        title: "Summary",
        concise: `
- Lei Shi is a loot piñata if you manage add control and damage amp mechanics. ([Roqai 13:15](https://www.youtube.com/watch?v=DzIDctr6dGM&t=795))
        `,
        detailed: `
- Lei Shi is a loot piñata if you manage add control and damage amp mechanics. Assign two ranged for "Scary Fog," use three healers if possible, and keep the raid spread during AoE phases. ([Roqai 13:15](https://www.youtube.com/watch?v=DzIDctr6dGM&t=795))
        `
      }
    ]
  }
];

---
title: "Announcement 2026-06-01 — v4.13.8"
description: Breadcrumbs 4.13.8 — date notes quick setup modal and US-style week start support.
---
## Breadcrumbs 🍞

**4.13.8** released today — one-click date hierarchy setup and US week numbering support.

**Date Notes Quick Setup**

A new **Set up…** button at the top of the Date Notes settings section opens a configuration modal that wires up the full temporal hierarchy in one click. Choose which period levels to enable (week, month, quarter, year), whether to use period-specific edge fields (`next_week` / `prev_week`, `next_month` / `prev_month`, etc.), and the week start day. On confirm, the modal:

- Enables daily notes and the selected period levels
- Creates any missing edge fields and adds them to the `nexts` / `prevs` field groups automatically
- Bumps the `up` / `down` transitive-rule rounds to 3, so the full chain (daily → week → month → quarter → year) resolves without manual rule editing
- Adds `next ↔ prev` reversal rules for each period-specific field

The modal remembers your last choices, so re-running setup to add a new period level keeps your existing selections intact.

**Week Starts On (US Support)**

A new **Week starts on** setting — available in both the quick-setup modal and the main Date Notes settings panel — controls how daily notes map to weekly notes.

- **Monday (ISO)** — default; uses standard ISO week numbering
- **Sunday (US)** — shifts Sundays forward by one day before the ISO week lookup, so a Sunday is treated as the start of the _following_ week, matching US-style weekly note filenames like `2026-W23`

---

Update via the Obsidian community plugin browser or download from the [4.13.8 release](https://github.com/michaelpporter/breadcrumbs/releases/tag/4.13.8).

---
title: "Announcement 2026-06-18 — v4.19.1"
description: Breadcrumbs 4.19.1 — export a note's neighbourhood to a Canvas, a neighbour picker and per-field jump commands, plus a Johnny.Decimal sibling fix.
---
## Breadcrumbs 🍞

**4.19.1** released today.

**Export to Canvas**

A new **Export to canvas** command lays out a note's neighbourhood as a native Obsidian [Canvas](https://help.obsidian.md/plugins/canvas) (`.canvas`) file. Pick which [field groups](/field-groups/) to follow and how deep to go, choose a left-to-right or top-to-bottom layout, and Breadcrumbs builds a tidy tree with each parent centred over its children. Defaults live under **Settings → Commands → Create canvas**, and re-exporting an existing canvas prompts you to overwrite it or create a new one. See [Export to Canvas](/commands/export-to-canvas/).

**Jump to neighbour (picker)**

A new **Jump to neighbour (picker)** command opens a fuzzy list of all the current note's neighbours (grouped by field) to jump to — handy when you want to pick rather than jump blindly to the first match.

**Per-field jump commands**

Alongside the per-field-group jumps, there's now a **Jump to first neighbour by field:`<field>`** command for every [edge field](/edge-fields/), so directions like `up`, `down`, `next`, and `prev` can each get their own hotkey. See [Jump to First Neighbour](/commands/jump-to-first-neighbour/).

**Johnny.Decimal category siblings**

[Johnny.Decimal](/explicit-edge-builders/johnny-decimal-notes/) sibling edges now work at the category level too (e.g. `11` ↔ `12` under area `10`), not just for delimited items like `11.01` ↔ `11.02`.

---

Update via the Obsidian community plugin browser or download from the [4.19.1 release](https://github.com/michaelpporter/breadcrumbs/releases/tag/4.19.1).

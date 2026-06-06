---
title: "Announcement 2026-06-03 — v4.14.1"
description: Breadcrumbs 4.14.1 — notes with multiple parents now appear under each parent in the Tree View.
---
## Breadcrumbs 🍞

**4.14.1** released today — a Tree View fix for notes with more than one parent.

**Multi-parent notes in the Tree View**

A note with multiple parents now appears under **each** parent in the Tree View. Previously a single shared "visited" set across all traversal branches caused the note to show up only once — under whichever parent happened to be processed first.

Cycle detection now tracks only the literal ancestors on the current path, so a note that is genuinely shared between branches (a diamond) is shown in every branch it belongs to, while true cycles are still prevented.

---

Update via the Obsidian community plugin browser or download from the [4.14.1 release](https://github.com/michaelpporter/breadcrumbs/releases/tag/4.14.1).

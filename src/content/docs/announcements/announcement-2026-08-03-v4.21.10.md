---
title: "Announcement 2026-08-03 — v4.21.10"
description: Breadcrumbs 4.21.10 — fixes a CSS conflict that broke Excalidraw drawings.
---
## Breadcrumbs 🍞

**4.21.10** released today.

**Fixed a conflict with Excalidraw**

If you had both Breadcrumbs and the Excalidraw plugin enabled, Excalidraw drawings could render as a blank white canvas — the toolbar and UI worked fine, but strokes were invisible.

The cause: Breadcrumbs' bundled CSS included some very generic, one-word style rules (like `.static`) applied globally across all of Obsidian, not just Breadcrumbs' own views. Excalidraw happens to use that same word as a class name internally for something unrelated, and the two collided — Breadcrumbs' rule won out and broke the positioning Excalidraw's canvas depends on.

All of Breadcrumbs' styles are now uniquely namespaced, so this can't happen with Excalidraw or any other plugin going forward. No settings or action needed — just update.

---

Update via the Obsidian community plugin browser or download from the [4.21.10 release](https://github.com/michaelpporter/breadcrumbs/releases/tag/4.21.10).

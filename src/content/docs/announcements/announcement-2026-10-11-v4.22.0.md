---
title: "Announcement 2026-10-11 — v4.22.0"
description: Breadcrumbs 4.22.0 — the first release for Obsidian 1.14, with right-to-left layout support and stable settings links.
---
## Breadcrumbs 🍞

**4.22.0** released today: the first stable Breadcrumbs release for **Obsidian 1.14**.

**Requires Obsidian 1.14**

The 4.22 line targets Obsidian 1.14 and newer. If you're still on Obsidian 1.13, nothing breaks. Obsidian keeps you on Breadcrumbs 4.21.14 automatically until you update the app.

**Right-to-left layouts**

Obsidian 1.14 mirrors the workspace for right-to-left interface languages. Breadcrumbs now follows along:

- the Prev/Next arrows
- the Trail View grid borders
- the copy and toolbar buttons on Tree, Mermaid, and Markmap codeblocks

These all sit on the correct side instead of staying pinned to the right edge.

**Stable links to settings pages**

Every Breadcrumbs settings page now has a permanent ID, using a new Obsidian 1.14 feature. Links and settings search that point at a Breadcrumbs page keep working even if the page is later renamed.

**Also included**

4.22.0 also carries everything from the 4.21.12–4.21.14 releases:

- **Export to canvas: semantic edge anchors.** An optional toggle that attaches canvas arrows by relationship rather than by layout direction: `ups` top → bottom, `downs` bottom → top, `nexts` right → left. Canvases you rearrange by hand keep clean, tidy arrows.
- **Export to canvas** and **Create list index** now include fields you add to a field group *after* selecting it. Previously those fields were silently skipped.
- A malformed implied-relation rule can no longer stop the whole graph from building.
- List notes recognize numbered lists (`1.`, `2)`), not just bullets.

---

Update via the Obsidian community plugin browser or download from the [4.22.0 release](https://github.com/michaelpporter/breadcrumbs/releases/tag/4.22.0). Already on 4.22.1? You have all of this plus [the latest fixes](/announcements/announcement-2026-10-11-v4221/).

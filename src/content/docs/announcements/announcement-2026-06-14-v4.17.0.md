---
title: "Announcement 2026-06-14 — v4.17.0"
description: Breadcrumbs 4.17.0 — a per-field "Hide in views" toggle, plus a field-removal consistency fix.
---
## Breadcrumbs 🍞

**4.17.0** released today.

**Hide a field from the side views**

Each edge field now has a **Hide in views** checkbox in `Settings → Edge Fields`, next to the field label. Check it and that field is kept in its field groups, the graph, and your codeblocks — but no longer rendered in the **Matrix** and **Tree** side panels. Useful for structural fields you traverse on but don't want cluttering the views. Uncheck to bring it back. See [Edge Fields](/edge-fields/#hide-in-side-views).

**Cleaner field removal**

Removing an edge field now also drops any implied-relation rules that referenced it and clears edge-source default-field settings pointing at it, so deleting a field no longer leaves stale references behind.

---

Update via the Obsidian community plugin browser or download from the [4.17.0 release](https://github.com/michaelpporter/breadcrumbs/releases/tag/4.17.0).

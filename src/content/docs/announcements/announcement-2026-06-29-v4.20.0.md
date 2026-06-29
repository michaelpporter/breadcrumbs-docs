---
title: "Announcement 2026-06-29 — v4.20.0"
description: Breadcrumbs 4.20.0 — a read-only Edge Audit Report command to find unused, mergeable, orphaned, and dangling edges.
---
## Breadcrumbs 🍞

**4.20.0** released today.

**Edge Audit Report**

A new **Generate edge audit report** command walks your graph and writes a read-only Markdown report to a note in your vault — a health-check for your breadcrumb structure that never touches your frontmatter. It surfaces:

- **Unused fields** — [edge fields](/edge-fields/) you've defined that produce no edges (often a typo or a leftover from a renamed field).
- **Implied-only fields** — fields that only ever appear as implied edges, never explicit. Expected for the reverse half of a transitive pair like `down` or `prev`, so it's informational.
- **Mergeable fields** — two or more fields whose explicit edges are strictly identical, so they're interchangeable and could be consolidated.
- **Orphan notes** — notes with no breadcrumb edges in or out.
- **Dangling edges** — edges pointing at a note that doesn't exist.

Orphans and dangling targets render as wikilinks, so you can click straight from the report to the note that needs attention. Re-running overwrites the same file, and you can set its path under **Settings → Commands → Edge audit**. See [Generate Edge Audit Report](/commands/edge-audit/).

---

Update via the Obsidian community plugin browser or download from the [4.20.0 release](https://github.com/michaelpporter/breadcrumbs/releases/tag/4.20.0).

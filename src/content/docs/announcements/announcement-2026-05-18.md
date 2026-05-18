---
title: "Announcement 2026-05-18"
description: Breadcrumbs 4.10 — fuzzy search in Tree and Matrix side views.
---
## Breadcrumbs 🍞

**4.10.0** is out — one new feature and a multi-parent display improvement under the hood.

**New Features**

- **Search in Tree and Matrix side views** — a fuzzy search input in the side-view toolbars filters displayed notes by title. Tree keeps ancestors of matching nodes visible; Matrix hides fields with no matches. ([#691](https://github.com/SkepticMystic/breadcrumbs/pull/691))

**Under the Hood**

- **Multi-parent display** — `walk_to_roots` now returns multiple parent nodes and entry-path handling accommodates multiple roots, improving how notes with more than one parent are displayed in views. ([#683](https://github.com/SkepticMystic/breadcrumbs/pull/683))

---

Thank you to everyone testing the betas and reporting issues.

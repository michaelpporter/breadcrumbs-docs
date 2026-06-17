---
title: "Announcement 2026-06-16 — v4.18.0"
description: Breadcrumbs 4.18.0 — a clearer codeblock field name and a Dataview Notes default field.
---
## Breadcrumbs 🍞

**4.18.0** released today.

**`dataview-from` is now `from`**

The codeblock `dataview-from` field is renamed to [`from`](/views/codeblocks/#from). The old name is now misleading — the Dataview dependency was removed, and Breadcrumbs parses the `#tag` / `"folder"` / `[[link]]` query itself. The old `dataview-from` still works as a deprecated alias (with a console warning) — switch to `from` when convenient.

**Dataview Notes default field**

[Dataview Notes](/explicit-edge-builders/dataview-notes/) now have a settings page with a configurable **default field**, so `BC-dataview-note-field` is optional in frontmatter.

**Smaller polish**

- The **Hide in views** toggle is now **Hide in side views**, to make clear it only affects the Matrix and Tree panels.
- The **Self is sibling** control moved to the **Implied relations** settings page.
- Renaming or removing an edge field now updates every setting that referenced it (including sibling-field and date-period defaults), so nothing is left pointing at a stale field.

---

Update via the Obsidian community plugin browser or download from the [4.18.0 release](https://github.com/michaelpporter/breadcrumbs/releases/tag/4.18.0).

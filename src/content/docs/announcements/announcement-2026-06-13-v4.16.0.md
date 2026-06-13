---
title: "Announcement 2026-06-13 — v4.16.0"
description: Breadcrumbs 4.16.0 — list-note section scoping, per-link exclusion, and an excluded-folders setting.
---
## Breadcrumbs 🍞

**4.16.0** released today, with three additions for keeping your edges precise.

**Scope a List Note to one heading**

Add `BC-list-note-section: "<heading>"` to a List Note's frontmatter to read only the list under that heading. The section runs from its heading to the next equal-or-higher-level heading (or end of file), so nested sub-headings stay inside it. Without the field, the whole note is read as before — fully backward compatible. See [List Notes](/explicit-edge-builders/list-notes/#bc-list-note-section).

**Exempt individual links from a List Note**

A new `BC-list-note-exclude` frontmatter list of wiki-links lets a link stay in your list without becoming a child edge — handy for reference / see-also links you want visible but not in the hierarchy. See [List Notes](/explicit-edge-builders/list-notes/#bc-list-note-exclude).

```yaml
---
BC-list-note-field: down
BC-list-note-exclude:
  - "[[Glossary]]"
---
```

**Excluded folders**

A new global **Excluded folders** setting (Settings → Breadcrumbs → Excluded folders) skips whole folders when building edges — notes inside a listed folder are ignored by every edge builder. One folder path per line; matching respects folder boundaries (so `arch` won't exclude `archive`). Useful for templates, archives, and attachment folders. See [Excluded folders](/explicit-edge-builders/#excluded-folders).

---

Update via the Obsidian community plugin browser or download from the [4.16.0 release](https://github.com/michaelpporter/breadcrumbs/releases/tag/4.16.0).

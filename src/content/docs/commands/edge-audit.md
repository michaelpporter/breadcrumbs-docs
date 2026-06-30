---
title: "Generate Edge Audit Report"
description: Command that writes a read-only Markdown report of unused, mergeable, and orphaned edges in your Breadcrumbs graph.
---
This command walks your current Breadcrumbs graph and writes a **read-only** report to a note in your vault. It's purely diagnostic — it never edits your notes or frontmatter, it just tells you what the graph looks like so you can tidy things up by hand.

Re-running the command **overwrites** the same file, so you always have one up-to-date report.

The report has five sections:

- **Unused fields** — [edge fields](/edge-fields/) defined in your settings that produce no edges anywhere in the graph. Usually a sign of a typo, a renamed field, or a builder you've since stopped using.
- **Implied-only fields** — fields that only ever appear as [implied edges](/concepts/#implied-edges), never produced explicitly. This is normal and expected for the reverse half of a [transitive](/implied-edge-builders/transitive/) pair (e.g. `down`, `prev`), so treat it as informational.
- **Mergeable fields** — two or more fields whose **explicit** edges are strictly identical (the same set of source → target pairs). Because they point at exactly the same places, they're interchangeable, and you may want to consolidate them into one field. The report only suggests this — you apply it yourself.
- **Orphan notes** — notes with no breadcrumb [edges](/concepts/#edge-attributes) in or out. They sit outside your hierarchy entirely.
- **Dangling edges** — edges pointing at a note that doesn't exist in the vault (an unresolved link target).

Orphans and dangling edges are rendered as wikilinks, so you can click straight through to the note (or the missing target) from the report.

An example report:

```md
# Breadcrumbs edge audit

> [!info] Generated 2026-06-29 19:11. This is a read-only report — nothing in your vault was changed.

| Check | Count |
| --- | --- |
| Unused fields | 0 |
| Implied-only fields | 2 |
| Mergeable field groups | 1 |
| Orphan notes | 3 |
| Dangling edges | 1 |

## Mergeable fields

- `up`, `parent` — 12 identical edges

## Dangling edges

- [[2026-06-03]] —`tomorrow`→ [[2026-06-04]]
```

## Settings

- **Report file path**: Where the report is written, relative to the vault root. Defaults to `Breadcrumbs Edge Audit.md`. The report note excludes itself from the orphan list, so it won't flag itself on the next run.
- **Ignore paths**: Folders or note paths to leave out of the report — one per line. A note is ignored if its path equals, or is inside, a listed path (folder semantics), so `Templates` covers everything under that folder. Ignored notes drop out of the **whole** report: not just orphans, but their dangling edges and the field checks too. This is report-only — it doesn't change your graph. To stop notes from producing edges at all, use the global [Excluded folders](/explicit-edge-builders/#excluded-folders) setting instead.

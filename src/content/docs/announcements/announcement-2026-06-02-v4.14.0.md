---
title: "Announcement 2026-06-02 — v4.14.0"
description: Breadcrumbs 4.14.0 — removes Dataview dependency, native inline fields, self-is-sibling setting.
---
## Breadcrumbs 🍞

**4.14.0** released today — Dataview is no longer required, and a long-requested implied-relation setting returns.

**Dataview dependency removed**

Breadcrumbs no longer imports or depends on the Dataview plugin package. All features that previously required Dataview have been reimplemented natively:

- **List notes** — list structure is now read directly from Obsidian's metadata cache (`listItems` + `links`). No behaviour change for existing setups.
- **Inline fields** — the `typed_link` builder now has a native second pass that reads `field:: [[value]]` body syntax using `cache.links` + line content. Previously this required Dataview to be installed and indexed.
- **`dataview-from:` codeblock option** — replaced with a native FROM-clause parser supporting `#tag`, `"folder"`, `[[link]]`, and `AND` / `OR` / `NOT` combinations. No Dataview needed.
- **Markmap codeblock** — live re-query on each graph update now uses the same native parser.

The `dataview_note` builder (which runs arbitrary DQL queries via `BC-dataview-note-query`) still works when Dataview is installed — it's just no longer a hard dependency.

**Self-is-sibling**

A new **Self** group has been added to the **Edge Fields** settings page. Fields listed there generate an implied self-loop edge for every note that participates in an edge of that type — meaning the note appears in its own sibling list in the Matrix and Tree views.

This defaults to `["same"]`, restoring the classic Breadcrumbs behaviour where a note like _Blue_ shows up in its own same-level list alongside _Green_ and _Red_.

---

Update via the Obsidian community plugin browser or download from the [4.14.0 release](https://github.com/michaelpporter/breadcrumbs/releases/tag/4.14.0).

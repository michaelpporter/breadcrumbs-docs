---
title: "Announcement 2026-06-17 — v4.19.0"
description: Breadcrumbs 4.19.0 — the type:graph codeblock is removed, plus case-insensitive from queries and faster codeblock traversal.
---
## Breadcrumbs 🍞

**4.19.0** released today.

**`type: graph` codeblock removed**

The `type: graph` codeblock (and its `exclude-folders` option), added in 4.18.0, has been removed. A whole-vault graph quickly exceeds [Mermaid](https://mermaid.js.org)'s edge limit and freezes large vaults — it needs a rethink before it returns. Existing `type: graph` blocks now report an invalid type; switch to `tree`, `mermaid`, or `markmap`. For a folder or tag overview, `type: markmap` with [`from`](/views/codeblocks/#from) is the closest replacement.

**Case-insensitive `from` folder queries**

Codeblock `from:` folder queries now match case-insensitively, so `from: '"projects"'` matches a `Projects/` folder — mirroring Dataview. A mismatched case no longer silently returns nothing.

**Faster, better-scoped codeblocks**

- `type: markmap` with `from:` now keeps the map within the matched notes instead of wandering out into the rest of the vault.
- A codeblock with no `depth:` now defaults to depth `[0, 5]` instead of unbounded, so traversals on large vaults no longer hang.
- Codeblock tree traversal no longer clones its ancestor set at every node, speeding up deep or wide trees.

---

Update via the Obsidian community plugin browser or download from the [4.19.0 release](https://github.com/michaelpporter/breadcrumbs/releases/tag/4.19.0).

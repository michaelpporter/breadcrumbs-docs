---
BC-folder-note-field: down
aliases:
  - explicit
title: Explicit Edge Builders
sidebar:
  order: 0
description: Overview of the edge builders that add explicit typed edges to the Breadcrumbs graph from your vault structure.
---

The _edge builders_ add edges to the [Breadcrumbs graph](/concepts/#graph) using the various sources of structure that already exist in your notes/vault. Some are relatively manual, like [Typed Links](typed-links/), while others are more flexible and automated, like [Date Notes](date-notes/).

:::tip[TIP]
Any edge added by one of these edge builders is referred to as "_explicit_", because it came from existing structure in your vault (e.g. tags, folders, links, dates, etc.). In contrast, "_[implied](/implied-edge-builders/)_" edges are _not_ explicitly defined in your notes's metadata, but can be deduced _from your explicit edges_, based on the [Transitive Implied Relations](/implied-edge-builders/transitive-implied-relations/) rules you've added in your settings
:::

The different edge builders include:

- [Typed Links](typed-links/)
- [Tag Notes](tag-notes/)
- [Regex Notes](regex-notes/)
- [List Notes](list-notes/)
- [Dendron Notes](dendron-notes/)
- [Johnny.Decimal Notes](johnny-decimal-notes/)
- [Dataview Notes](dataview-notes/)
- [Date Notes](date-notes/)
- [Folder Notes](folder-notes/)
- [Traverse Notes](traverse-notes/)

## Excluded folders

A global **Excluded folders** setting (Settings → Breadcrumbs → Excluded folders) lets you skip whole folders when building edges. Notes inside a listed folder are ignored by **every** edge builder — they won't appear as a source or target of any explicit edge.

Add one folder path per line, for example:

```
templates
archive/old
```

A note is excluded if its path **equals** a listed folder or is **inside** it. Matching is on the folder boundary, so `arch` does _not_ exclude `archive`. Trailing slashes are ignored, and blank lines are skipped.

This is useful for keeping template vaults, archives, or attachment folders out of the graph.

---

next:: [Implied Edge Builders](/implied-edge-builders/)

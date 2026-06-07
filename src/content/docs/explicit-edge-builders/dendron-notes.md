---
title: "Dendron Notes"
sidebar:
  order: 4
description: Edge builder that infers parent-child edges from dot-delimited Dendron-style note names like A.B.C.
---
If you use the [Dendron](https://www.dendron.so/) note-taking system, Breadcrumbs can leverage the structure of your note names. For example, if you have the following notes:

- `A`
- `A.B`
- `A.B.C`

Breadcrumbs will add edges from `A.B.C` to `A.B` to `A` using the [field](/edge-fields/) you specify.

```mermaid
flowchart RL
	1(A.B.C) -- up --> 2(A.B) -- up --> 3(A)
```

:::tip[IMPORTANT]
Breadcrumbs always looks for the note "upwards" of the previous, so pick a field that reflects this.
:::

## Settings

- **Enable**: Toggle Dendron notes on or off.
- **Default Field**: Choose the [field](/edge-fields/) to use for the edges. Override per-note with the `BC-dendron-note-field` frontmatter key.
- **Default Sibling Field**: Choose the [field](/edge-fields/) used for edges between Dendron notes at the same hierarchy level (e.g. `A.B` ↔ `A.C`). Leave empty to disable sibling edges.
- **Delimiter**: Choose the delimiter you use in your Dendron notes. This is generally a period (`.`), but can be anything you like.
- **Display Trimmed**: Choose to display the trimmed note name. This will remove the prefix from the note name, so `A.B.C` will be displayed as `C`.

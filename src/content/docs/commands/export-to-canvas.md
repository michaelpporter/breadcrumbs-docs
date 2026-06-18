---
title: "Export to Canvas"
description: Command that lays out the current note's neighbourhood as a native Obsidian Canvas file, with configurable fields, depth, and direction.
---
This command traverses the current note's Breadcrumbs graph and writes the result to a native Obsidian [Canvas](https://help.obsidian.md/plugins/canvas) (`.canvas`) file, then opens it.

Each note becomes a file node and each followed edge becomes a labelled arrow. Nodes are placed as a **tidy tree** — depth sets the level, and each parent is centred over its children — so the canvas reads like an org chart rather than a tangle.

When you run the command, a dialog lets you set the [field groups](/field-groups/) to follow, the depth, and the layout direction for this export. If a canvas already exists at the target path, Breadcrumbs asks whether to **overwrite** it or **create a new one** (a numbered copy).

:::tip[TIP]
Limit the field groups (e.g. just `down`) to export a clean subtree instead of the whole connected graph.
:::

## Settings

Change the defaults under `Settings > Commands > Create canvas`

- **Field groups**: Which [field groups](/field-groups/) the traversal follows. Empty follows every field — which from a hub note can pull in the whole connected graph, so pick a direction like `down` for a focused map.
- **Depth**: How many edges to follow out from the active note.
- **Direction**: `Left → right` (depth runs in columns) or `Top → bottom` (depth runs in rows).
- **Target Path Template**: Template for the name (path) of the canvas file. You don't need to add the `.canvas` extension. Placeholders:
	- `{{source.folder}}`: The folder of the current note
	- `{{source.path}}`: The path of the current note
	- `{{source.basename}}`: The basename of the current note
	- e.g. `{{source.folder}}/{{source.basename}} canvas`

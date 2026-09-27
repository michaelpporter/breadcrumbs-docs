---
title: "Export to Canvas"
description: Command that lays out the current note's neighbourhood as a native Obsidian Canvas file, with configurable fields, depth, direction, and edge anchors.
---
This command traverses the current note's Breadcrumbs graph and writes the result to a native Obsidian [Canvas](https://help.obsidian.md/plugins/canvas) (`.canvas`) file, then opens it.

Each note becomes a file node and each followed edge becomes a labelled arrow. Nodes are placed as a **tidy tree** — depth sets the level, and each parent is centred over its children — so the canvas reads like an org chart rather than a tangle.

When you run the command, a dialog lets you set the [field groups](/field-groups/) to follow, the depth, the layout direction, and whether to use [semantic edge anchors](#semantic-edge-anchors) for this export. If a canvas already exists at the target path, Breadcrumbs asks whether to **overwrite** it or **create a new one** (a numbered copy).

:::tip[TIP]
Limit the field groups (e.g. just `down`) to export a clean subtree instead of the whole connected graph.
:::

## Settings

Change the defaults under `Settings > Commands > Create canvas`

- **Field groups**: Which [field groups](/field-groups/) the traversal follows. Empty follows every field — which from a hub note can pull in the whole connected graph, so pick a direction like `down` for a focused map. The fields are read from the selected groups each time you export, so a field you add to a group later is included automatically.
- **Depth**: How many edges to follow out from the active note.
- **Direction**: `Left → right` (depth runs in columns) or `Top → bottom` (depth runs in rows).
- **Semantic edge anchors**: Attach each edge by the meaning of its field instead of by the layout direction. Off by default. See [Semantic edge anchors](#semantic-edge-anchors).
- **Target Path Template**: Template for the name (path) of the canvas file. You don't need to add the `.canvas` extension. Placeholders:
	- `{{source.folder}}`: The folder of the current note
	- `{{source.path}}`: The path of the current note
	- `{{source.basename}}`: The basename of the current note
	- e.g. `{{source.folder}}/{{source.basename}} canvas`

## Semantic edge anchors

*Added in 4.21.14.*

By default, every edge on the canvas runs in the layout direction: from the right side of one card to the left side of the next (or bottom to top with `Top → bottom`). That suits the automatic tree layout.

If you rearrange the cards by hand — parents above, children below, siblings to the side — turn on **Semantic edge anchors**. Each edge then attaches to the sides that match its field's [group](/field-groups/):

| Field group | Edge runs from → to |
|---|---|
| `ups` | top → bottom |
| `downs` | bottom → top |
| `nexts` | right → left |
| `prevs`, `sames` | left → right |

Once you move a parent above its note and the children below it, the edges already connect cleanly, with no re-anchoring by hand.

The side comes from the field's **group**, not its name, so custom fields work: put a `parent` field in the `ups` group and it anchors like `up`. Fields that aren't in one of these five default groups keep the direction-based sides.

:::note
With semantic anchors on, the automatic layout is unchanged, so some edges (for example, an `up` edge in a `Left → right` layout) curve around cards until you move them into place.
:::

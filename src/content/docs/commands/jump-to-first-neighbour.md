---
title: "Jump to First Neighbour"
description: Commands that open the first neighbour of the current note in a given field group, enabling rapid graph navigation.
---
These commands let you quickly jump around your Breadcrumbs graph. For each of your [Field Groups](/field-groups/) — **and** for each individual [edge field](/edge-fields/) — there is a command to jump to the first neighbour in that field.

:::tip[TIP]
Set some hotkeys for the different directions (e.g. `up`, `down`, `next`, `prev`) to quickly jump around the graph ⚡️
:::

For example, in the following chain of [Date Notes](/explicit-edge-builders/date-notes/), you could run the `Jump to First Neighbour in group:nexts` command to jump from the current note to the next day's note

```mermaid
graph LR
	1(2024-04-25) -->|next| 2(2024-04-26)
	2 -->|next| 3(2024-04-27)
```

## Jump to neighbour (picker)

If you'd rather pick than jump blindly to the first match, the **Jump to neighbour (picker)** command opens a fuzzy list of all the current note's neighbours, grouped by field. Choose one to open it.

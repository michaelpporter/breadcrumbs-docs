---
title: "Johnny.Decimal Notes"
sidebar:
  order: 5
description: Edge builder that infers hierarchy edges from Johnny.Decimal-style numbered note names like 10.20.a.
---
If you use the [Johnny.Decimal](https://johnnydecimal.com/) note-taking system, Breadcrumbs can leverage the structure of your note names. For example, if you have the following notes:

- `10 Work`
- `10.20 Project A`
- `10.20.a Task 1`

Breadcrumbs will add edges from `10.20.a Task 1` to `10.20 Project A` to `10 Work` using the [field](/edge-fields/) you specify.

```mermaid
graph RL
	1(10.20.a Task 1) -- up --> 2(10.20 Project 1) -- up --> 3(10 Work)
```

## Settings

- **Enable**: Toggle Johnny.Decimal notes on or off.
- **Default Field**: Choose the [field](/edge-fields/) to use for the edges. Override per-note with the `BC-johnny-decimal-note-field` frontmatter key.
- **Default Sibling Field**: Choose the [field](/edge-fields/) used for edges between notes at the same level (e.g. `10.20` ↔ `10.30`). Leave empty to disable sibling edges.
- **Delimiter**: Choose the delimiter you use in your Johnny.Decimal notes. This is generally a period (`.`), but can be anything you like.

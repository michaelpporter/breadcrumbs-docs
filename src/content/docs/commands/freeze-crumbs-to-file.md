---
title: "Freeze Implied Edges to Note"
description: Command that converts all implied edges leaving the current note into explicit typed-link frontmatter or Dataview fields.
---
This command takes all the [implied edges](/implied-edge-builders/) leaving the current note, and makes them explicit by writing them to the file in the format you choose.

For example, if the current note has some implied edges pointing to other notes:

```mermaid
graph
	1(Note) -.->|up| 2(B)
	1 -.->|down| 3(C)
```

You can run the **Freeze implied edges to note** command to turn them into [explicit](/explicit-edge-builders/) [typed-links](/explicit-edge-builders/typed-links/):

**Note.md**:

```md
---
up: "[[B]]"
down: "[[C]]"
---

... content of Note.md
```

```mermaid
graph
	1(Note) -->|up| 2(B)
	1 -->|down| 3(C)
```

## Settings

- **Destination**: Choose where to write the edges to. Either as [frontmatter links](/explicit-edge-builders/typed-links/#frontmatter-links) or [Dataview links](/explicit-edge-builders/typed-links/#inline-fields)

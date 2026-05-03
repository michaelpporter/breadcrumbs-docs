This command takes all the [[../Implied-Edge-Builders/Implied Edge Builders|implied edges]] leaving the current note, and makes them explicit by writing them to the file in the format you choose.

For example, if the current note has some implied edges pointing to other notes:

```mermaid
graph
	1(Note) -.->|up| 2(B)
	1 -.->|down| 3(C)
```

You can run the **Freeze implied edges to note** command to turn them into [[../Explicit-Edge-Builders/Explicit Edge Builders|explicit]] [[../Explicit-Edge-Builders/Typed Links|typed-links]]:

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

- **Destination**: Choose where to write the edges to. Either as [[../Explicit-Edge-Builders/Typed Links#Frontmatter Links|frontmatter links]] or [[../Explicit-Edge-Builders/Typed Links#Dataview Links|Dataview links]]

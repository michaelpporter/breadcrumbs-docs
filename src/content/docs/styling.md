---
title: "Styling"
description: CSS customisation options for adjusting the appearance of Breadcrumbs views in Obsidian.
---

Breadcrumbs adds stable CSS classes to the links it renders, so you can restyle
its views with an [Obsidian CSS snippet](https://help.obsidian.md/snippets)
(**Settings → Appearance → CSS snippets**). No setting is required — the classes
are always present.

## Highlight the active note

Every link Breadcrumbs renders for the **currently-active note** gets the
`BC-active-note` class. This applies wherever the note appears — the Trail, Tree,
and Matrix views, page views, and `breadcrumbs` codeblock trees — so you can make
"you are here" stand out:

```css
.BC-active-note {
	font-weight: bold;
	color: var(--text-accent);
}
```

## Link classes

Each Breadcrumbs link carries these classes:

| Class | Applied to |
| --- | --- |
| `internal-link` | Every Breadcrumbs link (matches Obsidian's own internal links). |
| `is-unresolved` | Links whose target note does not exist yet. |
| `BC-active-note` | The link pointing at the currently-active note. |

Links rendered as **edges** (in the views and codeblocks) carry additional
classes describing the edge:

| Class | Applied to |
| --- | --- |
| `BC-edge` | Every edge link. |
| `BC-edge-explicit` | Edges built from explicit sources (frontmatter, lists, etc.). |
| `BC-edge-implied` | Edges derived by implied-relation rules. |
| `BC-edge-implied-<source>` | Implied edges, tagged with the source rule (e.g. `BC-edge-implied-transitive`). |

For example, to dim implied edges so explicit ones read as primary:

```css
.BC-edge-implied {
	opacity: 0.7;
}
```

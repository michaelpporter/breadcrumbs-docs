---
title: "Tag Notes"
description: Edge builder that adds edges from a note to all vault notes carrying a specified Obsidian tag.
---
_Tag Notes_ allow you to leverage your existing tag structure. You can turn a note into a tag note by adding the following to your frontmatter:

```yaml
---
BC-tag-note-tag: "#tag"
BC-tag-note-field: "<field>"
---
```

Where `<field>` is one of your [edge fields](/edge-fields/). This will tell Breadcrumbs to find all notes with the tag `#tag`, and add edges from the current note to those tagged notes using the field you specify.

:::note[NOTE]
You don't _have to_ add the leading `#`, Breadcrumbs will handle either case
:::

For example, point `down` to all notes with the #markdown tag:

```yaml
---
BC-tag-note-field: "down"
BC-tag-note-tag: "#markdown"
---
```

```mermaid
graph TB
	1(Tag Note.md) --> |down| 2(Wiki Links.md) & 3(Text Formatting.md)
```

## `BC-tag-note-exact`

If you want to only add edges to notes that _exactly_ match the tag, you can add the `BC-tag-note-exact` field to the frontmatter of the tag note.

```yaml
---
BC-tag-note-exact: true
BC-tag-note-tag: "#markdown"
---
```

If you don't add this field, Breadcrumbs will add edges to all notes that _contain_ the tag. e.g. `#markdown/links` contains `#markdown`.

## `BC-tag-note-sibling-field`

To also add edges _between_ the tagged notes (treating them as siblings), add the `BC-tag-note-sibling-field` field, set to one of your [edge fields](/edge-fields/).

```yaml
---
BC-tag-note-tag: "#markdown"
BC-tag-note-field: "down"
BC-tag-note-sibling-field: "same"
---
```

## Settings

- **Default Field**: Fallback [field](/edge-fields/) used when a tag note omits `BC-tag-note-field`. When set, `BC-tag-note-field` is optional.
- **Default Sibling Field**: Fallback [field](/edge-fields/) used when a tag note omits `BC-tag-note-sibling-field`. Leave empty to disable sibling edges by default.

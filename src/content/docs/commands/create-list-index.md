---
title: "Create List Index"
description: Command that builds a nested markdown list of all graph paths from the current note and copies it to the clipboard.
---
This command builds a nested markdown list of all paths in a given direction from the current note. It then copies this list to the clipboard.

An example output would be:

```md
- [[A]]
  - [[B]]
    - [[C]]
  - [[D]]
- [[E]]
  - [[F]]
```

:::tip[TIP]
The output format matches the required format for the [List Notes](/explicit-edge-builders/list-notes/) edge source. So you can paste this list into a note, and then use it as a List Note.
:::

## Settings

- **Field Groups**: Which [field groups](/field-groups/) to include in the [traversal](/concepts/#traversal)
- **Edge Sorter**: How to order the results
- **Show Attributes**: Which [edge attributes](/concepts/#edge-attributes) to show
- **Indent**: Choose the string to use for indentation in the list (e.g. "` `", "`\t`")
- **Link Kind**: Choose the kind of links to use in the list. Options include "wiki", "markdown", and "none"

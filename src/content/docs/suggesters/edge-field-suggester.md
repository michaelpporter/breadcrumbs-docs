---
title: "Edge Field Suggester"
description: Auto-completion suggester that lets you quickly insert a Dataview typed-link using a configurable trigger string.
---
The Edge Field Suggester lets you quickly add a new [typed-link](/explicit-edge-builders/typed-links/). It opens when you type the "_trigger string_" at the start of a line, it will then show you a list of all your [Edge Fields](/edge-fields/), and let you quickly select one.

:::note[NOTE]
This only applies to [Dataview typed-links](/explicit-edge-builders/typed-links/#inline-fields). For [Frontmatter typed-links](/explicit-edge-builders/typed-links/#frontmatter-links), all of your [Edge Fields](/edge-fields/) are automatically added as [Obsidian Properties](https://help.obsidian.md/Editing+and+formatting/Properties), so you get that auto-complete "for free" (in the same way as the [Metadata Field Suggester](/suggesters/metadata-field-suggester/) works).
:::

## Settings

- **Enabled**: Enable the suggestor. Obsidian needs to be restarted after enabling.
- **Trigger String**: The character(s) that triggers the suggestor, entered at the start of a line. Defaults to "`.`" (a period).

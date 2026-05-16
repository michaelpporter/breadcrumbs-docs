---
title: "Rebuild Graph"
description: Command that reprocesses all vault notes to refresh the Breadcrumbs graph after making changes.
---
This command rebuilds the [Breadcrumbs graph](/concepts/#graph). This is useful if you've made changes to your notes, and want to see them reflected in the graph.

## Rebuild Graph Settings

Change under `Settings > Commands > Rebuild Graph`

- **Notify on Rebuild**: Show a notification when the graph is rebuilt. The notification will show a summary of any errors that occurred during the rebuild.
- **Triggers**: Choose to automatically rebuild the graph:
  - **On layout change**: when you switch notes or change the workspace layout.
  - **On note save**: when a note's metadata changes after a save. Rebuilds are debounced (~1.5s) so rapid edits trigger a single rebuild.

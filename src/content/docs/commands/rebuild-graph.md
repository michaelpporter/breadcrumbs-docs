---
title: "Rebuild Graph"
description: Command that reprocesses all vault notes to refresh the Breadcrumbs graph after making changes.
---
This command rebuilds the [Breadcrumbs graph](/concepts/#graph). This is useful if you've made changes to your notes, and want to see them reflected in the graph.

## Rebuild Graph Settings

Change under `Settings > Commands > Rebuild Graph`

- **Notify on Rebuild**: Show a notification when the graph is rebuilt. The notification will show a summary of any errors that occurred during the rebuild.
- **Cache inline fields** (off by default): Remember the [inline fields](/explicit-edge-builders/typed-links/) (`field:: [[link]]`) found in each note, so a rebuild only re-reads notes that changed since the last one. This mostly speeds up startup on large vaults, especially on mobile. The cache is saved to `inline-field-cache.json` in the plugin folder, and turning the setting off deletes it.
- **Triggers**: Choose to automatically rebuild the graph:
  - **On layout change**: when you switch notes or change the workspace layout.
  - **On note save**: when a note's metadata changes after a save. Rebuilds are debounced (~1.5s) so rapid edits trigger a single rebuild.

:::caution[PERFORMANCE]
**On layout change** rebuilds the _entire_ graph every time you open or switch notes (the layout-change event also fires on cursor moves and scrolling). Each rebuild reprocesses every note and recomputes all [implied edges](/implied-edge-builders/), so the cost grows with your vault size and the number of [edge fields](/edge-fields/) and [transitive rules](/implied-edge-builders/transitive-implied-relations/) — on a large or heavily-configured vault this shows up as a noticeable pause when opening a note.

You usually don't need it: Breadcrumbs already updates the graph incrementally when notes are created, renamed, or deleted, and **On note save** keeps it fresh after frontmatter edits. Leave **On layout change** off unless your graph drifts out of sync, and reach for it only as a fallback. If opening notes feels slow, this is the first setting to check.
:::

:::tip[VAULTS IN GIT]
If you keep your vault in git and turn on **Cache inline fields**, add the cache file to your vault's `.gitignore`:

```gitignore
.obsidian/plugins/breadcrumbs/inline-field-cache.json
```

It's rewritten after rebuilds and rebuilt from your notes when it's missing, so there's no reason to commit it. The same goes for other folder-syncing tools (iCloud, Syncthing), which re-upload the file after every rebuild. Exclude it there if your tool supports it.
:::

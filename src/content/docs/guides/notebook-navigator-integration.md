---
title: "Notebook Navigator Integration"
description: Make breadcrumb links reveal the current file in the Notebook Navigator sidebar instead of the core File Explorer.
---
If you use [Notebook Navigator](https://github.com/johansan/notebook-navigator) as your file sidebar, Breadcrumbs will keep it in sync automatically — clicking a breadcrumb link reveals the target file in Notebook Navigator, the same way core Obsidian links reveal in the File Explorer.

## Setup

There's nothing to configure. Breadcrumbs detects Notebook Navigator automatically:

1. Install and enable the **Notebook Navigator** community plugin.
2. Click any breadcrumb link. The file opens and Notebook Navigator scrolls to and highlights it.

If Notebook Navigator isn't installed or isn't enabled, breadcrumb links just behave as normal — nothing errors, nothing changes.

## Where this applies

Any breadcrumb link reveals in Notebook Navigator on click, including:

- The **trail** at the top of a note (both grid and path layouts)
- The **prev/next** navigation buttons
- The **matrix** side view
- The **tree** side view and the `tree` codeblock
- The **jump to neighbour** commands

## Known limitations

- **Middle-click doesn't reveal.** Middle-clicking a link opens it in a background tab without moving the Notebook Navigator selection.
- **Markmap codeblocks don't reveal.** Clicking a node in a `markmap` codeblock opens the note but doesn't update Notebook Navigator.
- **No opt-out.** The reveal happens automatically whenever Notebook Navigator is installed — there's currently no setting to disable it.

If any of these limitations affect your workflow, open an issue on the [Breadcrumbs issue tracker](https://github.com/michaelpporter/breadcrumbs/issues).

---
title: "Announcement 2026-11-01 — v4.22.3"
description: Breadcrumbs 4.22.3 — trails stay current after the graph rebuilds, renaming a field group updates every view, and mobile no longer stalls when opening a note.
---
## Breadcrumbs 🍞

**4.22.3** released today: a bug-fix release for the Obsidian 1.14 line. It also includes 4.22.2's mobile fix, which wasn't announced separately.

**Trails stay current after the graph rebuilds**

Breadcrumbs rebuilds its graph when you save a note, change the layout or run **Rebuild graph**. Trail and Prev/Next views in notes that were already open kept showing the *old* trail until you switched to another note and back. If you edited an `up:` field, for example, the trail above the note didn't change. Using the trail's depth buttons on one of these views could also show a "Revision mismatch" error.

Page views now refresh whenever the graph changes. They still don't redraw on every cursor move or scroll, so typing stays smooth.

**Renaming a field group updates every view**

Renaming an edge field group in **Settings → Edge fields** used to update only the Trail, Prev/Next and Matrix views. The Tree view's field groups and its **find root** groups, and the default groups for **Create list index** and **Export to canvas**, kept the old name. They silently stopped using that group. All of them now follow the rename.

Deleting a group now removes it from those settings too, so a new group can't accidentally pick up a deleted group's old name. Removing a field from several groups one after another also works reliably now.

**Implied edges survive a hiccup**

If a file was created, renamed or deleted in a way the graph didn't expect, Breadcrumbs could lose all implied edges (such as the `down` that mirrors each `up`) until the next full rebuild. Implied edges are now always rebuilt, even when an update goes wrong.

**Also new since the last announcement (4.22.2): no more stall on mobile**

Opening a note right after launching Obsidian on mobile could freeze the editor for 10 seconds or more while Breadcrumbs built its graph. Breadcrumbs was reading every note with inline fields (`field:: [[link]]`) or list-note entries all at once, and on mobile those reads queue up one at a time ahead of the note you opened. Mobile now reads at most 8 notes at a time, so your note opens right away. Desktop is unchanged.

Thanks to the community member who measured the mobile stall on Android in such detail.

**Ready for Obsidian 1.15**

Obsidian's upcoming 1.15 release switches Mermaid diagrams to a new renderer. Breadcrumbs' Mermaid codeblocks have been tested on the 1.15 early-access build: diagrams render and clicking a node still opens the note. No update is needed when 1.15 arrives.

---

Update via the Obsidian community plugin browser or download from the [4.22.3 release](https://github.com/michaelpporter/breadcrumbs/releases/tag/4.22.3). The 4.22 line requires Obsidian 1.14 or newer.

---
title: "Announcement 2026-11-20 — v4.23.0"
description: Breadcrumbs 4.23.0 — a new opt-in cache makes startup faster on large vaults by re-reading only the notes that changed.
---
## Breadcrumbs 🍞

**4.23.0** released today. It adds an opt-in setting that makes the graph build faster on large vaults, especially on mobile.

**New: Cache inline fields**

When Breadcrumbs builds its graph, including every time Obsidian starts, it reads each note that contains a link to find inline fields like `down:: [[Chapter 2]]`. On a vault with thousands of linked notes, that's thousands of reads on every launch. On mobile, where those reads happen one at a time, it can take 10 seconds or more. 4.22.2 stopped this from blocking the note you open, but the scan itself still took just as long.

With **Cache inline fields** turned on, Breadcrumbs remembers which inline fields it found in each note. After that, a rebuild only reads the notes that changed since the last one. Everything else comes from the cache, so a typical launch reads a handful of notes instead of the whole vault.

Turn it on under **Settings → Commands → Rebuild Graph**. It's **off by default**, so nothing changes unless you opt in. A few details:

- The cache is saved as `inline-field-cache.json` in the Breadcrumbs plugin folder. If it's missing or out of date, Breadcrumbs rebuilds it from your notes, so it's always safe to delete.
- Adding, renaming or removing [edge fields](/edge-fields/) doesn't reset the cache.
- Turning the setting off deletes the file.

**If your vault is in git**, add the cache file to your vault's `.gitignore` so it isn't committed after every rebuild:

```gitignore
.obsidian/plugins/breadcrumbs/inline-field-cache.json
```

If you sync your `.obsidian` folder with iCloud or Syncthing, exclude the file there too if your tool supports it. See [Rebuild Graph](/commands/rebuild-graph/) for more.

**Also fixed**

Settings checkboxes, such as the rebuild triggers, now work correctly in popout windows.

---

Update via the Obsidian community plugin browser or download from the [4.23.0 release](https://github.com/michaelpporter/breadcrumbs/releases/tag/4.23.0). The 4.23 line requires Obsidian 1.14 or newer.

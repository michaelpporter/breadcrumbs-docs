---
title: "Announcement 2026-05-18 — v4.10.1–4.10.2"
description: Breadcrumbs 4.10.1–4.10.2 — community plugin validator fixes and manifest patch.
---
## Breadcrumbs 🍞

**4.10.1** and **4.10.2** are out — housekeeping only, no new features.

**Housekeeping (4.10.1)**

- Fixed Obsidian community plugin validator warnings: removed `!important` from Banner-compat CSS rules (replaced with `:root`-prefixed selectors), added trailing punctuation to plugin description, pointed `authorUrl` to author profile, replaced deprecated `builtin-modules` with Node's built-in `module.builtinModules`, and swapped `npm-run-all` for the maintained `npm-run-all2` fork.

**Bug Fixes (4.10.2)**

- Fixed a missing `version` field in `manifest.json` that caused `"undefined"` to be recorded as the 4.10.1 version key in `versions.json`.

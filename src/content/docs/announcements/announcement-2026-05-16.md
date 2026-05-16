---
title: "Announcement 2026-05-16"
description: Breadcrumbs 4.8–4.9 release roundup — Tree View default depth, Notebook Navigator support, the working "rebuild on note save" trigger, and a run of stability fixes.
---
## Breadcrumbs 🍞

🔧 A roundup of everything shipped in the **4.8** and **4.9** release series.

**New Features**

- **Tree View default depth** — Tree View now has a Default Depth setting (default: `5`), so deep graphs no longer render fully expanded on first open. ([#673](https://github.com/SkepticMystic/breadcrumbs/issues/673), 4.8.1)
- **Notebook Navigator support** — Breadcrumbs now integrates with the Notebook Navigator plugin. ([#614](https://github.com/SkepticMystic/breadcrumbs/issues/614), 4.8.1)
- **Rebuild Graph → on note save now works** — the "on note save" trigger had a toggle but no event handler, so enabling it did nothing. It now rebuilds the graph on note save, debounced (~1.5s) so rapid edits collapse into a single rebuild. (4.9.7)

**Bug Fixes**

- **Windows Settings freeze** — opening the Breadcrumbs settings tab could freeze Obsidian on Windows. Fixed the reactive loops behind it; the settings tab also now shows a recoverable fallback UI with a "Reload settings" button instead of bricking the modal. ([#686](https://github.com/SkepticMystic/breadcrumbs/issues/686), 4.9.2–4.9.3)
- **View settings reverting on reload** — trail enabled, prev/next enabled, and matrix collapse settings were lost on reload. All settings writes now route through the reactive proxy correctly. (4.9.1)
- **Banners Reloaded layout** — inline page views (`.BC-page-views`) were pushed off-viewport or rendered as a side column when the Banners Reloaded plugin was active (or, in 4.9.4, when it was installed but inactive). The trail now stacks correctly above note content in both cases. (4.9.4–4.9.5)
- **Page view alignment** — fixed alignment when sticky page views are disabled and readable line length is enabled. (4.8.2)
- **Side view churn** — Matrix and Tree side views were remounting on every graph update or active-leaf change, and concurrent redraws could trigger a `lifecycle_double_unmount` error. Redraws are now debounced. (4.9.1)
- **Codeblock error logs** — codeblock fatal errors logged unexpandable `{…}` objects in the developer console; they now print as formatted plain text, one line per error. (4.9.1)

**Under the Hood**

- Edge-field errors are now distinct from malformed-value errors — a new `invalid_edge_field` code flags a value naming an unregistered edge field, separate from `invalid_field_value` for malformed metadata. (4.9.7)

---

Thank you to everyone reporting issues and testing fixes across this series — and to [michaelpporter](https://github.com/michaelpporter), stepping up alongside SkepticMystic to keep Breadcrumbs maintained and moving forward.

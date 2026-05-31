---
title: "Announcement 2026-05-31 — v4.13.1–4.13.7"
description: Breadcrumbs 4.13.1–4.13.7 — built-in markmap rendering, graph rebuild fix, compatibility fixes, and bug fixes.
---
## Breadcrumbs 🍞

**4.13.1–4.13.7** released today — built-in markmap rendering, a graph rebuild fix, and several bug fixes.

**Built-in Markmap (4.13.2)**

`type: markmap` codeblocks now render natively — no external markmap-obsidian plugin required. The SVG supports zoom, pan, and node collapse. Clicking a node navigates to the note; Ctrl/Cmd+click opens it in a new pane. `[[path|alias]]` wikilinks render as clean display names, and dark mode text uses Obsidian's theme colour via `var(--text-normal)`.

**Graph Rebuild on Save (4.13.4)**

Replaced the 10-second blanket debounce with a `_pending_rebuild` flag that fires after `metadataCache:resolved`. The graph now updates promptly when Obsidian finishes processing a save rather than waiting an arbitrary delay.

**Pretty Properties Compatibility (4.13.6)**

Fixed a click conflict that prevented interacting with cover images when both Breadcrumbs and Pretty Properties were active. The page-view container no longer intercepts pointer events on underlying elements, and is skipped entirely when both Trail and Prev/Next views are disabled.

**Bug Fixes**

- `link_kind: "markdown"` — list-index and codeblock outputs now respect vault link-format settings (shortest path / relative / absolute)
- Settings keys stored as `null` from older vault data now fall back to their defaults instead of causing a `TypeError`
- "Drop crumbs" no longer appends duplicate `field::` lines when run more than once
- Codeblock empty-state message now names the fields that were searched, making misconfigured field names easier to spot
- `type: markmap` with `dataview-from` now uses query results as traversal entry nodes and suppresses the spurious root heading

---

Update via the Obsidian community plugin browser or download from the [4.13.7 release](https://github.com/michaelpporter/breadcrumbs/releases/tag/4.13.7).

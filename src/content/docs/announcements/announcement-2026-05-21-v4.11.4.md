---
title: "Announcement 2026-05-21 — v4.11.4"
description: Breadcrumbs 4.11.4 — release validation fix.
---
## Breadcrumbs 🍞

**4.11.4** is out — one release fix.

**Bug Fixes**

- **Release validation** — removed `breadcrumbs_graph_wasm_bg.wasm` from GitHub release assets. Obsidian's community plugin validator only permits `main.js`, `manifest.json`, and `styles.css`; the extra WASM asset added in 4.11.3 caused build verification to fail.

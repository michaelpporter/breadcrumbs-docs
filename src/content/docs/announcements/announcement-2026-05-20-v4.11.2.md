---
title: "Announcement 2026-05-20 — v4.11.2–4.11.3"
description: Breadcrumbs 4.11.2 — Thread command crash fix. 4.11.3 — CI/release housekeeping.
---
## Breadcrumbs 🍞

**4.11.2** and **4.11.3** are out.

**Bug Fixes**

- **Thread command crashed without injecting edge** — `vault.create()` fires the `on:create` event synchronously before its promise resolves, so the new note's graph node was already registered by the time the thread command ran its batch update. The duplicate node registration threw an error, aborting the batch and preventing the breadcrumb link from being written to the source note's frontmatter. ([#696](https://github.com/SkepticMystic/breadcrumbs/issues/696))

**Housekeeping (4.11.3)**

- `breadcrumbs_graph_wasm_bg.wasm` is now included as a GitHub release asset, resolving an Obsidian community plugin scorecard warning. Build provenance attestations are generated for `main.js`, `styles.css`, and the WASM file. `wasm/Cargo.lock` is committed for reproducible WASM builds.

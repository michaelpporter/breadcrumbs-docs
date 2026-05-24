---
title: "Announcement 2026-05-24 — v4.11.9"
description: Breadcrumbs 4.11.9 — build infrastructure and dependency updates.
---
## Breadcrumbs 🍞

**4.11.9** is out — build infrastructure fixes and dependency updates. No user-facing changes.

**Build**

- **Restore wasm:build in CI** — WASM is built from source in CI again (reverts 4.11.8 approach of committing `wasm/pkg` artifacts). Reproducibility is ensured by the pinned `wasm-bindgen-cli 0.2.100`.
- **Dependency updates** — `obsidian` → 1.12.3, `obsidian-typings` → 3.16.6, `svelte` → 5.55.9, `tailwindcss` → 4.3.0, `zod` → 4.4.3, and a range of minor tooling bumps.

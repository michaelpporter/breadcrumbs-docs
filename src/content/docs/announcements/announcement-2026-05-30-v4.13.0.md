---
title: "Announcement 2026-05-30 — v4.13.0"
description: Breadcrumbs 4.13.0 — Obsidian 1.13 settings search, traverse note builder, compact edge fields UI, and demo vault.
---
## Breadcrumbs 🍞

**4.13.0** is out — full Obsidian 1.13 compatibility, a new edge builder, and UI improvements.

**Obsidian 1.13 Settings**

Breadcrumbs now implements the declarative settings API introduced in Obsidian 1.13. All settings sections appear in the global settings search and support page-based navigation with a back button. The existing layout is retained as a fallback for Obsidian versions below 1.13 — `minAppVersion` stays at 1.12.3.

**Traverse Note Builder**

A new explicit edge source. Add `BC-traverse-note-field: <field>` to any note to make it a traversal root. Breadcrumbs walks the Obsidian link graph (resolved wikilinks) from that note via DFS, generating one typed edge per parent→child hop. No special frontmatter is required on linked notes.

**Compact Edge Fields UI**

The Edge Fields settings page has a tighter layout: group membership is shown inline with each field row, the "Add to Group" dropdown is replaced by a `+` button that opens a context menu, items are separated by a thin rule, and move-up/move-down arrow buttons enable keyboard-accessible reordering.

**Demo Vault**

A ready-to-open demo vault is now available at [github.com/michaelpporter/breadcrumbs-demo](https://github.com/michaelpporter/breadcrumbs-demo). Download and open it in Obsidian to see Breadcrumbs configured with example edge fields, notes, and a working graph — no setup required.

---

Update via the Obsidian community plugin browser or download from the [4.13.0 release](https://github.com/michaelpporter/breadcrumbs/releases/tag/4.13.0).


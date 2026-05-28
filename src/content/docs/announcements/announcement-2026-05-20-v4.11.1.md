---
title: "Announcement 2026-05-20 — v4.11.1"
description: Breadcrumbs 4.11.1 — Find Root toolbar button restored.
---
## Breadcrumbs 🍞

**4.11.1** is out — one bug fix for the Tree View.

**Bug Fixes**

- **Tree view always showed from root** — the Find Root toggle button was imported but never rendered in the Tree view toolbar, giving users no way to turn it off. The button is now present in the nav bar. A matching toggle and field-group selector are also exposed in **Settings → Views → Tree** so the preference is discoverable without opening the view. ([#695](https://github.com/michaelpporter/breadcrumbs/issues/695))

---
title: "Installing Beta Releases"
description: Install and test pre-release versions of Breadcrumbs using BRAT — the Beta Reviewer's Auto-update Tool for Obsidian.
---
Breadcrumbs ships beta builds before they reach the Obsidian Community Plugins store. Beta releases let you try new features early and help find bugs before a stable release. This guide walks you through installing them with [BRAT](https://github.com/TfTHacker/obsidian42-brat) — the Beta Reviewer's Auto-update Tool.

:::caution[Betas are pre-release]
Beta builds may contain bugs and breaking changes. Back up your vault before installing one, and don't run betas in a vault you can't afford to lose.
:::

## Steps

### 1. Install BRAT

BRAT is a community plugin that installs and updates beta plugins from GitHub.

1. Open **Settings → Community plugins**.
2. Click **Browse**, search for **BRAT**, and install it.
3. Enable **BRAT** in the installed plugins list.

### 2. Add the Breadcrumbs beta

1. Open the command palette and run **BRAT: Add a beta plugin for testing**.
2. Enter the Breadcrumbs repository:

   ```
   SkepticMystic/breadcrumbs
   ```

3. Choose which version to track:
   - **Latest version** — tracks the newest release, including betas.
   - **Specific version** — pins to one release tag.
4. Click **Add Plugin**. BRAT downloads the build and enables it.

If you already have the stable Breadcrumbs installed, BRAT replaces it with the beta build under the same plugin ID — your settings and graph data carry over.

### 3. Keep the beta updated

BRAT checks for new beta builds on Obsidian startup. To update manually, run **BRAT: Check for updates to all beta plugins** from the command palette.

To see what's installed, open **Settings → BRAT** — it lists every beta plugin BRAT manages and the version each is on.

### 4. Return to the stable release

When you want to go back to the store version:

1. Open **Settings → BRAT** and remove **breadcrumbs** from the beta plugin list.
2. Disable and uninstall Breadcrumbs in **Community plugins**.
3. Reinstall Breadcrumbs from **Browse** in the Community Plugins store.

## Reporting issues

Found a bug in a beta? Report it on the [Breadcrumbs issue tracker](https://github.com/SkepticMystic/breadcrumbs/issues). Include the plugin version (shown in **Settings → BRAT**) and steps to reproduce. See the [Debugging](/debugging/) page for collecting logs.

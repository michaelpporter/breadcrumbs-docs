---
title: "Freeze Implied Edges to Vault"
description: Command that converts implied edges into explicit links across every note in the vault.
---
The **Freeze implied edges to all notes in vault** command does the same as [Freeze implied edges to note](/commands/freeze-crumbs-to-file/), but applies it to *every* note in the vault.

Because this writes to all notes that have outgoing implied edges, it asks for confirmation twice: once with a dialog, then by requiring you to type `FREEZE TO VAULT` to confirm.

:::caution
This duplicates implied edges as explicit links across the whole vault. Back up your vault before running it.
:::

## Settings

Uses the same **Destination** option as [Freeze implied edges to note](/commands/freeze-crumbs-to-file/#settings).

---
title: "Date Notes"
description: Edge builder that links daily notes sequentially and builds a temporal hierarchy across weeks, months, quarters, and years.
---
_Date Notes_ allow you to leverage your existing daily notes structure. You can enable Date Notes globally in the settings, under Date Notes. For example, Breadcrumbs can add edges from `2022-01-01` to `2022-01-02`, to `2022-01-03` using the [field](/edge-fields/) you specify.

```mermaid
flowchart LR
	1(2022-01-01) -- next --> 2(2022-01-02) -- next --> 3(2022-01-03)
```

:::tip[TIP]
Under the hood, Breadcrumbs takes the date of the current note and _adds one day_ to it. So the field you choose should reflect the "next" nature of this builder (as opposed to pointing to the date _before_ the current one).
:::

## Quick Setup

The **Set up…** button at the top of the Date Notes settings section opens a one-click configuration modal. It lets you choose which period levels to enable, whether to use period-specific edge fields (e.g. `next_week` / `prev_week` instead of the generic `next` / `prev`), and the week start day. On confirm it:

- Enables the selected period levels
- Creates any missing [edge fields](/edge-fields/) and adds them to the `nexts` / `prevs` field groups
- Bumps the `up` / `down` transitive-rule rounds to 3 so the hierarchy chains automatically (daily → week → month → quarter → year)
- Adds `next ↔ prev` reversal rules for each period-specific field

The modal remembers your last choices.

## Settings

- **Enable**: Toggle Date Notes on or off
- **Default Field**: Choose the [field](/edge-fields/) to use for the edges
- **Date Format**: Choose the date format you use for your daily notes (e.g. `yyyy-MM-dd`)
	- Refer to the [Luxon documentation](https://moment.github.io/luxon/#/parsing?id=table-of-tokens) for the full list of date formats
- **Stretch to Existing**: If there is a gap from one day to another, should the next note be the unresolved one in _one day_ or should it "stretch" to the next resolved (existing) note?
- **Week Starts On**: Controls how daily notes map to week notes.
  - **Monday (ISO)** — default; uses standard ISO week numbering (`kkkk-'W'WW`).
  - **Sunday (US)** — shifts Sundays forward by one day before the ISO week lookup, so a Sunday is treated as the start of the _following_ week. Use this if your weekly notes follow US-style week numbering.

## Period Notes

In addition to daily edges, Date Notes can build a temporal hierarchy by connecting daily notes _up_ to their containing week, month, quarter, and year notes. Each period level is configured independently under **Settings → Date Notes → Period Notes**.

```mermaid
flowchart LR
	1(2024-01-15) -- up --> 2(2024-W03) -- up --> 3(2024-01) -- up --> 4(2024-Q1) -- up --> 5(2024)
```

Each period level (Week, Month, Quarter, Year) has its own sub-section with the following settings:

- **Enabled**: Toggle this period level on or off
- **Date Format**: The [Luxon format](https://moment.github.io/luxon/#/formatting?id=table-of-tokens) matching the filename stem of your period notes

  | Period  | Default format      | Example filename |
  | ------- | ------------------- | ---------------- |
  | Week    | `kkkk-'W'WW`        | `2024-W03`       |
  | Month   | `yyyy-MM`           | `2024-03`        |
  | Quarter | `yyyy-'Q'q`         | `2024-Q1`        |
  | Year    | `yyyy`              | `2024`           |

- **Folder**: Vault folder containing the period notes. Leave empty to match notes anywhere in the vault.
- **Next Field**: The [field](/edge-fields/) used for sequential edges _between_ period notes of the same level (e.g. `2024-W03` → `2024-W04`)
- **Up Field**: The [field](/edge-fields/) used for containment edges from a child note _up_ to its period note (e.g. `2024-01-15` → `2024-W03`)

:::tip[TIP]
Period levels are independent — you can enable only Month and Year if you don't use weekly or quarterly notes.
:::

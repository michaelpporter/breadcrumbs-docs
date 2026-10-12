---
title: "Announcement 2026-10-11 — v4.22.1"
description: Breadcrumbs 4.22.1 — the Reading-view trail stays put, "jump to first neighbour" follows your note's order, and list index/canvas exports drop self-references.
---
## Breadcrumbs 🍞

**4.22.1** released today: a bug-fix release for the Obsidian 1.14 line.

**The trail stays put in Reading view**

In Reading view, the trail above your note could vanish, and the whole note would jump up. Hovering over a link with a popover plugin, resizing the window, or scrolling a long note could all trigger it. The trail came back a moment later, then disappeared again on the next resize.

Obsidian rebuilds part of the Reading-view page as you scroll and resize, and Breadcrumbs had placed the trail inside that part, so it kept getting cleared away. The trail now sits just outside it and still lines up with your note's text, whether "Readable line length" is on or off.

**Sticky page views pin again in Reading view**

If you use the **Sticky** option for page views, the trail now stays pinned to the top of the note in Reading view again. A recent change to Obsidian's page margins had quietly stopped it from sticking.

**"Jump to first neighbour" follows your note's order**

With two `next::` fields in a note, **Jump to first neighbour** opened the *last* one. A note's links now come back in the order you wrote them, so "first" means the first in the note. This also applies anywhere else Breadcrumbs picks the first link, such as the Prev/Next view.

**No more self-references in command output**

The **Self is sibling** setting (on by default for `same`) lists a note among its own siblings in the views. Some commands took that too literally:

- **Create list index** listed the note as its own child, with its siblings repeated underneath.
- **Export to canvas** drew an arrow from the note to itself.
- The **edge audit** report could list these as dangling edges.

All three now leave them out.

Thanks to the community member who reported the Reading-view and jump issues with an exceptionally detailed diagnosis.

---

Update via the Obsidian community plugin browser or download from the [4.22.1 release](https://github.com/michaelpporter/breadcrumbs/releases/tag/4.22.1). The 4.22 line requires Obsidian 1.14 or newer.

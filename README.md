# breadcrumbs-docs

Documentation site for the [Breadcrumbs Obsidian plugin](https://github.com/michaelpporter/breadcrumbs), built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build).

Content is authored in Obsidian via Vault CMS and published by pushing to git.

## Commands

| Command           | Action                                    |
| :---------------- | :---------------------------------------- |
| `npm install`     | Install dependencies                      |
| `npm run dev`     | Start dev server at `localhost:4321`      |
| `npm run build`   | Build production site to `./dist/`        |
| `npm run preview` | Preview built site locally                |
| `npm run astro check` | TypeScript check                      |

## Project structure

```
src/content/docs/
├── index.mdx                  # Homepage
├── Concepts.md
├── Edge Fields.md
├── Field Groups.md
├── Note Attributes.md
├── Announcements/             # Release notes
├── Commands/                  # Plugin commands
├── Explicit-Edge-Builders/
├── Implied-Edge-Builders/
├── Views/                     # Codeblocks, Matrix, Page, Tree, Trail
├── Suggesters/
├── guides/                    # How-to guides
└── Images/                    # Static images
```

## Content authoring

- All docs live in `src/content/docs/` — file path = URL path
- Every `.md`/`.mdx` file requires a `title` in frontmatter
- Images stored in `src/content/docs/Images/`
- `src/content/_bases/` and `src/content/.obsidian/` are Obsidian-specific — do not modify
- Sidebar config in `astro.config.mjs` — new top-level sections require a manual update there

## Deployment

Push to `main`. No separate deploy step.

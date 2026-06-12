---
title: "API"
description: Reference for the public Breadcrumbs API that other plugins can use to read graph data and trigger rebuilds.
---

Breadcrumbs exposes a public API for other plugins to use. Access it via the `window` object:

```javascript
window.BCAPI;
```

The API is assigned early in plugin load and cleaned up on unload. You can also access it as `plugin.api` if you hold a reference to the plugin instance.

## Properties

### `fields`

Returns the user's configured edge fields.

```typescript
window.BCAPI.fields; // EdgeField[]
```

Each `EdgeField` has a required `label: string` and an optional `mermaid_arrow?: MermaidArrowType` used when rendering Mermaid diagrams.

### `field_groups`

Returns the user's configured field groups.

```typescript
window.BCAPI.field_groups; // EdgeFieldGroup[]
```

Each `EdgeFieldGroup` has `label: string` and `fields: string[]` (array of edge field labels).

## Methods

### `refresh()`

Triggers a full graph rebuild. Resolves when rebuild is complete.

```typescript
await window.BCAPI.refresh(): Promise<void>
```

Use this after programmatically writing frontmatter to force Breadcrumbs to reprocess vault files.

### `get_neighbours(node?)`

Returns all outgoing edges from `node` (vault-relative file path). Defaults to the active file if omitted. Returns `undefined` if the node doesn't exist in the graph.

```typescript
window.BCAPI.get_neighbours(node?: string): EdgeList | undefined
```

The returned `EdgeList` has these methods:

| Method | Returns | Description |
|--------|---------|-------------|
| `.get_edges()` | `EdgeStruct[]` | All edges as array |
| `.to_array()` | `EdgeStruct[]` | Consumes list and returns edges |
| `.first()` | `EdgeStruct \| undefined` | First edge |
| `.last()` | `EdgeStruct \| undefined` | Last edge |
| `.group_by_type()` | `GroupedEdgeList` | Edges grouped by field type |

Each `EdgeStruct` exposes these methods (most require passing `window.BCAPI.plugin.graph` as the first argument):

| Method | Description |
|--------|-------------|
| `.edge_type` | Field label (e.g. `"up"`, `"parent"`) |
| `.source_path(graph)` | Source note path |
| `.target_path(graph)` | Target note path |
| `.explicit(graph)` | `true` if user-authored, `false` if implied |
| `.edge_source(graph)` | Which builder created the edge (e.g. `"typed_link"`, `"folder_note"`) |
| `.is_self_loop()` | Whether source and target are the same node |
| `.source_resolved(graph)` | Whether source note exists in the vault |
| `.target_resolved(graph)` | Whether target note exists in the vault |

**Example — log all neighbours by field type:**

```javascript
const api = window.BCAPI;
const neighbours = api.get_neighbours(); // uses active file

if (neighbours) {
    const grouped = neighbours.group_by_type();
    for (const field of api.fields) {
        const edges = grouped.get_edges(field.label);
        if (edges) {
            console.log(
                field.label,
                edges.map(e => e.target_path(api.plugin.graph))
            );
        }
    }
}
```

### `create_list_index(start_node?, options?)`

Traverses the graph downward from `start_node` and returns a Markdown bullet-list string. Defaults to the active file if `start_node` is omitted. Throws an `Error` if neither is available.

```typescript
window.BCAPI.create_list_index(
    start_node?: string,
    options?: ListIndexOptions
): string
```

**`ListIndexOptions`:**

```typescript
interface ListIndexOptions {
    indent: string;              // e.g. "\\t" (converted to real tab)
    fields: string[];            // field labels to traverse; empty = all fields
    max_count?: number;          // max total nodes visited (default 1000)
    max_depth?: number;          // max traversal depth (default 100)
    link_kind: "wiki" | "markdown" | "none";
    edge_sort_id: {
        order: 1 | -1;
        field: string;           // e.g. "basename"
    };
    field_group_labels: string[];
    show_attributes: EdgeAttribute[];
    show_node_options: {
        ext: boolean;            // include file extension
        folder: boolean;         // include folder path
        alias: boolean;          // use note alias if available
    };
}
```

**Example:**

```javascript
const listMd = window.BCAPI.create_list_index("Projects/Index.md", {
    fields: ["down"],
    indent: "\\t",
    link_kind: "wiki",
    max_depth: 3,
    edge_sort_id: { field: "basename", order: 1 },
    field_group_labels: [],
    show_attributes: [],
    show_node_options: { ext: false, folder: false, alias: true },
});
```

## Limitations

The API is intentionally minimal and read-only. There is currently no support for:

- Adding edges or injecting custom edges
- Registering custom edge builders
- Querying incoming edges (only outgoing via `get_neighbours`)
- Subscribing to graph update events

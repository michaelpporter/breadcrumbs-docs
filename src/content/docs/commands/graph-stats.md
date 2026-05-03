---
title: "Graph Stats"
---
This command generates summary statistics of your Breadcrumbs graph. The output is copied to the clipboard, and printed to the console (using the `FEAT` [log level](/debugging/#log-levels)). The output summaries the counts of the various [node](/concepts/#node-attributes) and [edge](/concepts/#edge-attributes) attributes:

```ts
type GraphStats = {
	nodes: {
		resolved: Partial<{
			[key: string]: number;
		}>;
	};

	edges: {
		field: Partial<{
			[key: string]: number;
		}>;

		group: Partial<{
			[key: string]: number;
		}>;

		explicit: Partial<{
			[key: string]: number;
		}>;

		source: Partial<{
			[key in ExplicitEdgeSource]: number;
		}>;

		implied_kind: Partial<{
			[key in Extract<
				BCEdgeAttributes,
				{ explicit: false }
			>["implied_kind"]]: number;
		}>;

		round: Partial<{
			[key: string]: number;
		}>;
	};
};
```

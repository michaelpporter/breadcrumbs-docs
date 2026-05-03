// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
	integrations: [
    mermaid({
      theme: 'forest',
      autoTheme: true
    }),
		starlight({
			title: 'Breadcrumbs Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/michaelpporter/breadcrumbs-docs' }],
			sidebar: [
						// Each item here is one entry in the navigation menu.
				{ label: 'Home', slug: 'index' },
				{ label: 'Edge Fields', slug: 'edge-fields' },
				{ label: 'Field Groups', slug: 'field-groups' },
				{
					label: 'Explicit Edge Builders',
					autogenerate: { directory: 'explicit-edge-builders' },
					collapsed: true,
				},
				{
					label: 'Implied Edge Builders',
					autogenerate: { directory: 'implied-edge-builders' },
					collapsed: true,
				},
				{
					label: 'Views',
					autogenerate: { directory: 'views' },
					collapsed: true,
				},
				{
					label: 'Commands',
					autogenerate: { directory: 'commands' },
					collapsed: true,
				},
				{
					label: 'Suggesters',
					autogenerate: { directory: 'suggesters' },
					collapsed: true,
				},
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
					collapsed: true,
				},
				{
					label: 'Announcements',
					autogenerate: { directory: 'announcements' },
					collapsed: true,
				},
				{ label: 'Note Attributes', slug: 'note-attributes' },
				{ label: 'API', slug: 'api' },
				{ label: 'Debugging', slug: 'debugging' },
				{ label: 'Contributing', slug: 'contributing' },
				{ label: 'Concepts', slug: 'concepts' },
			],
		}),
	],
});

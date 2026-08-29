// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
	site: 'https://breadcrumbs-docs.michaelpporter.com',
	integrations: [
    mermaid({
      theme: 'forest',
      autoTheme: true
    }),
		starlight({
			title: 'Breadcrumbs Docs',
			social: [{
				icon: 'github', label: 'GitHub', href: 'https://github.com/michaelpporter/breadcrumbs'
			}, {
				icon: 'github', label: 'GitHub', href: 'https://github.com/michaelpporter/breadcrumbs-docs'
			}],
			sidebar: [
						// Each item here is one entry in the navigation menu.
				{ label: 'Home', slug: 'index' },
				{
					label: 'Announcements',
					collapsed: true,
					items: [{ autogenerate: { directory: 'announcements' } }],
				},
				{ label: 'Edge Fields', slug: 'edge-fields' },
				{ label: 'Field Groups', slug: 'field-groups' },
				{
					label: 'Explicit Edge Builders',
					collapsed: true,
					items: [{ autogenerate: { directory: 'explicit-edge-builders' } }],
				},
				{
					label: 'Implied Edge Builders',
					collapsed: true,
					items: [{ autogenerate: { directory: 'implied-edge-builders' } }],
				},
				{
					label: 'Views',
					collapsed: true,
					items: [{ autogenerate: { directory: 'views' } }],
				},
				{
					label: 'Commands',
					collapsed: true,
					items: [{ autogenerate: { directory: 'commands' } }],
				},
				{
					label: 'Suggesters',
					collapsed: true,
					items: [{ autogenerate: { directory: 'suggesters' } }],
				},
				{
					label: 'Guides',
					collapsed: true,
					items: [{ autogenerate: { directory: 'guides' } }],
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

// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://kikyo2021.github.io',
	base: '/ramen-review',
	trailingSlash: 'always',
	integrations: [
		starlight({
			title: '🍜 真台灣拉麵王',
			description: '台北拉麵口碑地圖',
			social: [],
			sidebar: [
				{
					label: '店家評論',
					items: [
						{ label: '藏味拉麵', slug: 'index' },
					],
				},
			],
			customCss: [
				'./src/styles/custom.css',
			],
		}),
	],
});

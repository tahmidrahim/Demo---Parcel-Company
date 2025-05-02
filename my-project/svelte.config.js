import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			// Optional: Set fallback for SPA behavior (e.g., if using client-side routing)
			// fallback: 'index.html'
		}),
		// Optional: If deploying to a subdirectory
		// paths: {
		//     base: '/your-subdirectory'
		// }
	}
};

export default config;

<script lang="ts">
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';

	let isOpen = false;
	const currentPath = derived(page, $page => $page.url.pathname);
</script>

<nav class="bg-gradient-to-r from-sky-400 via-sky-600 to-sky-900 text-white shadow-md sticky top-0 z-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-16">
			<!-- Logo -->
			<div class="text-2xl font-bold tracking-wide">
				LogisParcel
			</div>

			<!-- Desktop Links -->
			<div class="hidden md:flex space-x-6">
				{#each [
					{ name: 'Home', href: '/' },
					{ name: 'Services', href: '/services' },
					{ name: 'Tracking', href: '/tracking' },
					{ name: 'About', href: '/about' },
					{ name: 'Contact', href: '/contact' }
				] as link}
					<a
						href={link.href}
						class="hover:text-yellow-300 transition font-medium"
						class:underline={$currentPath === link.href}
					>
						{link.name}
					</a>
				{/each}
			</div>

			<!-- Mobile Button -->
			<div class="md:hidden">
				<button
					on:click={() => (isOpen = !isOpen)}
					class="text-white text-2xl focus:outline-none"
				>
					{#if isOpen}
						&times;
					{:else}
						&#9776;
					{/if}
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile Links -->
	{#if isOpen}
		<div class="md:hidden bg-gradient-to-r from-sky-400 via-sky-600 to-sky-900 px-4 pb-4 space-y-2 shadow-md">
			{#each [
				{ name: 'Home', href: '/' },
				{ name: 'Services', href: '/services' },
				{ name: 'Tracking', href: '/tracking' },
				{ name: 'About', href: '/about' },
				{ name: 'Contact', href: '/contact' }
			] as link}
				<a
					href={link.href}
					class="block hover:text-yellow-300 transition font-medium"
					class:underline={$currentPath === link.href}
				>
					{link.name}
				</a>
			{/each}
		</div>
	{/if}
</nav>
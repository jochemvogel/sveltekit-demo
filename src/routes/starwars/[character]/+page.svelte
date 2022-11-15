<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	// Workaround if API is not working
	import { API_VARIANT } from '$lib/env';
	let originalAPI = API_VARIANT === 'dev';
	let character = originalAPI ? data.result : data.result.result.properties;
</script>

<svelte:head>
	<title>{character.name} — Star Wars</title>
</svelte:head>

<a href="/starwars">&larr; Back</a>

<section>
	<h1>
		{character.name}
		{#if character.gender !== 'n/a'}
			<span>
				({character.gender})
			</span>
		{/if}
	</h1>
	<h2>
		{character.height}cm // {character.mass}kg
	</h2>

	<p>Birth year: {character.birth_year}</p>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	h1 {
		margin-bottom: 0;
	}
</style>

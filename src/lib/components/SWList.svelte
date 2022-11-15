<script lang="ts">
	import type { Character } from '$lib/types';
	import SWCard from './SWCard.svelte';
	import { slide } from 'svelte/transition';

	export let characters: Character[];
</script>

<ul transition:slide>
	{#each characters as character, index}
		<li>
			<SWCard {character} {index} />
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style: none;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		width: 100%;
		grid-gap: 2rem;
	}

	li {
		display: inline-block;
	}
</style>

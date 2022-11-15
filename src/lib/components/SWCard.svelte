<script lang="ts">
	import type { Character } from '$lib/types';

	export let character: Character;
	export let index: number;
</script>

<a href={`/starwars/${index + 1}`}>
	<article>
		<h1>{character.name ?? 'No name'}</h1>
		{#if character.gender}
			<p>Gender: {character.gender}</p>
		{/if}
		{#if character.height}
			<p>Height: {character.height}cm</p>
		{/if}
		{#if character.mass}
			<p>Mass: {character.mass}kg</p>
		{/if}
	</article>
</a>

<style>
	article {
		display: flex;
		flex-direction: column;
		align-items: center;
		border: 1px solid grey;
		padding: 1rem;
	}

	article:hover {
		cursor: pointer;
		transform: scale(1.025);
	}

	h1,
	p {
		margin: 0;
	}

	h1 {
		font-size: 2em;
	}
</style>

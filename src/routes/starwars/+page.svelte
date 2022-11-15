<script lang="ts">
	import type { PageData } from './$types';
	import SWList from '$lib/components/SWList.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Star Wars Characters</title>
</svelte:head>

<h1>Star Wars Characters</h1>
<SWList characters={data.result} />

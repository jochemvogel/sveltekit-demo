import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { allCharacters } from '$lib/stores';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch('starwars.json');

	if (res.ok) {
		const result = await res.json();
		
		return {
			result
		};
	}

	const { message } = await res.json();

	throw error(500, `[+page.ts]: ${message} `);
};
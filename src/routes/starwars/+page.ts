import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch('/api/starwars');

	if (res.ok) {
		const result = await res.json();

		return {
			result
		};
	}

	const { message } = await res.json();

	throw error(500, `[+page.ts]: ${message} `);
};

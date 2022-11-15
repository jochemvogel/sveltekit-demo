import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	const res = await fetch(`/api/starwars/${params.character}`);

	if (res.ok) {
		const result = await res.json();

		if (result.length === 0) {
			throw error(404);
		}

		return {
			result
		};
	}
	const { message } = await res.json();

	throw error(500, `[character/+page.ts]: ${message}`);
};

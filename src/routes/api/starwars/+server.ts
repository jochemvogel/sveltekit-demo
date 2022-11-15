import type { RequestHandler } from './$types';
import { API_URL } from '$lib/env';

export const GET: RequestHandler = async () => {
	try {
		const response = await fetch(`${API_URL}/people`);

		if (response.ok) {
			const result = await response.json();

			return new Response(JSON.stringify(result.results), {
				headers: {
					'content-type': 'application/json; charset=utf-8'
				}
			});
		}
	} catch (error) {
		console.error('[starwars.json]:', error);

		return new Response(JSON.stringify('Internal Server Error'), {
			status: 500
		});
	}
};

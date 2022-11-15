import type { RequestHandler } from './$types';
import { API_URL } from '$lib/env';

export const GET: RequestHandler = async (request) => {
	try {
        const characterId = request.params.character;        

		const response = await fetch(`${API_URL}/people/${characterId}`);

		if (response.ok) {
			const result = await response.json();            

			return new Response(JSON.stringify(result), {
				headers: {
					'content-type': 'application/json; charset=utf-8'
				}
			});
		}

		if (response.status === 404) {
			return new Response(JSON.stringify('Character cannot be found'), {
				status: 404
			});
		}
	} catch (error) {
		console.error('[character/index.json]:', error);
		return new Response(JSON.stringify('Internal Server Error'), {
			status: 500
		});
	}
};
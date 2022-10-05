import cookie from 'cookie';
import { v4 as uuid } from '@lukeed/uuid';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const userId = event.cookies.get('userid') || '';
	event.locals.userid = userId || uuid();

	// TODO https://github.com/sveltejs/kit/issues/1046
	if (event.url.searchParams.has('_method')) {
		event.request.method = event.url.searchParams.get('_method').toUpperCase();
	}

	const response = await resolve(event);

	if (userId) {
		// if this is the first time the user has visited this app,
		// set a cookie so that we recognise them when they return
		response.headers['set-cookie'] = cookie.serialize('userid', event.locals.userid, {
			path: '/',
			httpOnly: true
		});
	}

	return response;
};

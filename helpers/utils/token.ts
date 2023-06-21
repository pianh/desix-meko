import { GetServerSidePropsContext } from 'next';

import { getCookie } from './cookie';

export function getTokenInServer(
	context: GetServerSidePropsContext,
	cname: string = 'access_token'
) {
	const cookie = context.req.headers.cookie;
	const access_token = getCookie(`${cookie}`, cname);

	if (!access_token) {
		return '';
	}

	const response = 'Bearer '.concat(access_token);

	return response;
}

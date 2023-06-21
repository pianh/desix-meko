import useSWR, { SWRConfiguration } from 'swr';

import { QUERY_KEYS } from '~/constants';
import { ListParamsClient } from '~/models';
import { postApi } from '~/services';

export interface UsePostListProps {
	params: Partial<ListParamsClient>;
	options?: SWRConfiguration;
}

export function usePostList({ params, options }: UsePostListProps) {
	const swrReponse = useSWR(
		[QUERY_KEYS.GET_POSTS_LIST, params],
		() => postApi.client.getAllPosts(params),
		{
			dedupingInterval: 30 * 1000, // 30s
			...options,
		}
	);

	return swrReponse;
}

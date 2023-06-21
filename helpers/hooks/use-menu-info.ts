import useSWR, { SWRConfiguration } from 'swr';

import { QUERY_KEYS } from '~/constants';
import { GetMenuInfoParams_CLIENT, menuApi } from '~/services';

export interface UseMenuInfoProps {
	params: GetMenuInfoParams_CLIENT;
	options?: SWRConfiguration;
}

export function useMenuInfo({ params, options }: UseMenuInfoProps) {
	const swrReponse = useSWR(
		[QUERY_KEYS.GET_MENU_INFO, params],
		() => menuApi.client.getMenuInfo(params),
		{
			dedupingInterval: 30 * 1000, // 30s
			...options,
		}
	);

	return swrReponse;
}

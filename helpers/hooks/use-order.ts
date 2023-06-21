import useSWR, { SWRConfiguration } from 'swr';

import { QUERY_KEYS } from '~/constants';
import { GetOrdersListParams_CLIENT, orderApi } from '~/services';

export interface UseOrderProps {
	params: GetOrdersListParams_CLIENT;
	options?: SWRConfiguration;
}

export function useOrder({ params, options }: UseOrderProps) {
	const swrReponse = useSWR(
		[QUERY_KEYS.GET_ORDERS_LIST, params],
		() => orderApi.client.getOrdersList(params),
		{
			dedupingInterval: 30 * 1000, // 30s
			...options,
		}
	);

	return swrReponse;
}

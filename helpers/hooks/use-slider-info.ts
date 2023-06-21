import useSWR, { SWRConfiguration } from 'swr';

import { QUERY_KEYS } from '~/constants';
import { GetSliderInfoParams_CLIENT, sliderApi } from '~/services';

export interface UseSliderInfoProps {
	params: GetSliderInfoParams_CLIENT;
	options?: SWRConfiguration;
}

export function useSliderInfo({ params, options }: UseSliderInfoProps) {
	const swrReponse = useSWR(
		[QUERY_KEYS.GET_SLIDER_INFO, params],
		() => sliderApi.client.getSliderInfo(params),
		{
			dedupingInterval: 30 * 1000, // 30s
			...options,
		}
	);

	return swrReponse;
}

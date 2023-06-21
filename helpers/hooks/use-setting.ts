import useSWR, { SWRConfiguration } from 'swr';

import { QUERY_KEYS } from '~/constants';
import { settingApi } from '~/services';

export interface UseSettingProps {
	options?: SWRConfiguration;
}

export function useSetting({ options }: UseSettingProps) {
	const swrReponse = useSWR([QUERY_KEYS.GET_SETTING], () => settingApi.client.getSetting(), {
		dedupingInterval: 30 * 1000, // 30s
		...options,
	});

	return { ...swrReponse, data: swrReponse.data?.data };
}

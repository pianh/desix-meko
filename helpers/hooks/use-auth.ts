import useSWR, { SWRConfiguration } from 'swr';

import { STORAGE_KEYS } from '~/constants';
import {
	LoginPayload,
	RegisterPayload,
	SingleResponse,
	UpdateUserPayload,
	UserData,
} from '~/models';
import { authApi } from '~/services';

function getUserInfo(): SingleResponse<UserData> | null {
	try {
		return JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_INFO) || '');
	} catch (error) {
		return null;
	}
}

// Auth --> Protected Pages
// <Auth>{children}</Auth>
export function useAuth(option?: Partial<SWRConfiguration>) {
	const {
		data: profile,
		error,
		mutate,
	} = useSWR<SingleResponse<UserData> | null>('/profile', {
		dedupingInterval: 60 * 60 * 1000, // 1hr
		revalidateOnFocus: false,
		...option,
		fallbackData: getUserInfo(),
		onSuccess(data) {
			// Save user info to local storage
			localStorage.setItem(STORAGE_KEYS.USER_INFO, JSON.stringify(data));
		},
		onError() {
			// Failed to get profile --> Logout
			logout();
		},
	});

	const firstLoading = profile === undefined && error === undefined;

	async function login(payload: LoginPayload) {
		await authApi.client.login(payload);
		await mutate();
	}

	async function logout() {
		await authApi.client.logout();
		mutate(null, false);
		localStorage.removeItem(STORAGE_KEYS.USER_INFO);
	}

	async function register(payload: RegisterPayload) {
		await authApi.client.register(payload);
		await mutate();
	}

	async function updateUser(payload: UpdateUserPayload) {
		await authApi.client.updateUser(payload);
		await mutate();
	}

	return {
		profile,
		error,
		login,
		logout,
		register,
		updateUser,
		firstLoading,
	};
}

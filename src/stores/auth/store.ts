import { TokenResponse } from '@react-oauth/google';
import dayjs from 'dayjs';
import { create } from 'zustand';

import { OAUTH_COOKIE } from '@/constants/cookies';
import { Cookies } from '@/tools/cookies';

import { AuthStore } from './types';

const oauthCookie = JSON.parse(Cookies.get(OAUTH_COOKIE) ?? '{}');
console.log(oauthCookie);

export const useAuthStore = create<AuthStore>((set, get) => ({
	oauth: {
		accessToken: (oauthCookie.accessToken as string) || '',
		expiresAt: oauthCookie.expiresAt ? dayjs(oauthCookie.expiresAt) : dayjs(),
		tokenType: (oauthCookie.tokenType as string) || '',
	},

	updateOAuth({ access_token, expires_in, token_type }: TokenResponse) {
		const oauth = {
			accessToken: access_token,
			expiresAt: dayjs().add(expires_in, 'seconds'),
			tokenType: token_type,
		};

		set({
			oauth,
		});

		Cookies.set(
			OAUTH_COOKIE,
			JSON.stringify({
				...oauth,
				expiresAt: oauth.expiresAt.toISOString(),
			}),
			{
				expires: oauth.expiresAt.toDate(),
			},
		);
	},

	clearOAuth() {
		set({
			oauth: {
				accessToken: '',
				expiresAt: dayjs(),
				tokenType: '',
			},
		});

		Cookies.remove(OAUTH_COOKIE);
	},

	isTokenValid: () => {
		const oauth = get().oauth;

		return !!oauth.accessToken && oauth.expiresAt.subtract(10, 'seconds').isAfter(dayjs(), 'seconds');
	},

	hasAccessToken: () => !!get().oauth.accessToken,
}));

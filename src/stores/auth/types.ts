import { TokenResponse } from '@react-oauth/google';
import { Dayjs } from 'dayjs';

export interface AuthStore {
	oauth: {
		accessToken?: string;
		expiresAt?: Dayjs;
		tokenType?: string;
	};

	updateOAuth: (response: TokenResponse) => void;

	clearOAuth: () => void;

	isTokenValid: () => boolean;

	hasAccessToken: () => boolean;
}

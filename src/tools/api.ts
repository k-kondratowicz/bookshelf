import axios from 'axios';

import { useAuthStore } from '@/stores/auth';

import { API_BASE_URL } from '../constants/api';

declare module 'axios' {
	export interface AxiosRequestConfig {
		omitToken?: boolean;
	}
}

const axiosInstance = axios.create({
	baseURL: API_BASE_URL,
});

axios.defaults.headers.common = {
	Accept: 'application/json, multipart/form-data',
};

axiosInstance.interceptors.request.use(
	config => {
		if (config.method && config.method.toLowerCase() === 'post') {
			config.headers['Content-Type'] = 'application/json';
		}

		const shouldOmitToken = !!config.omitToken;

		if (shouldOmitToken) {
			return config;
		}

		const accessToken = useAuthStore.getState().oauth.accessToken;

		if (accessToken) {
			config.headers.Authorization = `Bearer ${accessToken}`;
		}

		return config;
	},
	error => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
	response => response,
	async error => {
		if (error.response?.status === 401) {
			useAuthStore.getState().clearOAuth();
		}

		return Promise.reject(error);
	},
);

export default axiosInstance;

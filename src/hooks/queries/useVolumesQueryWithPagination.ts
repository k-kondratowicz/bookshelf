import { useQuery } from '@tanstack/react-query';

import { API_VOLUME_FIELDS_LITE } from '@/constants/api';
import { usePagination } from '@/hooks/pagination';
import api from '@/tools/api';

export interface VolumesQueryWithPaginationOptions {
	endpoint: string;
	queryKey: (page: number, maxResults: number, endpoint: string, params?: Record<string, any>) => (string | number)[];
	params?: Record<string, any>;
	page?: number;
	maxResults?: number;
}

export function useVolumesQueryWithPagination<T extends { totalItems: number }>({
	endpoint,
	queryKey,
	params,
	page = 1,
	maxResults = 10,
}: VolumesQueryWithPaginationOptions) {
	const { page: currentPage, hasMoreResults, ...pagination } = usePagination(page);

	const query = useQuery({
		queryKey: queryKey(currentPage, maxResults, endpoint, params),
		queryFn: () => {
			return api.get<T>(endpoint, {
				params: {
					...(params || {}),
					maxResults,
					startIndex: (currentPage - 1) * maxResults,
					fields: API_VOLUME_FIELDS_LITE,
				},
			});
		},
	});

	const data = query.data?.data;
	const totalItems = data?.totalItems ?? 0;
	const hasMoreVolumes = hasMoreResults(totalItems, maxResults);

	return {
		...query,
		data,
		totalItems,
		page: currentPage,
		maxResults,
		hasMoreVolumes,
		...pagination,
	};
}

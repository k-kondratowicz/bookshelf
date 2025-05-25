import { BookshelfVolumes } from '@/types/bookshelf';

import { useVolumesQueryWithPagination } from './useVolumesQueryWithPagination';

export function useSearchVolumesQuery(q: string, page = 1, maxResults = 10) {
	return useVolumesQueryWithPagination<BookshelfVolumes>({
		endpoint: '/volumes',
		queryKey: (page, maxResults) => ['volumes-search', q, page, maxResults],
		params: { q },
		page,
		maxResults,
	});
}

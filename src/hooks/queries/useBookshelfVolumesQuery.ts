import { BookshelfVolumes } from '@/types/bookshelf';

import { useVolumesQueryWithPagination } from './useVolumesQueryWithPagination';

export function useBookshelfVolumesQuery(bookshelfId = 0, page = 1, maxResults = 10) {
	return useVolumesQueryWithPagination<BookshelfVolumes>({
		endpoint: `/mylibrary/bookshelves/${bookshelfId}/volumes`,
		queryKey: (page, maxResults) => ['bookshelf-volumes', bookshelfId, page, maxResults],
		page,
		maxResults,
	});
}

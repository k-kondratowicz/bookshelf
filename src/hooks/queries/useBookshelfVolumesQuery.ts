import { useQuery } from '@tanstack/react-query';

import api from '@/tools/api';
import { BookshelfVolumes } from '@/types/bookshelf';

export function useBookshelfVolumesQuery(bookshelfId = 0, page = 1, maxResults = 10) {
	const query = useQuery({
		queryKey: ['bookshelf-volumes', bookshelfId, page, maxResults],
		retry: 1,
		queryFn: () => {
			return api.get<BookshelfVolumes>(`/mylibrary/bookshelves/${bookshelfId}/volumes`, {
				params: {
					maxResults,
					startIndex: (page - 1) * maxResults,
					fields: 'kind,totalItems,items(id,kind,volumeInfo(title,authors,publishedDate,imageLinks(thumbnail)))',
				},
			});
		},
	});

	return {
		...query,
		data: query.data?.data,
	};
}

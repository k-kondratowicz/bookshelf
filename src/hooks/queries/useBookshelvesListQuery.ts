import { useQuery } from '@tanstack/react-query';

import api from '@/tools/api';
import { BookshelvesList } from '@/types/bookshelves';

export function useBookshelvesListQuery() {
	const query = useQuery({
		queryKey: ['bookshelves-list'],
		queryFn: () => {
			return api.get<BookshelvesList>('/mylibrary/bookshelves', {
				params: {
					fields: 'kind,items(id,volumeCount)',
				},
			});
		},
	});

	return {
		...query,
		data: query.data?.data,
	};
}

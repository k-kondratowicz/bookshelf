import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import api from '@/tools/api';

export interface BookshelvesQueryDataItem {
	volumeCount: number;
	id: number;
}

export interface BookshelvesQueryData {
	kind: string;
	items: BookshelvesQueryDataItem[];
}

export function useBookshelvesListQuery() {
	return useQuery<AxiosResponse<BookshelvesQueryData>>({
		queryKey: ['bookshelves-list'],
		queryFn: () => {
			return api.get('/mylibrary/bookshelves', {
				params: {
					fields: 'kind,items(id,volumeCount)',
				},
			});
		},
	});
}

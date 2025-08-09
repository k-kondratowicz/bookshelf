import { useMutation } from '@tanstack/react-query';

import api from '@/tools/api';
import queryClient from '@/tools/queryClient';

export function useAddVolumeToBookshelfMutation(bookshelfId: number) {
	const mutation = useMutation({
		onSuccess() {
			return Promise.all([
				queryClient.invalidateQueries({ queryKey: ['bookshelf-volumes', bookshelfId] }),
				queryClient.invalidateQueries({ queryKey: ['bookshelves-list'] }),
			]);
		},
		mutationFn: (volumeId: string) => {
			return api.post(`/mylibrary/bookshelves/${bookshelfId}/addVolume`, {
				volumeId,
			});
		},
	});

	return mutation;
}

import { useMutation } from '@tanstack/react-query';

import api from '@/tools/api';
import queryClient from '@/tools/queryClient';

export interface AddToFavMutationProps {
	volumeId: string;
}

export function useAddToFavMutation() {
	const bookshelfId = 0;

	const mutation = useMutation({
		onSuccess() {
			return Promise.all([
				queryClient.invalidateQueries({ queryKey: ['bookshelf-volumes', bookshelfId] }),
				queryClient.invalidateQueries({ queryKey: ['bookshelves-list'] }),
			]);
		},
		mutationFn: ({ volumeId }: AddToFavMutationProps) => {
			return api.post(`/mylibrary/bookshelves/${bookshelfId}/addVolume`, {
				volumeId,
				volumePosition: 0,
			});
		},
	});

	return mutation;
}

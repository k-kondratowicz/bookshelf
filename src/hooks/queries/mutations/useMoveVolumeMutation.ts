import { useMutation } from '@tanstack/react-query';

import api from '@/tools/api';
import queryClient from '@/tools/queryClient';

export interface MoveVolumeMutationProps {
	bookshelfId: string;
	volumeId: string;
}

export function useMoveVolumeMutation() {
	const mutation = useMutation({
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['bookshelf-volumes'] });
			queryClient.invalidateQueries({ queryKey: ['bookshelves-list'] });
		},
		mutationFn: ({ bookshelfId, volumeId }: MoveVolumeMutationProps) => {
			return api.post(`/mylibrary/bookshelves/${bookshelfId}/moveVolume`, {
				volumeId,
				volumePosition: 0,
			});
		},
	});

	return mutation;
}

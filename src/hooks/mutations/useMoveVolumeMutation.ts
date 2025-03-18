import { useMutation } from '@tanstack/react-query';

import api from '@/tools/api';

export interface MoveVolumeMutationProps {
	bookshelfId: string;
	volumeId: string;
}

export function useMoveVolumeMutation() {
	const mutation = useMutation({
		mutationFn: ({ bookshelfId, volumeId }: MoveVolumeMutationProps) => {
			return api.post(`/mylibrary/bookshelves/${bookshelfId}/moveVolume`, {
				volumeId,
				volumePosition: 0,
			});
		},
	});

	return mutation;
}

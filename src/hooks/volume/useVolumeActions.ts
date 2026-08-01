import to from 'await-to-js';

import { useAddVolumeToFavMutation, useMoveVolumeMutation } from '@/hooks/queries';

export function useVolumeActions(volumeId: string) {
	const moveToMutation = useMoveVolumeMutation();
	const addToFavMutation = useAddVolumeToFavMutation();

	const isAnyActionPending = moveToMutation.isPending || addToFavMutation.isPending;

	async function moveVolume(bookshelfId: string) {
		return to(
			moveToMutation.mutateAsync({
				volumeId,
				bookshelfId,
			}),
		);
	}

	async function addToFavourite() {
		return to(addToFavMutation.mutateAsync(volumeId));
	}

	return {
		moveVolume,
		addToFavourite,
		isAnyActionPending,
	};
}

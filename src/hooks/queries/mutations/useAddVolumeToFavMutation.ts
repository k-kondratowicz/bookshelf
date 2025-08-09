import { useAddVolumeToBookshelfMutation } from './useAddVolumeToBookshelfMutation';

export function useAddVolumeToFavMutation() {
	return useAddVolumeToBookshelfMutation(0);
}

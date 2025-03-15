import { useQuery } from '@tanstack/react-query';

import api from '@/tools/api';
import { VolumeFull } from '@/types/volume';

export function useVolumeQuery(volumeId: string) {
	const query = useQuery({
		queryKey: ['volume', volumeId],
		queryFn: () => {
			return api.get<VolumeFull>(`/volumes/${volumeId}`);
		},
	});

	return {
		...query,
		data: query.data?.data,
	};
}

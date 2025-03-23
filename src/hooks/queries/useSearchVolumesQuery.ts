import { useQuery } from '@tanstack/react-query';

import { API_VOLUME_FIELDS_LITE } from '@/constants/api';
import api from '@/tools/api';
import { VolumeSimple } from '@/types/volume';

export function fetchSearchVolumes(q?: string) {
	if (!q) {
		return Promise.resolve({ data: null });
	}

	return api.get<VolumeSimple>('/volumes', {
		params: {
			q,
			fields: API_VOLUME_FIELDS_LITE,
		},
	});
}

export function useSearchVolumesQuery(q?: string) {
	const query = useQuery({
		queryKey: ['volumes-search', q],
		queryFn: () => fetchSearchVolumes(q),
	});

	return {
		...query,
		data: query.data?.data,
	};
}

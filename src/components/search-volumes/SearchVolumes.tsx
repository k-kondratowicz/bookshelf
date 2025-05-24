import { useMemo } from 'react';

import VolumesWrapper from '@/components/volumes-wrapper/VolumesWrapper';
import { SEARCH_KEYWORDS_REGEX } from '@/constants/search';
import { useSearchVolumesQuery } from '@/hooks/queries';

export interface SearchVolumesProps {
	searchQuery: string;
}

export default function SearchVolumes({ searchQuery }: SearchVolumesProps) {
	const query = useSearchVolumesQuery(searchQuery);
	const { data, isPending } = query;

	const subtitle = useMemo(() => searchQuery.replace(SEARCH_KEYWORDS_REGEX, ''), [searchQuery]);

	// TODO: add pagination

	return (
		<VolumesWrapper
			title="Search"
			subtitle={`Results for "${subtitle}"`}
			data={data?.items}
			isDataPending={isPending}
		/>
	);
}

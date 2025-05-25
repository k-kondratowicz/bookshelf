import { useMemo } from 'react';

import Pagination from '@/components/pagination/Pagination';
import VolumesWrapper from '@/components/volumes-wrapper/VolumesWrapper';
import { SEARCH_KEYWORDS_REGEX } from '@/constants/search';
import { useSearchVolumesQuery } from '@/hooks/queries';

export interface SearchVolumesProps {
	searchQuery: string;
}

export default function SearchVolumes({ searchQuery }: SearchVolumesProps) {
	const { data, isPending, page, maxResults, setPage, totalItems } = useSearchVolumesQuery(searchQuery);

	const subtitle = useMemo(() => (searchQuery ?? '').replace(SEARCH_KEYWORDS_REGEX, ''), [searchQuery]);

	return (
		<VolumesWrapper title="Search" subtitle={`Results for "${subtitle}"`} data={data?.items} isDataPending={isPending}>
			{totalItems > maxResults && (
				<Pagination currentPage={page} maxResults={maxResults} totalItems={totalItems} onPageChange={setPage} />
			)}
		</VolumesWrapper>
	);
}

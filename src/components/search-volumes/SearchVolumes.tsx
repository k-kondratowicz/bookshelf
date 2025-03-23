import VolumesWrapper from '@/components/volumes-wrapper/VolumesWrapper';
import { useSearchVolumesQuery } from '@/hooks/queries';

export interface SearchVolumesProps {
	searchQuery: string;
}

export default function SearchVolumes({ searchQuery }: SearchVolumesProps) {
	const query = useSearchVolumesQuery(searchQuery);
	const { data, isPending } = query;

	// TODO: add pagination

	return (
		<VolumesWrapper
			title="Search"
			subtitle={`Results for "${searchQuery}"`}
			data={data?.items}
			isDataPending={isPending}
		/>
	);
}

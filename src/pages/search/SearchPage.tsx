import { useSearchParams } from 'react-router';

import SearchVolumes from '@/components/search-volumes/SearchVolumes';

export default function SearchPage() {
	const [searchParams] = useSearchParams();
	const searchQuery = searchParams.get('q');

	return <SearchVolumes searchQuery={searchQuery} />;
}

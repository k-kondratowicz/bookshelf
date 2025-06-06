import { useSearchParams } from 'react-router';

import SearchVolumes from '@/components/search-volumes/SearchVolumes';

export default function SearchPage() {
	const [searchParams] = useSearchParams();
	const searchQuery = searchParams.get('q');

	return (
		<>
			<title>Search Results | Bookshelf</title>
			{searchQuery && <SearchVolumes searchQuery={searchQuery} />}
			{!searchQuery && <p className="search-page__empty">Please enter a search query.</p>}
		</>
	);
}

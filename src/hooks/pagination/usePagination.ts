import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';

export function usePagination(pageStart = 1) {
	const [page, setPage] = useState(pageStart);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [_, setSearchParams] = useSearchParams();

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});

		setSearchParams(params => {
			params.set('page', page.toString());

			return params;
		});
	}, [page, setSearchParams]);

	function nextPage() {
		setPage(prev => prev + 1);
	}

	function previousPage() {
		setPage(prev => Math.max(prev - 1, 1));
	}

	function resetPagination() {
		setPage(1);
	}

	function hasMoreResults(totalItems: number, maxResults: number) {
		return maxResults * page < totalItems;
	}

	return {
		page,
		setPage,
		nextPage,
		previousPage,
		resetPagination,
		hasMoreResults,
	};
}

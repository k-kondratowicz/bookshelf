import { useState } from 'react';

export function usePagination(pageStart = 1) {
	const [page, setPage] = useState(pageStart);

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

import './Pagination.scss';

import Button from '../button/Button';

export interface PaginationProps {
	currentPage: number;
	totalItems: number;
	maxResults: number;
	onPageChange?: (page: number) => void;
}

export default function Pagination({ currentPage, totalItems, maxResults, onPageChange }: PaginationProps) {
	const hasMoreResults = maxResults * currentPage < totalItems;

	return (
		<div className="pagination">
			<Button
				theme="medium"
				className="pagination__button pagination__button--prev"
				onClick={() => onPageChange?.(currentPage - 1)}
				disabled={currentPage <= 1}
			>
				Previous
			</Button>

			<span className="pagination__current-page">{currentPage}</span>

			<Button
				theme="medium"
				className="pagination__button pagination__button--next"
				onClick={() => onPageChange?.(currentPage + 1)}
				disabled={!hasMoreResults}
			>
				Next
			</Button>
		</div>
	);
}

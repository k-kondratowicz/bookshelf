import Button from '@/components/button/Button';

import styles from './Pagination.module.scss';

export interface PaginationProps {
	currentPage: number;
	totalItems: number;
	maxResults: number;
	onPageChange?: (page: number) => void;
}

export default function Pagination({ currentPage, totalItems, maxResults, onPageChange }: PaginationProps) {
	const hasMoreResults = maxResults * currentPage < totalItems;

	return (
		<div className={styles.container}>
			<Button
				theme="medium"
				className={styles.button}
				onClick={() => onPageChange?.(currentPage - 1)}
				disabled={currentPage <= 1}
			>
				Previous
			</Button>

			<span className={styles.currentPage}>{currentPage}</span>

			<Button
				theme="medium"
				className={styles.button}
				onClick={() => onPageChange?.(currentPage + 1)}
				disabled={!hasMoreResults}
			>
				Next
			</Button>
		</div>
	);
}

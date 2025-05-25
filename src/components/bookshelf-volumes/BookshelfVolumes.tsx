import { ReactNode } from 'react';

import Pagination from '@/components/pagination/Pagination';
import VolumesWrapper from '@/components/volumes-wrapper/VolumesWrapper';
import { useBookshelfVolumesQuery } from '@/hooks/queries';

export interface BookshelfVolumesChildrenProps {
	query: ReturnType<typeof useBookshelfVolumesQuery>;
}

export interface BookshelfVolumesProps {
	title?: string;
	subtitle?: string;
	bookshelfId: number;
	maxResults?: number;
	showPagination?: boolean;
	children?: ReactNode | ((props: BookshelfVolumesChildrenProps) => ReactNode);
}

export default function BookshelfVolumes({
	title,
	subtitle,
	bookshelfId,
	maxResults = 2,
	showPagination = true,
	children,
}: BookshelfVolumesProps) {
	const query = useBookshelfVolumesQuery(bookshelfId, 1, maxResults);
	const { data, isPending, setPage, page, totalItems } = query;

	return (
		<VolumesWrapper title={title} subtitle={subtitle} data={data?.items} isDataPending={isPending}>
			{showPagination && totalItems > maxResults && (
				<Pagination currentPage={page} maxResults={maxResults} totalItems={totalItems} onPageChange={setPage} />
			)}

			{typeof children === 'function' ? children({ query }) : children}
		</VolumesWrapper>
	);
}

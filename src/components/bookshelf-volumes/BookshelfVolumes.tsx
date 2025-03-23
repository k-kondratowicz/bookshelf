import { ReactNode } from 'react';

import VolumesWrapper from '@/components/volumes-wrapper/VolumesWrapper';
import { useBookshelfVolumesQuery } from '@/hooks/queries';

export interface BookshelfVolumesChildrenProps {
	query: ReturnType<typeof useBookshelfVolumesQuery>;
	bookshelfId: number;
	page: number;
	maxResults: number;
	hasMoreVolumes: boolean;
}

export interface BookshelfVolumesProps {
	title?: string;
	subtitle?: string;
	bookshelfId: number;
	maxResults?: number;
	children?: ReactNode | ((props: BookshelfVolumesChildrenProps) => ReactNode);
}

export default function BookshelfVolumes({
	title,
	subtitle,
	bookshelfId,
	maxResults = 10,
	children,
}: BookshelfVolumesProps) {
	const query = useBookshelfVolumesQuery(bookshelfId, 1, maxResults);
	const { data, isPending, page } = query;
	const hasMoreVolumes = maxResults < (data?.totalItems ?? 0);

	// TODO: add pagination

	return (
		<VolumesWrapper title={title} subtitle={subtitle} data={data?.items} isDataPending={isPending}>
			{typeof children === 'function'
				? children({
						query,
						bookshelfId,
						page,
						maxResults,
						hasMoreVolumes,
					})
				: children}
		</VolumesWrapper>
	);
}

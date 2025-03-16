import './VolumesTable.scss';

import { ReactNode } from 'react';

import { useBookshelfVolumesQuery } from '@/hooks/queries';
import { parsePublishedDate } from '@/utils/parsePublishedDate';

import Table from '../table/Table';
import VolumeActionButton from '../volume/action-button/VolumeActionButton';
import VolumeHeader from '../volume/header/VolumeHeader';

export interface VolumesTableChildrenData extends Omit<VolumesTableProps, 'children' | 'title'> {
	query: ReturnType<typeof useBookshelfVolumesQuery>;
	hasMoreVolumes: boolean;
}

export interface VolumesTableProps {
	bookshelfId: number;
	page: number;
	maxResults: number;
	title?: string;
	subtitle?: string;
	children?: ReactNode | ((props: Omit<VolumesTableChildrenData, 'children'>) => ReactNode);
}

export default function VolumesTable({ bookshelfId, page, maxResults, title, subtitle, children }: VolumesTableProps) {
	const query = useBookshelfVolumesQuery(bookshelfId, page, maxResults);
	const { data, isPending } = query;
	console.log(data);

	const hasMoreVolumes = maxResults < (data?.totalItems ?? 0);

	if (isPending) {
		// todo: add skeleton loader
		return <div>Loading...</div>;
	}

	if (!data?.items) {
		// todo: add error state
		return null;
	}

	return (
		<div className="volumes-table">
			{title && <h2 className="volumes-table__title">{title}</h2>}

			{subtitle && <p className="volumes-table__subtitle">{subtitle}</p>}

			<Table
				layout={`1fr 6fr 4fr 1fr`}
				columns={[
					{
						key: 'id',
						title: '#',
						selector: (_, idx) => idx + 1,
					},
					{
						key: 'title',
						title: 'Title',
						selector: volume => <VolumeHeader volume={volume} />,
					},
					{
						key: 'year',
						title: 'Publication Year',
						selector: ({ volumeInfo }) => parsePublishedDate(volumeInfo.publishedDate),
					},
					{
						key: 'actions',
						title: `Actions`,
						selector: volume => <VolumeActionButton volume={volume} />,
					},
				]}
				data={data.items}
			/>

			{typeof children === 'function'
				? children({
						query,
						bookshelfId,
						page,
						maxResults,
						hasMoreVolumes,
					})
				: children}
		</div>
	);
}

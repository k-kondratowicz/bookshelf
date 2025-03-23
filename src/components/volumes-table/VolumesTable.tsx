import './VolumesTable.scss';

import Table from '@/components/table/Table';
import VolumeActionsButton from '@/components/volume/actions-button/VolumeActionsButton';
import VolumeHeader from '@/components/volume/header/VolumeHeader';
import { VolumeSimple } from '@/types/volume';
import { parsePublishedDate } from '@/utils/parsePublishedDate';

export interface VolumesTableProps {
	data: VolumeSimple[];
}

export default function VolumesTable({ data }: VolumesTableProps) {
	return (
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
					selector: volume => <VolumeActionsButton volume={volume} />,
				},
			]}
			data={data}
		/>
	);
}

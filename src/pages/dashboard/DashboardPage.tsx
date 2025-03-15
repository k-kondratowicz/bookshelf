import './DashboardPage.scss';

import Button from '@/components/button/Button';
import { Table } from '@/components/table/Table';
import VolumeActionButton from '@/components/volume/action-button/VolumeActionButton';
import VolumeHeader from '@/components/volume/header/VolumeHeader';
import { useBookshelfVolumesQuery } from '@/hooks/queries';

export default function DashboardPage() {
	const maxResults = 3;
	const { data, isPending } = useBookshelfVolumesQuery(3, 1, maxResults);
	console.log(data);

	return (
		<div className="dashboard-page">
			<h1 className="dashboard-page__title">
				Welcome to <br />
				Your Bookshelf! 📚
			</h1>

			<p className="dashboard-page__description">
				Track your reads, <br />
				discover new books, <br />
				and build your perfect collection.
			</p>

			<div className="dashboard-page__reading-now">
				{isPending && <div>Loading...</div>}

				{data?.items && (
					<>
						<div>Reading Now...</div>

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
									selector: row => <VolumeHeader volume={row} showLink />,
								},
								{
									key: 'year',
									title: 'Publication Year',
									selector: row => <span>{row.volumeInfo.publishedDate.slice(0, 4)}</span>,
								},
								{
									key: 'actions',
									title: `Actions`,
									selector: row => <VolumeActionButton />,
								},
							]}
							data={data.items}
						/>

						{maxResults < data.totalItems && (
							<Button theme="light" size="small" className="dashboard-page__view-all">
								View All
							</Button>
						)}
					</>
				)}
			</div>
		</div>
	);
}

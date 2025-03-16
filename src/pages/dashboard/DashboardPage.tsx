import './DashboardPage.scss';

import LinkButton from '@/components/link-button/LinkButton';
import VolumesTable from '@/components/volumes-table/VolumesTable';

export default function DashboardPage() {
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
				<VolumesTable bookshelfId={3} page={1} maxResults={3} title="Reading Now">
					{({ hasMoreVolumes }) =>
						hasMoreVolumes && (
							<LinkButton to="/reading-now" theme="light" size="small" className="dashboard-page__view-all">
								View All
							</LinkButton>
						)
					}
				</VolumesTable>
			</div>
		</div>
	);
}

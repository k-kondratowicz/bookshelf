import './DashboardPage.scss';

import BookshelfVolumes from '@/components/bookshelf-volumes/BookshelfVolumes';
import LinkButton from '@/components/link-button/LinkButton';

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
				<BookshelfVolumes bookshelfId={3} showPagination={false} subtitle="Reading Now..." maxResults={3}>
					{({ query }) =>
						query.hasMoreVolumes && (
							<LinkButton to="/reading-now" theme="light" size="small" className="dashboard-page__view-all">
								View All
							</LinkButton>
						)
					}
				</BookshelfVolumes>
			</div>
		</div>
	);
}

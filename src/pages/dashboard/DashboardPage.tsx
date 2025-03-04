import './DashboardPage.scss';

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

			<div className="dashboard-page__reading-now"></div>
		</div>
	);
}

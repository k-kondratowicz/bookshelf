import './DashboardPage.scss';

import { Table } from '@/components/table/Table';

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
							selector: row => <span>{row.name}</span>,
						},
						{
							key: 'year',
							title: 'Publication Year',
							selector: row => <span>{row.year}</span>,
						},
						{
							key: 'actions',
							title: `Actions`,
							selector: row => <span>{''}</span>,
						},
					]}
					data={[
						{
							id: 1,
							name: 'John Doe',
							year: 2021,
							email: 'email@test.com',
						},
						{
							id: 2,
							year: 2021,
							name: 'Jane Doe',
						},
					]}
				/>
			</div>
		</div>
	);
}

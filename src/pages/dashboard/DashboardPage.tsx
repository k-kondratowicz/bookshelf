import BookshelfVolumes from '@/components/bookshelf-volumes/BookshelfVolumes';
import LinkButton from '@/components/link-button/LinkButton';

import styles from './DashboardPage.module.scss';

export default function DashboardPage() {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				Welcome to <br />
				Your Bookshelf! 📚
			</h1>

			<p className={styles.description}>
				Track your reads, <br />
				discover new books, <br />
				and build your perfect collection.
			</p>

			<div className={styles.readingNow}>
				<BookshelfVolumes bookshelfId={3} showPagination={false} subtitle="Reading Now..." maxResults={3}>
					{({ query }) =>
						query.hasMoreVolumes && (
							<LinkButton to="/reading-now" theme="light" className={styles.viewAll}>
								View All
							</LinkButton>
						)
					}
				</BookshelfVolumes>
			</div>
		</div>
	);
}

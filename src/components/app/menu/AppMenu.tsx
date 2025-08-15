import { NavLink } from 'react-router';

import { NAV_LINKS } from '@/constants/nav';
import { useBookshelvesListQuery } from '@/hooks/queries';
import { BookshelvesListItem } from '@/types/bookshelves';

import styles from './AppMenu.module.scss';

function getBookshelfVolumeCount(id: number, list?: BookshelvesListItem[]) {
	return list?.find(item => item.id === id)?.volumeCount ?? 0;
}

export default function AppMenu() {
	const { data, isPending } = useBookshelvesListQuery();

	return (
		<nav className={`${styles.container}`} aria-labelledby="main-navigation">
			<span id="main-navigation" className={styles.label}>
				My Library
			</span>

			{NAV_LINKS.map(({ to, label, id }) => {
				return (
					<NavLink
						to={to}
						className={({ isActive }) => `${styles.link} ${isActive ? styles.isActive : ''}`}
						key={`nav-link-${to}`}
						viewTransition={true}
					>
						<span>{label}</span>

						{id !== undefined && (
							<span className={`${styles.linkCount} ${isPending ? styles.isPending : ''}`}>
								{getBookshelfVolumeCount(id, data?.items)}
							</span>
						)}
					</NavLink>
				);
			})}
		</nav>
	);
}

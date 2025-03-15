import './AppMenu.scss';

import { NavLink } from 'react-router';

import { NAV_LINKS } from '@/constants/nav';
import { useBookshelvesListQuery } from '@/hooks/queries';
import { BookshelvesListItem } from '@/types/bookshelves';

function getBookshelfVolumeCount(id: number, list?: BookshelvesListItem[]) {
	return list?.find(item => item.id === id)?.volumeCount ?? 0;
}

export default function AppMenu() {
	const { data, isPending } = useBookshelvesListQuery();

	return (
		<nav className="app-menu" aria-labelledby="main-navigation">
			<span id="main-navigation" className="app-menu__label">
				My Library
			</span>

			{NAV_LINKS.map(({ to, label, id }) => {
				return (
					<NavLink
						to={to}
						className={({ isActive }) => `app-menu__link ${isActive ? 'is-active' : ''}`}
						key={`nav-link-${to}`}
						viewTransition={true}>
						<span>{label}</span>

						{id !== undefined && (
							<span className={`app-menu__link-count ${isPending ? 'is-pending' : ''}`}>
								{getBookshelfVolumeCount(id, data?.items)}
							</span>
						)}
					</NavLink>
				);
			})}
		</nav>
	);
}

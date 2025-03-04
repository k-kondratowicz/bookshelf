import './AppMenu.scss';

import { NavLink } from 'react-router';

import { NAV_LINKS } from '@/constants/nav';
import { BookshelvesQueryDataItem, useBookshelvesListQuery } from '@/hooks/queries';

function getBookshelfCount(id: number, list?: BookshelvesQueryDataItem[]) {
	return list?.find(item => item.id === id)?.volumeCount ?? '';
}

export default function AppMenu() {
	const { data: response, isPending } = useBookshelvesListQuery();

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
						key={`nav-link-${to}`}>
						<span>{label}</span>

						{id !== undefined && (
							<span className={`app-menu__link-count ${isPending ? 'is-pending' : ''}`}>
								{getBookshelfCount(id, response?.data.items)}
							</span>
						)}
					</NavLink>
				);
			})}
		</nav>
	);
}

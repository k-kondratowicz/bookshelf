import './AppHeader.scss';

import AppMenu from '../menu/AppMenu';
import AppSearch from '../search/AppSearch';

export default function AppHeader() {
	return (
		<header className="app-header">
			<h1 className="app-header__logo">bookshelf</h1>

			<AppMenu />

			<div className="app-header__search">
				<AppSearch />
			</div>
		</header>
	);
}

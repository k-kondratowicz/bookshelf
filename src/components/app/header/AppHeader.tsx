import './AppHeader.scss';

import { useAuthStore } from '@/stores/auth';

import Button from '../../button/Button';
import AppMenu from '../menu/AppMenu';
import AppSearch from '../search/AppSearch';

export default function AppHeader() {
	const clearOAuth = useAuthStore(state => state.clearOAuth);

	return (
		<header className="app-header">
			<h1 className="app-header__logo">bookshelf</h1>

			<AppMenu />

			<Button theme="medium" className="app-header__logout" onClick={clearOAuth}>
				⏻<span className="visually-hidden">Logout</span>
			</Button>

			<div className="app-header__search">
				<AppSearch />
			</div>
		</header>
	);
}

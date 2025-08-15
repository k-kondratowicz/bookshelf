import AppMenu from '@/components/app/menu/AppMenu';
import AppSearch from '@/components/app/search/AppSearch';
import Button from '@/components/button/Button';
import { useAuthStore } from '@/stores/auth';

import styles from './AppHeader.module.scss';

export default function AppHeader() {
	const clearOAuth = useAuthStore(state => state.clearOAuth);

	return (
		<header className={styles.container}>
			<h1 className={styles.logo}>bookshelf</h1>

			<AppMenu />

			<Button theme="medium" className={styles.logout} onClick={clearOAuth}>
				⏻<span className="visually-hidden">Logout</span>
			</Button>

			<div className={styles.search}>
				<AppSearch />
			</div>
		</header>
	);
}

import { Outlet } from 'react-router';

import AppHeader from '@/components/app/header/AppHeader';
import AppToast from '@/components/app/toast/AppToast';

import styles from './AppLayout.module.scss';

export default function AppLayout() {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<AppHeader />
			</div>

			<main className={styles.content}>
				<Outlet />
			</main>

			<AppToast />
		</div>
	);
}

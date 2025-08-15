import { Outlet } from 'react-router';

import AppToast from '@/components/app/toast/AppToast';

import styles from './DefaultLayout.module.scss';

export default function DefaultLayout() {
	return (
		<div>
			<main className={styles.content}>
				<Outlet />
			</main>

			<AppToast />
		</div>
	);
}

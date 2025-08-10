import './AppLayout.scss';

import { Outlet } from 'react-router';

import AppHeader from '@/components/app/header/AppHeader';
import AppToast from '@/components/app/toast/AppToast';

export default function AppLayout() {
	return (
		<div className="app-layout">
			<div className="app-layout__header">
				<AppHeader />
			</div>

			<main className="app-layout__content">
				<Outlet />
			</main>

			<AppToast />
		</div>
	);
}

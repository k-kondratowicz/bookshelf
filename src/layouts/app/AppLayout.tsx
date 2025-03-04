import './AppLayout.scss';

import { Outlet } from 'react-router';

import AppHeader from '@/components/app/header/AppHeader';

export default function AppLayout() {
	return (
		<div className="app-layout">
			<div className="app-layout__header">
				<AppHeader />
			</div>

			<main className="app-layout__content">
				<Outlet />
			</main>
		</div>
	);
}

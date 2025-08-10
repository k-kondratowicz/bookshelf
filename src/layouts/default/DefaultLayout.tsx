import './DefaultLayout.scss';

import { Outlet } from 'react-router';

import AppToast from '@/components/app/toast/AppToast';

export default function DefaultLayout() {
	return (
		<div className="default-layout">
			<main className="default-layout__content">
				<Outlet />
			</main>

			<AppToast />
		</div>
	);
}

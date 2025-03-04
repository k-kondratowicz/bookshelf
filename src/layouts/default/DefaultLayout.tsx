import './DefaultLayout.scss';

import { Outlet } from 'react-router';

export default function DefaultLayout() {
	return (
		<div className="default-layout">
			<main className="default-layout__content">
				<Outlet />
			</main>
		</div>
	);
}

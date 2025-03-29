import { Navigate, Outlet, useLocation } from 'react-router';

import { useAuthStore } from '@/stores/auth';

export default function PublicRoute() {
	const location = useLocation();
	const oauth = useAuthStore(state => state.oauth);

	if (location.pathname.includes('/login') && oauth.accessToken) {
		return <Navigate to="/dashboard" />;
	}

	return <Outlet />;
}

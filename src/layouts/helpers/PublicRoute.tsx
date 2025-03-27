import { Navigate, Outlet, useLocation } from 'react-router';

import { useAuthStore } from '@/stores/auth';

export default function PublicRoute() {
	const location = useLocation();
	const isTokenValid = useAuthStore(state => state.isTokenValid);

	if (location.pathname.includes('/login') && isTokenValid()) {
		return <Navigate to="/dashboard" />;
	}

	return <Outlet />;
}

import { Navigate, Outlet } from 'react-router';

import { useAuthStore } from '@/stores/auth';

export default function PrivateRoute() {
	const isTokenValid = useAuthStore(state => state.isTokenValid);

	if (!isTokenValid()) {
		return <Navigate to="/login" />;
	}

	return <Outlet />;
}

import { Navigate, Outlet } from 'react-router';

import { useAuthStore } from '@/stores/auth';

export default function PrivateRoute() {
	const oauth = useAuthStore(state => state.oauth);

	if (!oauth.accessToken) {
		return <Navigate to="/login" />;
	}

	return <Outlet />;
}

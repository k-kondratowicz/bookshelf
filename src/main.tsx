import './index.scss';

import { GoogleOAuthProvider } from '@react-oauth/google';
import { QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import DefaultLayout from '@/layouts/default/DefaultLayout.tsx';
import queryClient from '@/tools/queryClient.ts';

import AppLayout from './layouts/app/AppLayout.tsx';
import PrivateRoute from './layouts/helpers/PrivateRoute.tsx';
import PublicRoute from './layouts/helpers/PublicRoute.tsx';
import DashboardPage from './pages/dashboard/DashboardPage.tsx';
import LoginPage from './pages/login/LoginPage.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<Routes>
						<Route element={<DefaultLayout />}>
							<Route index path="/" element={<Navigate to="/login" replace />} />

							<Route element={<PublicRoute />}>
								<Route path="login" element={<LoginPage />} />
							</Route>

							<Route path="*" element={<div>Not Found</div>} />
						</Route>

						<Route element={<AppLayout />}>
							<Route element={<PrivateRoute />}>
								<Route path="dashboard" element={<DashboardPage />} />
								<Route path="favorites" element={<div>Favorites</div>} />
								<Route path="reading-now" element={<div>Reading now</div>} />
								<Route path="to-read" element={<div>To read</div>} />
								<Route path="have-read" element={<div>Have read</div>} />
								<Route path="search" element={<div>Search</div>} />
								<Route path="volume/:volumeId" element={<div>Volume Id</div>} />
							</Route>
						</Route>
					</Routes>
				</BrowserRouter>
			</QueryClientProvider>
		</GoogleOAuthProvider>
	</StrictMode>,
);

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
import BookshelfPage from './pages/bookshelf/BookshelfPage.tsx';
import DashboardPage from './pages/dashboard/DashboardPage.tsx';
import LoginPage from './pages/login/LoginPage.tsx';
import SearchPage from './pages/search/SearchPage.tsx';
import VolumePage from './pages/volume/VolumePage.tsx';

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
								<Route path="favorites" element={<BookshelfPage id={0} title="Favorites" />} />
								<Route path="reading-now" element={<BookshelfPage id={3} title="Reading Now" />} />
								<Route path="to-read" element={<BookshelfPage id={2} title="To Read" />} />
								<Route path="have-read" element={<BookshelfPage id={4} title="Have Read" />} />
								<Route path="search" element={<SearchPage />} />
								<Route path="volume/:volumeId" element={<VolumePage />} />
							</Route>
						</Route>
					</Routes>
				</BrowserRouter>
			</QueryClientProvider>
		</GoogleOAuthProvider>
	</StrictMode>,
);

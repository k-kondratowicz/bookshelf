import './LoginPage.scss';

import { useGoogleLogin } from '@react-oauth/google';

import Button from '@/components/button/Button';
import { useAuthStore } from '@/stores/auth';

export default function LoginPage() {
	const updateOAuth = useAuthStore(state => state.updateOAuth);

	const login = useGoogleLogin({
		onSuccess: codeResponse => updateOAuth(codeResponse),
		flow: 'implicit',
		scope:
			'email profile openid https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/books',
	});

	return (
		<div className="login-page">
			<h1 className="login-page__title">Turn the page on a new chapter – log in with Google!</h1>

			<Button theme="light" className="login-page__btn" onClick={() => login()}>
				Sign in with Google 🚀
			</Button>
		</div>
	);
}

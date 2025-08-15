import { useGoogleLogin } from '@react-oauth/google';

import Button from '@/components/button/Button';
import { useAuthStore } from '@/stores/auth';

import styles from './LoginPage.module.scss';

export default function LoginPage() {
	const updateOAuth = useAuthStore(state => state.updateOAuth);

	const login = useGoogleLogin({
		onSuccess: codeResponse => updateOAuth(codeResponse),
		flow: 'implicit',
		scope:
			'email profile openid https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/books',
	});

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Turn the page on a new chapter – log in with Google!</h1>

			<Button theme="light" className={styles.btn} onClick={() => login()}>
				Sign in with Google 🚀
			</Button>
		</div>
	);
}

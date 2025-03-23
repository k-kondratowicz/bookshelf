import './AppSearch.scss';

import { useNavigate } from 'react-router';

import Button from '@/components/button/Button';

export default function AppSearch() {
	const navigate = useNavigate();

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const form = e.currentTarget;
		const formData = new FormData(form);
		const searchQuery = formData.get('q');

		if (!searchQuery || typeof searchQuery !== 'string') {
			return;
		}

		/* TODO: Prefetch search volumes */

		navigate(`/search?q=${encodeURI(searchQuery)}`);

		console.log(searchQuery);
	}

	return (
		<form className="app-search" onSubmit={handleSubmit}>
			<label className="app-search__label">
				<span className="visually-hidden">Search for books</span>
				<input className="app-search__input" type="search" name="q" placeholder="Search for books" />
			</label>

			<Button type="submit" theme="dark" className="app-search__trigger">
				🔍
				<span className="visually-hidden">Search</span>
			</Button>
		</form>
	);
}

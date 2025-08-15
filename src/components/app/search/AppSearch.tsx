import { useIsFetching } from '@tanstack/react-query';
import { useRef } from 'react';
import { useNavigate } from 'react-router';

import Button from '@/components/button/Button';

import styles from './AppSearch.module.scss';

export default function AppSearch() {
	const navigate = useNavigate();
	const isSearchPending = useIsFetching({
		queryKey: ['volumes-search'],
	});
	const currentSearchQuery = useRef<string>(null);

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (isSearchPending) {
			return;
		}

		const form = e.currentTarget;
		const formData = new FormData(form);
		const searchQuery = formData.get('q');

		if (!searchQuery || typeof searchQuery !== 'string' || currentSearchQuery.current === searchQuery) {
			return;
		}

		currentSearchQuery.current = searchQuery;

		/* TODO: Prefetch search volumes */

		return navigate(`/search?q=${encodeURI(searchQuery)}`);
	}

	return (
		<form className={styles.container} onSubmit={handleSubmit}>
			<label className={styles.label}>
				<span className="visually-hidden">Search for books</span>
				<input className={styles.input} type="search" name="q" placeholder="Search for books" />
			</label>

			<Button type="submit" theme="dark" className={styles.trigger} loading={!!isSearchPending}>
				🔍
				<span className="visually-hidden">Search</span>
			</Button>
		</form>
	);
}

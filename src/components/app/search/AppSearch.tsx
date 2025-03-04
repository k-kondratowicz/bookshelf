import './AppSearch.scss';

export default function AppSearch() {
	return (
		<div className="app-search">
			<input className="app-search__input" type="text" placeholder="Search for books" />

			<button className="app-search__trigger" aria-label="Search">
				🔍
			</button>
		</div>
	);
}

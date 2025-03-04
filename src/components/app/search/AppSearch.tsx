import './AppSearch.scss';

import Button from '../../button/Button';

export default function AppSearch() {
	return (
		<div className="app-search">
			<input className="app-search__input" type="text" placeholder="Search for books" />

			<Button theme="dark" className="app-search__trigger" aria-label="Search">
				🔍
			</Button>
		</div>
	);
}

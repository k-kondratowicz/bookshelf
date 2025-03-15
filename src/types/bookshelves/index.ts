export interface BookshelvesListItem {
	volumeCount: number;
	id: number;
}

export interface BookshelvesList {
	kind: string;
	items: BookshelvesListItem[];
}

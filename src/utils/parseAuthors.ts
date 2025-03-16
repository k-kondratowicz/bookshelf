export function parseAuthors(authors?: string[]) {
	return authors?.join(', ') || 'Unknown Author';
}

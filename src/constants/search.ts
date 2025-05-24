export const SEARCH_KEYWORDS = ['inpublisher', 'inauthor', 'intitle', 'subject', 'isbn', 'lccn', 'oclc'];
export const SEARCH_KEYWORDS_REGEX = new RegExp(`(${SEARCH_KEYWORDS.join(':|')})`, 'g');

export function pageContent(slug) {
	const pages = JSON.parse(localStorage.getItem('pages-data')).filter(page => page.slug === slug);
	const desiredPage = pages[0];
	return desiredPage;
}
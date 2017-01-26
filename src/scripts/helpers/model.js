// Libs
import axios from 'axios';

const model = {};

/**
 * @desc Get type specific content from WP REST API
 *
 * @param {string, number} type of content, posts, pages, or media
 * and the number of results.
 */
model.getContent = (type, number) =>
	axios.get(`/wp-json/wp/v2/${type}/?per_page=${number}`);

/**
 * @desc Get a single piece of content.
 *
 * @param {string, string} type of content, posts, page, or media
 * based on the slug.
 */
model.getSingleContent = (type, slug) =>
	axios.get(`/wp-json/wp/v2/${type}/?slug=${slug}`);

/**
 * @desc Get all content from WP REST API
 *
 * @param {string, string, string} three types of content (pages, posts, media)
 */
model.apiCall = {
	getHeaderContent: (type1, number, type2, slug2) => axios.all([model.getContent(type1, number), model.getSingleContent(type2, slug2)])
		.then(arr => {
			return {
				mainPageTitles: arr[0].data.filter(page => page.parent === 0 && page.slug === 'about' || page.slug === 'tjanster' || page.slug === 'kontakt').sort((a, b) => (a.menu_order > b.menu_order) ? 1 : (a.menu_order < b.menu_order) ? -1 : 0),
				logo: arr[1].data.filter(page => page.title.rendered === 'DKN_Logotyp')[0],
			};
		}),

	getAboutContent: (type1, slug1, type2, slug2) => axios.all([model.getSingleContent(type1, slug1), model.getSingleContent(type2, slug2)])
		.then(arr => {
			return {
				arrow: arr[1].data.filter(page => page.slug === 'arrow')[0],
				about: arr[0].data.filter(page => page.slug === 'about')[0],
			};
		}),

	getServicesContent: (type, number) =>
		model.getContent(type, number)
			.then(response => {
				return {
					services: response.data.filter(page => page.slug === 'tjanster')[0],
					servicesId: response.data.filter(page => page.slug === 'tjanster')[0].id,
					serviceChildPages: response.data.filter(page => page.parent === response.data.filter(page => page.slug === 'tjanster')[0].id).sort((a, b) => (a.menu_order > b.menu_order) ? 1 : (a.menu_order < b.menu_order) ? -1 : 0),
					serviceChildPageTitles: response.data.filter(page => page.parent === response.data.filter(page => page.slug === 'tjanster')[0].id).sort((a, b) => (a.menu_order > b.menu_order) ? 1 : (a.menu_order < b.menu_order) ? -1 : 0).map(page => page.title),
					activeItem: response.data.filter(page => page.parent === response.data.filter(page => page.slug === 'tjanster')[0].id).filter(page => page.slug === 'webbutveckling')[0].id
				};
			}),

	getContactContent: (type, slug) =>
		model.getSingleContent(type, slug)
			.then(response => {
				return {
					contact: response.data[0]
				};
			}),

	getFooterContent: (type, slug) =>
		model.getSingleContent(type, slug)
			.then(response => {
				return {
					footer: response.data[0]
				};
			}),

	getAllPages: (type, number) =>
		model.getContent(type, number)
			.then(response => {
				pages: response.data;
			}),

	getAllPosts: (type, number) =>
		model.getContent(type, number)
			.then(response => {
				posts: response.data;
			}),
};

export default model;
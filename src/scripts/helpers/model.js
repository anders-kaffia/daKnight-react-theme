// Libs
import axios from 'axios';

const model = {};

/**
 * @desc Get type specific content from WP REST API
 *
 * @param {string} type of content, posts or pages
 */
model.getContent = (type) =>
	axios.get(`/wp-json/wp/v2/${type}/?per_page=50`);

/**
 * @desc Get all content from WP REST API
 *
 * @param {string, string, string} three types of content (pages, posts, media)
 */
model.apiCall = {
	getHeaderContent: (type1, type2) => axios.all([model.getContent(type1), model.getContent(type2)])
		.then(arr => {
			return {
				logo: arr[1].data.filter(page => page.title.rendered === 'DKN_Logotyp')[0],
				mainPageTitles: arr[0].data.filter(page => page.parent === 0 && page.slug === 'about' || page.slug === 'tjanster' || page.slug === 'kontakt').sort((a, b) => (a.menu_order > b.menu_order) ? 1 : (a.menu_order < b.menu_order) ? -1 : 0),
			};
		}),

	getAboutContent: (type1, type2) => axios.all([model.getContent(type1), model.getContent(type2)])
		.then(arr => {
			return {
				arrow: arr[1].data.filter(page => page.slug === 'arrow')[0],
				about: arr[0].data.filter(page => page.slug === 'about')[0],
			};
		}),

	getServicesContent: (type) =>
		model.getContent(type)
			.then(response => {
				return {
					services: response.data.filter(page => page.slug === 'tjanster')[0],
					servicesId: response.data.filter(page => page.slug === 'tjanster')[0].id,
					serviceChildPages: response.data.filter(page => page.parent === response.data.filter(page => page.slug === 'tjanster')[0].id).sort((a, b) => (a.menu_order > b.menu_order) ? 1 : (a.menu_order < b.menu_order) ? -1 : 0),
					serviceChildPageTitles: response.data.filter(page => page.parent === response.data.filter(page => page.slug === 'tjanster')[0].id).sort((a, b) => (a.menu_order > b.menu_order) ? 1 : (a.menu_order < b.menu_order) ? -1 : 0).map(page => page.title),
					activeItem: response.data.filter(page => page.parent === response.data.filter(page => page.slug === 'tjanster')[0].id).filter(page => page.slug === 'webbutveckling')[0].id
				};
			}),

	getContactContent: (type) =>
		model.getContent(type)
			.then(response => {
				return {
					contact: response.data.filter(page => page.slug === 'kontakt')[0]
				};
			}),

	getFooterContent: (type) =>
		model.getContent(type)
			.then(response => {
				return {
					footer: response.data.filter(page => page.slug === 'footer')[0]
				};
			}),

	getAllPages: (type) =>
		model.getContent(type)
			.then(response => {
				pages: response.data;
			}),

	getAllPosts: (type) =>
		model.getContent(type)
			.then(response => {
				posts: response.data;
			}),
};

export default model;
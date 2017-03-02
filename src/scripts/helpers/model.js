// Libs
import axios from 'axios';

const model = {};

/**
 * @desc Check if local storage is supported
 * 
 * @return Boolean
 */
model.isLocalStorageSupported = () => {
	const test = `hey ho let's go`;
	try {
		localStorage.setItem(test, test);
		localStorage.removeItem(test);
		console.log('Local Storage is supported');
		return true;
	} catch (e) {
		console.log('Local Storage is NOT supported');
		return false;
	}
};

/**
 * @desc Checks if the stored timestamp is older than 7 days.
 * If so, sets a new timestamp.
 */
model.compareTimestamp = (currentTimestamp, storedTimestamp) => {
	if ((currentTimestamp - 7) < storedTimestamp) {
		localStorage.setItem('timestamp', JSON.stringify(currentTimestamp));
	}
};

/**
 * @desc Check if age of local storage > 7 days.
 * If so, run model.setLocalStorage
 */
model.checkLocalStorageAge = () => {
	const timestamp = Math.floor((((new Date() / 1000) / 60) / 60) / 24);
	let storedTimestamp;

	const checkAge = () => {
		console.log('inside check');
		localStorage.getItem('timestamp') ? (
			storedTimestamp = JSON.parse(localStorage.getItem('timestamp')),
			model.compareTimestamp(timestamp, storedTimestamp)
		) : (
				localStorage.setItem('timestamp', JSON.stringify(timestamp)),
				model.setLocalStorage(),
				console.log('inside setting')
			);
	};
	checkAge();
};

/**
 * @desc Set local storage from API response
 * Sets the data that will be the apps state.
 * A timestamp is set to enable max life of local storage files.
 */
model.setLocalStorage = () => {
	model.apiCall.getHeaderContent('pages', 47, 'media', 'Ny_DKN_Logga')
		.then(data => {
			const header = {
				mainPageTitles: data.mainPageTitles,
				logo: data.logo,
				headerIsLoading: false
			};
			localStorage.setItem('headerContent', JSON.stringify(header));
		})
		.then(() => {
			model.apiCall.getAboutContent('pages', 'about', 'media', 'arrow')
				.then(data => {
					const about = {
						arrow: data.arrow,
						about: data.about,
						aboutIsLoading: false
					};
					localStorage.setItem('aboutContent', JSON.stringify(about));
				});
		})
		.then(() => {
			model.apiCall.getServicesContent('pages', 47)
				.then(data => {
					const services = {
						services: data.services,
						serviceChildPages: data.serviceChildPages,
						serviceChildPageTitles: data.serviceChildPageTitles,
						activeItem: data.activeItem,
						servicesIsLoading: false
					};
					localStorage.setItem('serviceContent', JSON.stringify(services));
				});
		})
		.then(() => {
			model.apiCall.getContactContent('pages', 'kontakt')
				.then(data => {
					const contact = {
						contact: data.contact,
						contactIsLoading: false
					};
					localStorage.setItem('contactContent', JSON.stringify(contact));
				});
		})
		.then(() => {
			model.apiCall.getFooterContent('pages', 'footer')
				.then(data => {
					const footer = {
						footer: data.footer,
						footerIsLoading: false
					};
					localStorage.setItem('footerContent', JSON.stringify(footer));
				});
		});
};

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
				logo: arr[1].data.filter(page => page.title.rendered === 'Ny_DKN_Logga')[0],
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
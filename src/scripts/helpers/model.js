// Libs
import axios from 'axios';

const model = {};

model.tempData = {};

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
 * @desc Check if there is a key called 'timestamp' in local storage
 * 
 * @return {Boolean}
 */
model.checkForLsTimestamp = () => {
	if (localStorage.getItem('timestamp')) {
		return true;
	} else {
		return false;
	}
};

/**
 * @desc Checks if the stored timestamp is older than 7 days.
 * If so, sets a new timestamp.
 * 
 * @param {number, number} compares two different dates.
 */
model.compareTimestamp = (days, currentTimestamp) => {
	const storedTimestamp = JSON.parse(localStorage.getItem('timestamp'));
	if ((storedTimestamp + days) < currentTimestamp) {
		return true;
	} else {
		return false;
	}
};

/**
 * @desc Check if age of local storage > 7 days.
 * If so, run model.setLocalStorage
 */
model.checkLocalStorageAge = () => {
	let storedTimestamp;
	const checkAge = () => {
		localStorage.getItem('timestamp') ? (
			storedTimestamp = JSON.parse(localStorage.getItem('timestamp')),
			model.compareTimestamp(storedTimestamp)
		) : (
				localStorage.setItem('timestamp', JSON.stringify(currentTimestamp)),
				model.setLocalStorage()
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
	return new Promise((resolve, reject) => {
		resolve(
			model.apiCall.getHeaderContent('pages', 47, 'media', 'Ny_DKN_Logga')
				.then(data => {
					const header = {
						mainPageTitles: data.mainPageTitles,
						logo: data.logo,
						headerIsLoading: false
					};
					model.tempData = {
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
								about: data.about,
								aboutIsLoading: false
							};
							model.tempData.about = data.about;
							model.tempData.aboutIsLoading = false;
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
							model.tempData.services = data.services;
							model.tempData.serviceChildPages = data.serviceChildPages;
							model.tempData.serviceChildPageTitles = data.serviceChildPageTitles;
							model.tempData.activeItem = data.activeItem;
							model.tempData.servicesIsLoading = false;
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
							model.tempData.contact = data.contact;
							model.tempData.contactIsLoading = false;
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
							model.tempData.footer = data.footer;
							model.tempData.footerIsLoading = false;
							localStorage.setItem('footerContent', JSON.stringify(footer));
						});
				})
		);
		reject(false);
	});

};

/**
 * @desc Get data from local storage
 * 
 * @return {object} Object containing local storage data.
 */
model.getLocalStorage = () => {
	return new Promise((resolve, reject) => {
		const lsData = {
			headerContent: JSON.parse(localStorage.getItem('headerContent')),
			aboutContent: JSON.parse(localStorage.getItem('aboutContent')),
			serviceContent: JSON.parse(localStorage.getItem('serviceContent')),
			contactContent: JSON.parse(localStorage.getItem('contactContent')),
			footerContent: JSON.parse(localStorage.getItem('footerContent'))
		};
		if (lsData) {
			resolve(lsData);
		} else {
			reject(Error('Ingen data hittades i local storage.'));
		}
	});
};

/**
 * @desc Get type specific content from WP REST API
 *
 * @param {string, number} type of content, posts, pages, or media
 * and the number of results.
 * 
 * @return {object} Data from the API
 */
model.getContent = (type, number) =>
	axios.get(`/wp-json/wp/v2/${type}/?per_page=${number}`);

/**
 * @desc Get a single piece of content.
 *
 * @param {string, string} type of content, posts, page, or media
 * based on the slug.
 * 
 * @return {object} Data from the API, based on slug.
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
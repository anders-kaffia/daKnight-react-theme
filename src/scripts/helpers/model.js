// Libs
import axios from 'axios';

const model = {};

// const localStoragePromise = new Promise((resolve, reject) => {
// 	const getLS = () => {
// 		localStorage.getItem('Hey Ho');
// 	};
// });



model.setRammonesStorage = () => {
	localStorage.setItem('Hey Ho', "Let's go!");
};

/**
 * @desc Set local storage.
 *
 * @return {Boolean} Boolean value for if local store is supported
 */
model.localStoreIsSupported = () => {

	/**
	 * 1. Set local storage with a simple string.
	 * 2. Check if local storage is empty
	 * 3. If local storage is successfully set, 
	 * 		3.1 run an API call and set the results in local storage with the same name as state.
	 * 		3.2 set the state from local storage.
	 * 4. If local storage is not set,
	 * 		4.1 local storage is not supported.
	 * 		4.2 Run an API call and set the state directly.
	 */
	const localStoragePromise = new Promise();

	localStoragePromise.storage.local.set({ foo: 'bar' }).then(function () {
		alert('foo set');
		return localStoragePromise.storage.local.get('foo');
	}).then(function (items) {
		alert(JSON.stringify(items)); // => {"foo":"bar"} 
	});

	localStoragePromise.then((data) => {
		console.log(data);
	});


	// model.setRammonesStorage()
	// 	.then(() => {
	// 	console.log('1');
	// })
	// 	.then(() => {
	// 		console.log('2');
	// 		model.checkLocalStorage();
	// 	});
	// const store = model.getLocalStore();
	// model.setLocalStorage();



};



/**
 * @desc Check if local storage is empty.
 */
model.checkLocalStorage = () => {
	if (window.localStorage.length === 0 ||
		'localStorage' in window && window['localStorage'] === null ||
		model.getLocalStore === null) {
		console.log('Local Storage is not supported!');
		return false;
	} else {
		console.log('Local Storage is supported');
		return true;
	}
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

/**
 * @desc Set local storage from API response
 */
model.setLocalStorage = () => {
	localStorage.setItem('Hey Ho', "Let's Go!");

	model.apiCall.getHeaderContent('pages', 47, 'media', 'DKN_Logotyp')
		.then(data => {
			localStorage.setItem('mainPageTitles', JSON.stringify(data.mainPageTitles));
			localStorage.setItem('logo', JSON.stringify(data.logo));
			localStorage.setItem('mainPageTitles', JSON.stringify(data.mainPageTitles));
		})
		.then(() => {
			model.apiCall.getAboutContent('pages', 'about', 'media', 'arrow')
				.then(data => {
					localStorage.setItem('arrow', JSON.stringify(data.arrow));
					localStorage.setItem('about', JSON.stringify(data.about));
				});
		})
		.then(() => {
			model.apiCall.getServicesContent('pages', 47)
				.then(data => {
					localStorage.setItem('services', JSON.stringify(data.services));
					localStorage.setItem('serviceChildPages', JSON.stringify(data.serviceChildPages));
					localStorage.setItem('serviceChildPageTitles', JSON.stringify(data.serviceChildPageTitles));
					localStorage.setItem('activeItem', JSON.stringify(data.activeItem));
				});
		})
		.then(() => {
			model.apiCall.getContactContent('pages', 'kontakt')
				.then(data => {
					localStorage.setItem('contact', JSON.stringify(data.contact));
				});
		})
		.then(() => {
			model.apiCall.getFooterContent('pages', 'footer')
				.then(data => {
					localStorage.setItem('footer', JSON.stringify(data.footer));
				});
		});
};

export default model;
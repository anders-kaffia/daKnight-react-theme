// Libs
import axios from 'axios';

const model = {};

/**
 * @desc Get type specific content from WP REST API
 *
 * @param {string} type of content, posts or pages
 */
model.getContent = (type) =>
	axios.get(`/wp-json/wp/v2/${type}/?per_page=50`
	);


/**
 * @desc Get all content from WP REST API
 *
 * @param {string, string} two types of content, posts and pages
 */
model.apiCall = {
	getAllContent: (type1, type2, type3) => axios.all([model.getContent(type1), model.getContent(type2), model.getContent(type3)])
		.then(function (arr) {
			return {
				pages: arr[0].data,
				logo: arr[2].data.filter(page => page.title.rendered === 'DKN_Logotyp')[0],
				about: arr[0].data.filter(page => page.slug === 'om-oss')[0],
				services: arr[0].data.filter(page => page.slug === 'tjanster')[0],
				contact: arr[0].data.filter(page => page.slug === 'kontakt')[0],
				footer: arr[0].data.filter(page => page.slug === 'footer')[0],
				allPageTitles: arr[0].data.map(page => page.title),
				mainPageTitles: arr[0].data.filter(page => page.parent === 0 && page.slug != 'footer').sort((a, b) => a.menu_order > b.menu_order ? 1 : 0),
				serviceChildPages: arr[0].data.filter(page => page.parent === 5).sort((a, b) => a.menu_order > b.menu_order ? 1 : 0),
				serviceChildPageTitles: arr[0].data.filter(page => page.parent === 5).sort((a, b) => a.menu_order > b.menu_order ? 1 : 0).map(page => page.title),
				posts: arr[1].data,
				activeItem: arr[0].data.filter(page => page.parent === 5).filter(page => page.slug === 'webbutveckling')[0].id
			};
		})
}


// /**
//  * @desc Get a single page based on url slug
//  *
//  * @param {string} slug The slug for the page
//  * @return {Object} page  Single page object
//  */
// model.getPage = function (slug) {

// 	const pages = model.getPages();

// 	// Get the page from store based on the slug
// 	for (let i = 0, max = pages.length; i < max; i++) {
// 		if (slug === pages[i].slug) {
// 			return pages[i];
// 		}
// 	}
// 	return null;
// }


// /**
//  * @desc Checks if local store is supported
//  *
//  * @return {Boolean} Boolean value for if local store is supported
//  */
// model.localStoreIsSupported = function () {

// 	const store = model.getLocalStore();

// 	if (window.localStorage.length === 0 ||
// 		'localStorage' in window && window['localStorage'] === null ||
// 		model.getLocalStore === null) {
// 		console.log('Local Storage is not supported!');
// 		return false;
// 	} else {
// 		console.log('Local Storage is supported');
// 		return true;
// 	}

// }

// /**
//  * @desc Gets content from local store
//  * 
//  * @param {string} type of content, pages or posts
//  * @return {Object} store Native JavaScript object from local store
//  */
// model.getLocalStore = function (type) {

// 	const store = JSON.parse(localStorage.getItem(type + '-daknight'));
// 	return store;

// }

// /**
//  * @desc Saves temporary store to local storage.
//  *
//  * @param {Object} store Native JavaScript object with site data
//  */
// model.updateLocalStore = function (store) {

// 	localStorage.setItem('daknight', JSON.stringify(store));

// }

export default model;
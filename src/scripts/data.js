// jQuery
import $ from "jquery";

const model = {};

/**
 * Model init function
 * Check local storage
 *
 */
model.dataInit = function () {

	if (false === model.checkLocalStore()) {
		model.setLocalStore('pages');
		model.setLocalStore('posts');
	}

}

/**
 * Set local storage from WP REST API
 *
 * @param {string} type of content, posts or pages
 */
model.setLocalStore = function (type) {

	$.ajax({
		url: '/wp-json/wp/v2/' + type + '/',
		type: 'GET',
		success: function (data) {
			const jsonData = JSON.stringify(data);
			localStorage.setItem(type + '-daknight', jsonData);
		},
		error: function (data, errorThrown) {
			alert('Error:' + errorThrown);
		}
	});

}
// function arrayToObject(array) {
//   var obj = {};
//   for (var i = 0; i < array.length; ++i)
//     if (array[i] !== undefined) obj[i] = array[i];
//   return obj;
// }

// Array containing all pages as objects
// const pagesArr = JSON.parse(localStorage.getItem('pages-data'));

/**
 * Gets pages from local store
 *
 * @return {Object[]} pages Array of page objects
 */
model.getPages = function () {

	const pages = model.getLocalStore('pages');
	return pages;

}


/**
 * Get a single page based on url slug
 *
 * @param {string} slug The slug for the page
 * @return {Object} page  Single page object
 */
model.getPage = function ( slug ) {

	const pages = model.getPages();

	// Get the page from store based on the slug
	for (let i = 0, max = pages.length; i < max; i++) {
		if (slug === pages[i].slug) {
			console.log(pages[i]);
			return pages[i];
		}
	}
	return null;
}

/**
 * Creates an array with all page titles
 *
 * @return {array} array containing all page titles
 */
model.getPageTitles = function () {

	const pages = model.getPages();
	let titles = [];

	// Store page titles in array
	for (let i = 0, max = pages.length; i < max; i++) {
		titles.push(pages[i].title.rendered);
		console.log(titles);
	}

	return titles;

}

/**
 * Checks if local store already exists
 *
 * @return {Boolean} Boolean value for if local store already exists
 */
model.checkLocalStore = function() {

	const store = model.getLocalStore();

	if (null === store) {
		return false;
	} else {
		return true;
	}

}

/**
 * Gets content from local store
 * 
 * @param {string} type of content, pages or posts
 * @return {Object} store Native JavaScript object from local store
 */
model.getLocalStore = function ( type ) {

	const store = JSON.parse(localStorage.getItem(type + '-daknight'));
	return store;

}

/**
 * Saves temporary store to local storage.
 *
 * @param {Object} store Native JavaScript object with site data
 */
model.updateLocalStore = function ( store ) {

	localStorage.setItem('daknight', JSON.stringify(store));

}

export default model;
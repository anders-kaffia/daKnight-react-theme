// jQuery
import $ from "jquery";

const model = {};

/**
 * @desc Model init function
 *
 */
model.modelInit = function () {
	
	model.setLocalStore('pages');
	// Sets local storage if possible
	if (true === model.localStoreIsSupported()) {
		model.setLocalStore('pages');
		model.setLocalStore('posts');
	} else {
		// Get data directly from WP REST API

	}

}

/**
 * @desc Set local storage from WP REST API
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

/**
 * @desc Retrieve data from WP REST API
 *
 * @param {string} type of content, posts or pages
 */

model.localStoreUnavailable = function (type) {

	$.ajax({
		url: '/wp-json/wp/v2/' + type + '/',
		type: 'GET',
		success: function (data) {
			console.table(data);
			// Pick up data here!
		},
		error: function (data, errorThrown) {
			alert('Error:' + errorThrown);
		}
	});

}

/**
 * @desc Gets pages from local store
 *
 * @return {Object[]} pages Array of page objects
 */
model.getPages = function () {

	const pages = model.getLocalStore('pages');
	return pages;

}

/**
 * @desc Get a single page based on url slug
 *
 * @param {string} slug The slug for the page
 * @return {Object} page  Single page object
 */
model.getPage = function (slug) {

	const pages = model.getPages();

	// Get the page from store based on the slug
	for (let i = 0, max = pages.length; i < max; i++) {
		if (slug === pages[i].slug) {
			return pages[i];
		}
	}
	return null;
}

/**
 * @desc Creates an array with all page titles
 *
 * @return {array} array containing all page titles
 */
model.getPageTitles = function () {

	const pages = model.getPages();
	let titles = [];

	// Store page titles in array
	for (let i = 0, max = pages.length; i < max; i++) {
		titles.push(pages[i].title.rendered);
	}

	return titles;

}

/**
 * @desc Checks if local store is supported
 *
 * @return {Boolean} Boolean value for if local store is supported
 */
model.localStoreIsSupported = function () {

	const store = model.getLocalStore();

	if (window.localStorage.length === 0 ||
		'localStorage' in window && window['localStorage'] === null ||
		model.getLocalStore === null) {
		console.log('Local Storage is not supported!');
		return false;
	} else {
		console.log('Local Storage is supported');
		return true;
	}

}

/**
 * @desc Gets content from local store
 * 
 * @param {string} type of content, pages or posts
 * @return {Object} store Native JavaScript object from local store
 */
model.getLocalStore = function (type) {

	const store = JSON.parse(localStorage.getItem(type + '-daknight'));
	return store;

}

/**
 * @desc Saves temporary store to local storage.
 *
 * @param {Object} store Native JavaScript object with site data
 */
model.updateLocalStore = function (store) {

	localStorage.setItem('daknight', JSON.stringify(store));

}

export default model;
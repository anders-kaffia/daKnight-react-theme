// jQuery
// import $ from 'jquery';

// Axios
import Axios from 'axios';

const model = {};

model.getPagesFromApi = function (){
  return Axios.get('/wp-json/wp/v2/pages/');
}
const helpers = {
  getPagesFromApi: function(){
    return axios.all(getPagesFromApi())
      .then(function(arr){
        return {
          pages: arr[0].data
        }
      })
  }
}
console.log(helpers);

/**
 * @desc Model init function
 *
 */
model.modelInit = function () {

	model.ajax();
	console.log(model.ajax());
	// Sets local storage if possible
	if (true === model.localStoreIsSupported()) {
		model.ajax();
		model.ajax();
	} else {
		// Get data directly from WP REST API

	}

}


/**
 * @desc Set local storage from WP REST API
 *
 * @param {string} type of content, posts or pages
 */

model.ajax = function () {
	let arr;
	const ajax = new XMLHttpRequest();
    /* Forces the filetype to .json */
    // ajax.overrideMimeType('application/json');
    ajax.open('GET', '/wp-json/wp/v2/pages/', true);
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            console.log(ajax.response);
            arr = ajax.responseText;
        }
    };
    ajax.send();
    return arr;

}
model.handleAjaxResult = function (result) {
	const data = result;
	console.log(result);
	return data;
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
			apiResult = data;
		},
		error: function (data, errorThrown) {
			alert('Error:' + errorThrown);
		}
	});
	return apiResult;
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
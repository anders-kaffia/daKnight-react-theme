// jQuery
import $ from "jquery";

export function getData(type) {
	// Call to API
	$.ajax( {
		url: '/wp-json/wp/v2/' + type + '/',
		type: 'GET',
		success : function (data) {
			const jsonData = JSON.stringify(data);
			localStorage.setItem(type + '-data', jsonData);
			return jsonData;
		},
		error : function (data, errorThrown) {
		  alert('Error:' + errorThrown);
		}
	} );
}


export function pageContent(slug) {
	getData('pages');
	getData('posts');
	const pages = JSON.parse(localStorage.getItem('pages-data')).filter(page => page.slug === slug);
	const desiredPage = pages[0];
	return desiredPage;
}

function arrayToObject(array) {
  var obj = {};
  for (var i = 0; i < array.length; ++i)
    if (array[i] !== undefined) obj[i] = array[i];
  return obj;
}

// Array containing all pages as objects
const pagesArr = JSON.parse(localStorage.getItem('pages-data'));

module.exports = {
	allPages: arrayToObject(pagesArr),
	about: pageContent('om-oss'),
	services: pageContent('tjanster'),
	contact: pageContent('kontakt')
}
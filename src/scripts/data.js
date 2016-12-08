// jQuery
import $ from "jquery";

var model = {};

/**
 * Check local storage
 *
 */
model.dataInit = function() {

  if( false === model.checkLocalStore() ) {
      model.setLocalStore( 'pages' );
      model.setLocalStore( 'posts' );
  }

}

model.setLocalStore = function( type ) {
	// Call to API
	$.ajax( {
		url: '/wp-json/wp/v2/' + type + '/',
		type: 'GET',
		success : function (data) {
		const jsonData = JSON.stringify(data);
		localStorage.setItem(type + '-daknight', jsonData);
		return jsonData;
		},
		error : function (data, errorThrown) {
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
model.getPages = function() {

  var pages = model.getLocalStore('pages');
  return pages;

}

/**
 * Get a single page based on url slug
 *
 * @param {string} slug The slug for the page
 * @return {Object} page  Single page object
 *
 */
model.getPage = function( slug ) {

  var pages = model.getLocalStore().pages;

  if( null === slug ) slug = 'home';

  // Get the page from store based on the slug
  for( i = 0, max = pages.length; i < max; i++  ) {

   if( slug === pages[i].slug ) {
     return pages[i];
   }

  }

  return null;

}


/**
 * Updates post or page in local store
 *
 * @param {Object} contentObj Content object to update
 */
model.updateContent = function( contentObj ) {

  var store = model.getLocalStore(),
      date = new Date();

  if( 'post' === contentObj.type ) {
    store.posts.forEach( function( post ) {
      if( contentObj.id === post.id ) {
        post.title = contentObj.title;
        post.content = contentObj.content;
        post.modified = date.toISOString();
      }
    });
  }

  if ( 'page' === contentObj.type ) {
    store.pages.forEach( function( page ) {
      if( contentObj.id === page.id ) {
        page.title = contentObj.title;
        page.content = contentObj.content;
        page.modified = date.toISOString();
      }
    });
  }


  model.updateLocalStore( store );

};


/**
 * Checks if local store already exists
 *
 * @return {Boolean} Boolean value for if local store already exists
 */
model.checkLocalStore = function() {

  var store = model.getLocalStore();

  if ( null === store ) {
    return false;
  } else {
    return true;
  }

}


/**
 * Gets content from local store
 *
 * @return {Object} store Native JavaScript object from local store
 */
model.getLocalStore = function( type ) {

  var store = JSON.parse( localStorage.getItem( type + '-daknight' ) );

  return store;

}

/**
 * Saves temporary store to local storage.
 *
 * @param {Object} store Native JavaScript object with site data
 */
model.updateLocalStore = function( store ) {

  localStorage.setItem( 'daknight', JSON.stringify( store ) );

}

export default model;
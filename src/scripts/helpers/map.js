import $ from 'jquery';

const map = {};

map.init = () => {
	map.handleFallback();
	map.createMap();
};

/**
 * @desc Fallback for unsupported browsers.
 * */
map.handleFallback = () => {
	function fallBack() {
		document.getElementById("map").className += "map-fallback";
		document.getElementById("mapFallback").style.display = "block";
	}

	/**
	 * @desc Load old jQuery function for browser detection.
	 * */
	jQuery.browser = {};
	(function () {
		jQuery.browser.msie = false;
		jQuery.browser.version = 0;
		if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
			jQuery.browser.msie = true;
			jQuery.browser.version = RegExp.$1;
		}
	})();

	/**
	 * @desc Fix for Internet Explorer.
	 * */
	// if (navigator.appName == 'Microsoft Internet Explorer' || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv 11/)) || $.browser.msie == 1) {
	// 	fallBack();
	// }
};

/**
 * Generates the map, or calls a callback function.
 * */
map.createMap = () => {
	!mapboxgl.supported() ? fallBack()
		: mapboxgl.accessToken = ''; // Mapbox token here!
	const map = new mapboxgl.Map({
		container: 'map',
		style: '', // Mapbox style here!
	});
	map.on('load', function () {
		window.onresize = function (event) {
			map.resize();
			map.repaint;
		};
	});
};

export default map;

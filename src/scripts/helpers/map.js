import $ from 'jquery';

const map = {};

map.init = () => {
	map.handleOrientationChange();
	map.handleFallback();
	map.createMap();
};

/**
 * @desc Reloads the location on orientation change.
 * */
map.handleOrientationChange = () => {
	$(window).on("orientationchange", function (event) {
		location.reload();
	});
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
		: mapboxgl.accessToken = 'pk.eyJ1IjoiZGFrbmlnaHQiLCJhIjoiazkwSjJqSSJ9.ght0Fub2UHczFlkQ0eHzZA';
	const map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/daknight/citmr9xdx004h2hp2svgnxq30',
	});
	map.on('load', function () {
		window.onresize = function (event) {
			map.resize();
			map.repaint;
		};
	});
};

export default map;
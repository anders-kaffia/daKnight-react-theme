import $ from 'jquery';
import scripts from './scripts';

let marginTop;

/**
 * @desc Sets the correct media query values of the header height and top margin.
 * This enables correct calculation of offset for scrolling.
 * */
if ($(window.innerWidth)[0] <= 768) {
	marginTop = 19.2;
} else if ($(window.innerWidth)[0] > 768 && $(window.innerWidth)[0] < 992) {
	marginTop = 22.4;
} else if ($(window.innerWidth)[0] > 992 && $(window.innerWidth)[0] < 1200) {
	marginTop = 25.6;
} else if ($(window.innerWidth)[0] > 1200) {
	marginTop = 32;
}

const jqueryScripts = {};

/**
 * @desc Enables smooth scrolling
 */
jqueryScripts.smoothScroll = () => {
	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();

		let target = this.hash;
		const $target = $(target);
		const absoluteTop = 500;
		$('html, body').stop().animate({
			'scrollTop': $target[0].id === 'about' ? ($target.offset().top - absoluteTop) : ($target.offset().top - marginTop)
		}, 700, 'swing');
	});
};

/**
 * @desc Handles page scroll on arrow keys
 * */
jqueryScripts.handleArrowKeyScroll = () => {

	$('html, body').keydown((e) => {
		e.keyCode === 38 ? (jqueryScripts.arrowScrollUp())
			: (e.keyCode === 40 ? (jqueryScripts.arrowScrollDown()) : null);
	});
};

/**
 * @desc Handles scroll amount below the services section.
 * Scroll direction: up.
 * */
jqueryScripts.arrowScrollUp = () => {
	$('html, body').stop().animate({
		scrollTop: (window.pageYOffset - (window.innerHeight - marginTop))
	}, 500, 'swing');
};

/**
 * @desc Handles scroll amount below the services section.
 * Scroll direction: down.
 * */
jqueryScripts.arrowScrollDown = () => {
	$('html, body').stop().animate({
		scrollTop: (window.pageYOffset + (window.innerHeight - marginTop))
	}, 500, 'swing');
};

export default jqueryScripts;
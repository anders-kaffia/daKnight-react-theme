import $ from 'jquery';
import scripts from './scripts';

let currentScrollPoint;
let headerHeight;
let marginTop;

/**
 * Sets the correct media query values of the header height and top margin.
 * */
if ($(window.innerWidth)[0] <= 768) {
	headerHeight = 143.6;
	marginTop = 19.2;
} else if ($(window.innerWidth)[0] > 768 && $(window.innerWidth)[0] < 992) {
	headerHeight = 167.2;
	marginTop = 22.4;
} else if ($(window.innerWidth)[0] > 992 && $(window.innerWidth)[0] < 1200) {
	headerHeight = 186.8;
	marginTop = 25.6;
} else if ($(window.innerWidth)[0] > 1200) {
	headerHeight = 216;
	marginTop = 32;
}

const jqueryScripts = {

	/**
	 * @desc Enables smooth scrolling
	 */
	smoothScroll() {
		$('a[href^="#"]').on('click', function (e) {
			e.preventDefault();

			let target = this.hash;
			const $target = $(target);
			const absoluteTop = 500;

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top - (target === '#about' || target === '#main-wrapper' ? absoluteTop :
					(target === '#about-2' || target === '#about-3' ? headerHeight - marginTop : marginTop))
			}, 700, 'swing', () => {
				window.location.hash = target;
			});
		});
	},

	/**
	 * @desc Handles page scroll on arrow keys
	 * */
	handleArrowKeyScroll() {
		const lastAboutSection = document.getElementById('about-2').offsetTop;

		$('html, body').keydown((e) => {
			e.keyCode === 38 ? ((lastAboutSection + 10) > window.scrollY ? jqueryScripts.arrowScrollTopUp()
				: jqueryScripts.arrowScrollbottomUp())
				: (e.keyCode === 40 ? ((lastAboutSection - 200) > window.scrollY ? jqueryScripts.arrowScrollTopDown()
					: jqueryScripts.arrowScrollbottomDown()) : null);
		});
	},

	/**
	 * @desc Handles scroll amount above the services section.
	 * Scroll direction: up.
	 * */
	arrowScrollTopUp() {
		$('html, body').stop().animate({
			scrollTop: (window.scrollY - (window.innerHeight - (headerHeight - marginTop)))
		}, 500, 'swing');
	},

	/**
	 * @desc Handles scroll amount above the services section.
	 * Scroll direction: down.
	 * */
	arrowScrollTopDown() {
		$('html, body').stop().animate({
			scrollTop: (window.scrollY + (window.innerHeight - (headerHeight - marginTop)))
		}, 500, 'swing');
	},

	/**
	 * @desc Handles scroll amount below the services section.
	 * Scroll direction: up.
	 * */
	arrowScrollbottomUp() {
		$('html, body').stop().animate({
			scrollTop: (window.scrollY - (window.innerHeight - marginTop))
		}, 500, 'swing');
	},

	/**
	 * @desc Handles scroll amount below the services section.
	 * Scroll direction: down.
	 * */
	arrowScrollbottomDown() {
		$('html, body').stop().animate({
			scrollTop: (window.scrollY + (window.innerHeight - marginTop))
		}, 500, 'swing');
	},
};

export default jqueryScripts;

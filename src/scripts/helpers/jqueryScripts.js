import $ from 'jquery';

let headerHeight;
let marginTop;
if ($(window.innerWidth)[0] < 768) {
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
	 *
	 */
	smoothScroll() {
		$('a[href^="#"]').on('click', function (e) {
			e.preventDefault();

			let target = this.hash;
			const $target = $(target);
			const absoluteTop = 500;

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top - (target === '#om-oss' || target === '#main-wrapper' ? absoluteTop :
					(target === '#about-2' || target === '#about-3' ? headerHeight - marginTop : marginTop))
			}, 700, 'swing', () => {
				window.location.hash = target;
			});
		});
	},

	handleArrowKeyScroll(e) {
		$('html, body').keydown((e) => {
			e.keyCode === 40 ? $('html, body').stop().animate({
				scrollTop: (window.scrollY + window.innerHeight)
			}, 500, 'swing')
				: (e.keyCode === 38 ?
					$('html, body').stop().animate({
						scrollTop: (window.scrollY - window.innerHeight)
					}, 500, 'swing') : null);
		});
	},
};

export default jqueryScripts;

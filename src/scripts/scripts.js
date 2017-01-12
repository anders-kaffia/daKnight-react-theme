import $ from 'jquery';

const scripts = {};

scripts.init = () => {
	/**
	 * Adds offset, matching targets margin-top, to top of scroll target
	 * */
	if ($(window.innerWidth)[0] < 768) {
		scripts.smoothScroll(19.2);
	} else if ($(window.innerWidth)[0] > 768 && $(window.innerWidth)[0] < 992) {
		scripts.smoothScroll(22.4);
	} else if ($(window.innerWidth)[0] > 992 && $(window.innerWidth)[0] < 1200) {
		scripts.smoothScroll(25.6);
	} else if ($(window.innerWidth)[0] > 1200) {
		scripts.smoothScroll(32);
	}
};

scripts.smoothScroll = (margin) => {
	/**
	 * Enables smooth scrolling
	 * */
	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();

		let target = this.hash;
		const $target = $(target);

		const absoluteTop = 500;

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top - (target === '#om-oss' || target === '#main-wrapper' ? absoluteTop : margin)
		}, 700, 'swing', () => {
			window.location.hash = target;
		});
		console.log(target);
	});
};

export default scripts;
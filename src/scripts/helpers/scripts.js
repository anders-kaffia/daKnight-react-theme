import jqueryScripts from './jqueryScripts';

const scripts = {};

/**
 * @desc Handles a bug with older iOS Flex properties.
 * Autoprefixer does not solve this problem.
 */
scripts.handleIosFlexBug = () => {
	const serviceNav = document.getElementById('service-menu-ul');
	const contactSection = document.getElementById('kontakt');
	const mapEl = document.getElementById('map-container');
	const contactTextEl = document.getElementById('contact-text');
	const cssFix = "-webkit-flex-wrap: wrap; display: -webkit-flex;";

	serviceNav.style.cssText = cssFix;
	contactSection.style.cssText = cssFix;

	window.innerWidth >= 992 ?
		(mapEl.setAttribute("style", "-webkit-order: 1"),
			contactTextEl.setAttribute("style", "-webkit-order: 2"))
		: null;
};

/**
 * @desc A slider for the about section
 */
scripts.slideSwitcher = () => {
	const slideContainer = document.getElementById('about');
	const nextSlide = document.getElementsByClassName('next-slide')[0];
	const prevSlide = document.getElementsByClassName('prev-slide')[0];
	const bubblesContainer = document.getElementsByClassName('bubbles')[0];
	const slides = document.getElementsByClassName('about-slide');
	const width = 100;
	const bubbles = [];
	let currentSlideIndex = 0;

	for (let i = 0; i < slides.length; i++) {
		let bubble = document.createElement('span');
		bubble.classList.add('bubble');
		bubblesContainer.appendChild(bubble);
		bubbles.push(bubble);

		bubble.addEventListener('click', function () {
			currentSlideIndex = i;
			switchSlide();
		});

	}

	function switchSlide() {
		slideContainer.style.left = -width * currentSlideIndex + '%';
		console.log(currentSlideIndex);
		currentSlideIndex++;

		if (currentSlideIndex >= slides.length) {
			currentSlideIndex = 0;
		}
		// if (currentSlideIndex < 0) {
		// 	currentSlideIndex = slides.length;
		// }
		bubbles.forEach((bubble, index) => {
			if (index === currentSlideIndex) {
				bubble.classList.add('active');
			// } else if ( index === slides.length - 1 ) {
			// 	bubble.classList.add('active');
			} else {
				bubble.classList.remove('active');
			}
		});
	};
	setInterval(switchSlide, 5500);

	switchSlide();

	// nextSlide.addEventListener('click', function () {
	// currentSlideIndex++;

	// if (currentSlideIndex >= slides.length) {
	// 	currentSlideIndex = 0;
	// }

	// 	switchSlide();
	// });

	// prevSlide.addEventListener('click', function () {
	// 	currentSlideIndex--;

		// if (currentSlideIndex < 0) {
		// 	currentSlideIndex = slides.length - 1;
		// }

	// 	switchSlide();
	// });

};

export default scripts;
const scripts = {

	/**
	 * @desc toggles the header position from fixed to absolute
	 */
	handleHeaderPosition() {
		const services = document.getElementById('tjanster');
		const header = document.getElementById('header-wrapper');
		const headerHeight = header.offsetHeight;
		const topOfServices = services.offsetTop;
		const absPosition = 'position: absolute; top: ' + (topOfServices - headerHeight) + 'px';

		window.scrollY >= (topOfServices - headerHeight) ? header.style.cssText += absPosition : null;
		window.scrollY <= (topOfServices - headerHeight) ? header.style.cssText = window.getComputedStyle(header, null) - absPosition : null;
	},

	handleArrowKeyScroll(e) {
		console.log(window.innerHeight);
		console.log(window.scrollY);
		e.keyCode === 40 ? window.scrollTo(0, window.scrollY + window.innerHeight) : ( e.keyCode === 38 ? window.scrollTo(0, window.scrollY - window.innerHeight) : null );
	}

};

export default scripts;
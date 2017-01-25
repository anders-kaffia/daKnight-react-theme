import jqueryScripts from './jqueryScripts';

const scripts = {};

/**
 * @desc toggles the header position from fixed to absolute
 */
scripts.handleHeaderPosition = () => {
	const services = document.getElementById('tjanster');
	const header = document.getElementById('header-wrapper');
	const headerHeight = header.offsetHeight;
	const topOfServices = services.offsetTop;
	const absPosition = 'position: absolute; top: ' + (topOfServices - headerHeight) + 'px';
	window.pageYOffset >= (topOfServices - headerHeight) ? header.style.cssText += absPosition : null;
	window.pageYOffset <= (topOfServices - headerHeight) ? header.style.cssText = window.getComputedStyle(header, null) - absPosition : null;
};

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
		(mapEl.setAttribute("style","-webkit-order: 1"),
		contactTextEl.setAttribute("style","-webkit-order: 2"))
		: null;
};

export default scripts;
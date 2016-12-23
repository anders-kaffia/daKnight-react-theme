'use strict';

const scripts = {};



scripts.init = () => {
	const header = document.getElementById('header-wrapper');
	const services = document.getElementById('tjanster');
	const contact = document.getElementById('kontakt');

	const topOfHeader = header.offsetTop;
	const topOfServices = services.offsetTop;
	const topOfContact = contact.offsetTop;
	if (window.scrollY >= topOfServices) {
		console.log('remove class here');
	}

	// scripts.fixedHeader();
	window.addEventListener('scroll', console.log(window.scrollY));
}

/**
 * @desc Targets different sections of the page to enable toggle of the header at the right places
 * 
 * 
 * */


// scripts.fixedHeader = () => {
// 	if (window.scrollY >= topOfServices) {
// 		console.log('remove class here');
// 	}
// }




export default scripts;
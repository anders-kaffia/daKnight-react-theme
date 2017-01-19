// Libs
import React from 'react';
import ReactCSSTransisionGroup from 'react-addons-css-transition-group';

// Components
import Loading from './Loading';
import Header from './Header';
import BlankSlate from './BlankSlate';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';

// Other
import model from '../helpers/model';
import scripts from '../helpers/scripts';
import jqueryScripts from '../helpers/jqueryScripts';

class Main extends React.Component {

	constructor() {
		super();

		this.eventListeners = this.eventListeners.bind(this);
		this.mediaQuery = this.mediaQuery.bind(this);
		this.scrollMethods = this.scrollMethods.bind(this);
		this.setActive = this.setActive.bind(this);
		this.burgerMenu = this.burgerMenu.bind(this);
		this.toggleContactForm = this.toggleContactForm.bind(this);

		this.state = {
			renderBlankSlate: true,
			pages: {},
			about: {},
			contact: {},
			allPageTitles: {},
			mainPageTitles: {},
			serviceChildPages: {},
			serviceChildPageTitles: {},
			posts: {},
			isLoading: true,
			activeItem: null,
			burgerMenuActive: false,
			showContactForm: false,
			width: window.innerWidth,
			mapWidth: 600,
			mapHeight: 400
		};

		this.interval = null;
		this.interval2 = null;

	};

	componentWillMount() {
		// model.apiCall.getAllContent('pages', 'posts', 'media')
		// 	.then(data => {
		// 		this.setState({
		// 			pages: data.pages,
		// 			logo: data.logo,
		// 			arrow: data.arrow,
		// 			about: data.about,
		// 			contact: data.contact,
		// 			services: data.services,
		// 			footer: data.footer,
		// 			allPageTitles: data.allPageTitles,
		// 			mainPageTitles: data.mainPageTitles,
		// 			serviceChildPages: data.serviceChildPages,
		// 			serviceChildPageTitles: data.serviceChildPageTitles,
		// 			posts: data.posts,
		// 			isLoading: false,
		// 			activeItem: data.activeItem
		// 		});
		// 		jqueryScripts.smoothScroll();
		// 		this.eventListeners();
		// 		this.mediaQuery();
		// 		this.interval = setTimeout(() => this.setState({ renderBlankSlate: false }), 3000);

		// 	});
	};

	componentDidMount() {
		model.apiCall.getAllContent('pages', 'posts', 'media')
			.then(data => {
				this.setState({
					pages: data.pages,
					logo: data.logo,
					arrow: data.arrow,
					about: data.about,
					contact: data.contact,
					services: data.services,
					footer: data.footer,
					allPageTitles: data.allPageTitles,
					mainPageTitles: data.mainPageTitles,
					serviceChildPages: data.serviceChildPages,
					serviceChildPageTitles: data.serviceChildPageTitles,
					posts: data.posts,
					isLoading: false,
					activeItem: data.activeItem
				});
				jqueryScripts.smoothScroll();
				this.eventListeners();
				this.mediaQuery();
				this.interval = setTimeout(() => this.setState({ renderBlankSlate: false }), 3000);

			});
	};

	/**
	 * @desc Gathers main eventlisterers.
	 */
	eventListeners() {
		window.addEventListener('scroll', this.scrollMethods);
		window.addEventListener('resize', this.mediaQuery);
		jqueryScripts.handleArrowKeyScroll();
	}

	/**
	 * @desc Gathers all methods connected to the scroll event.
	 */
	scrollMethods() {
		scripts.handleHeaderPosition();
	}

	/**
	 * @desc Enables dynamic width and height for the map.
	 * Sets dimensions relative to screen size and landscape/portrait mode.
	 */
	mediaQuery() {
		let updateMapWidth = window.innerWidth;
		let updateMapHeight = window.innerHeight;

		// iPhone 4 portrait
		if ((window.innerHeight >= 480 && window.innerHeight < 568) && (window.innerWidth >= 320 && window.innerWidth < 400)) {
			// console.log('iPhone 4 portrait');
			updateMapWidth = window.innerWidth * 1.2;
			updateMapHeight = window.innerHeight * .72;

			// iPhone 4 landscape
		} else if ((window.innerHeight >= 320 && window.innerHeight < 375) && (window.innerWidth >= 480 && window.innerWidth < 568)) {
			// console.log('iPhone 4 landscape');
			updateMapWidth = window.innerWidth * 1.3;
			updateMapHeight = window.innerHeight * .9;

			// iPhone 5 portrait
		} else if ((window.innerHeight >= 568 && window.innerHeight < 667) && (window.innerWidth >= 320 && window.innerWidth < 568)) {
			// console.log('iPhone 5 portrait');
			updateMapWidth = window.innerWidth * 1.3;
			updateMapHeight = window.innerHeight * .68;

			// iPhone 5 landscape
		} else if ((window.innerHeight >= 320 && window.innerHeight < 375) && (window.innerWidth >= 568 && window.innerWidth < 667)) {
			// console.log('iPhone 5 landscape');
			updateMapWidth = window.innerWidth * 1.35;
			updateMapHeight = window.innerHeight * .9;

			// iPhone 6 portrait
		} else if ((window.innerHeight >= 667 && window.innerHeight < 736) && (window.innerWidth >= 375 && window.innerWidth < 414)) {
			// console.log('iPhone 6 portrait');
			updateMapWidth = window.innerWidth * 1.3;
			updateMapHeight = window.innerHeight * .7;

			// iPhone 6 landscape
		} else if ((window.innerHeight >= 375 && window.innerHeight < 414) && (window.innerWidth >= 667 && window.innerWidth < 736)) {
			// console.log('iPhone 6 landscape');
			updateMapWidth = window.innerWidth * 1.35;
			updateMapHeight = window.innerHeight * .92;

			// iPhone 6 plus portrait
		} else if ((window.innerHeight >= 736 && window.innerHeight < 1024) && (window.innerWidth >= 414 && window.innerWidth < 768)) {
			// console.log('iPhone 6 plus portrait');
			updateMapWidth = window.innerWidth * 1.3;
			updateMapHeight = window.innerHeight * .75;

			// iPhone 6 plus landscape
		} else if ((window.innerHeight >= 414 && window.innerHeight < 768) && (window.innerWidth >= 736 && window.innerWidth < 1024)) {
			// console.log('iPhone 6 plus landscape');
			updateMapWidth = window.innerWidth * 2;
			updateMapHeight = window.innerHeight * .95;

			// iPad portrait
		} else if (window.innerHeight >= 1024 && (window.innerWidth >= 768 && window.innerWidth < 992)) {
			// console.log('iPad portrait');
			updateMapWidth = window.innerWidth * 1.9;
			updateMapHeight = window.innerHeight * .75;

			// iPad landscape
		} else if (window.innerHeight === 768 && (window.innerWidth >= 1024 && window.innerWidth < 1200)) {
			// console.log('iPad landscape');
			updateMapWidth = window.innerWidth * .65;
			updateMapHeight = window.innerHeight * .72;

			// Desktop
		} else if (window.innerHeight >= 768 && window.innerWidth >= 992) {
			// console.log('Desktop');
			updateMapWidth = window.innerWidth;
			updateMapHeight = window.innerHeight * .84;

			// Custom dimentions between iPad and small desktop
		} else if (window.innerHeight <= 1024 && (window.innerWidth >= 768 && window.innerWidth < 992)) {
			// console.log('Custom dimentions between iPad and small desktop');
			updateMapWidth = window.innerWidth * 1.9;
			updateMapHeight = window.innerHeight * .8;

			// iPad Pro
		} else if (window.innerHeight === 1366 && window.innerWidth === 1024) {
			// console.log('iPad Pro');
			updateMapWidth = window.innerWidth * 1.9;
			updateMapHeight = window.innerHeight * .9;
		}

		this.setState({
			mapWidth: updateMapWidth < 992 ? updateMapWidth * .72 : updateMapWidth * .5,
			mapHeight: updateMapHeight
		});
	};

	/**
	 * @desc Sets the active page for Services
	 *
	 * @param {number} id of active page
	 */
	setActive(itemId) {
		this.setState({ activeItem: itemId });
	};

	/**
	 * @desc Toggles the Services burger menu
	 */
	burgerMenu() {
		let action = !this.state.burgerMenuActive;
		this.setState({ burgerMenuActive: action });
	};

	/**
	 * @desc Toggles the contact form (open/close)
	 */
	toggleContactForm() {
		this.setState({ showContactForm: !this.state.showContactForm });

		const mainWrap = document.getElementById('main-wrapper');
		mainWrap.classList.toggle('no-padd');
	};

	render() {
		return (
			<div>
				{this.state.isLoading ? (
					<Loading />
				) : (
						<div id="main-wrapper" className="flex-column">
							<Header
								loading={this.state.isLoading}
								details={this.state.mainPageTitles}
								logo={this.state.logo}
								id="header-wrapper"
								/>
							<ReactCSSTransisionGroup
								component="div"
								className="blank-slate-container"
								transitionName="slide"
								transitionEnterTimeout={500}
								transitionLeaveTimeout={800}
								>
								{this.state.renderBlankSlate ? <BlankSlate /> : null}
							</ReactCSSTransisionGroup>
							<About
								loading={this.state.isLoading}
								arrow={this.state.arrow}
								details={this.state.about}
								/>
							<Services
								loading={this.state.isLoading}
								childPages={this.state.serviceChildPages}
								page={this.state.services}
								activeItem={this.state.activeItem}
								setActive={this.setActive}
								burgerMenu={this.burgerMenu}
								burgerMenuActive={this.state.burgerMenuActive}
								width={this.state.width}
								/>
							<Contact
								loading={this.state.isLoading}
								details={this.state.contact}
								showForm={this.state.showContactForm}
								toggleForm={this.toggleContactForm}
								footer={this.state.footer}
								menu={this.state.mainPageTitles}
								width={this.state.mapWidth}
								height={this.state.mapHeight}
								/>
							<Footer
								loading={this.state.isLoading}
								details={this.state.footer}
								menu={this.state.mainPageTitles}
								/>
						</div>
					)}
			</div>
		);
	}
}

export default Main;
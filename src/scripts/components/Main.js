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
		};

		this.interval = null;
		this.interval2 = null;

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
				this.interval = setTimeout(() => this.setState({ renderBlankSlate: false }), 3000);

			});
	};

	/**
	 * @desc Gathers main eventlisterers.
	 */
	eventListeners() {
		window.addEventListener('scroll', this.scrollMethods);
		jqueryScripts.handleArrowKeyScroll();
	}

	/**
	 * @desc Gathers all methods connected to the scroll event.
	 */
	scrollMethods() {
		scripts.handleHeaderPosition();
	}

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
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
			headerIsLoading: true,
			aboutIsLoading: true,
			aboutContentIsRendering: true,
			servicesIsLoading: true,
			contactIsLoading: true,
			footerIsLoading: true,
			mainContentIsLoading: true,
			activeItem: null,
			burgerMenuActive: false,
			showContactForm: false,
			width: window.innerWidth,
		};

		this.interval = null;
		this.interval2 = null;

	};

	componentDidMount() {
		model.apiCall.getHeaderContent('pages', 47, 'media', 'DKN_Logotyp')
			.then(data => {
				this.setState({
					mainPageTitles: data.mainPageTitles,
					logo: data.logo,
					headerIsLoading: false
				});
			})
			.then(() => {
				model.apiCall.getAboutContent('pages', 'about', 'media', 'arrow')
					.then(data => {
						this.setState({
							arrow: data.arrow,
							about: data.about,
							aboutIsLoading: false
						});
					});
			})
			.then(() => {
				model.apiCall.getServicesContent('pages', 47)
					.then(data => {
						this.setState({
							services: data.services,
							serviceChildPages: data.serviceChildPages,
							serviceChildPageTitles: data.serviceChildPageTitles,
							activeItem: data.activeItem,
							servicesIsLoading: false
						});
					});
			})
			.then(() => {
				model.apiCall.getContactContent('pages', 'kontakt')
					.then(data => {
						this.setState({
							contact: data.contact,
							contactIsLoading: false
						});
					});
			})
			.then(() => {
				model.apiCall.getFooterContent('pages', 'footer')
					.then(data => {
						this.setState({
							footer: data.footer,
							footerIsLoading: false
						});
					});
				this.interval = setTimeout(() => this.setState({ renderBlankSlate: false }), 3000);
			});
	};

	/**
	 * @desc Gathers main eventlisterers.
	 */
	eventListeners() {
		window.addEventListener('scroll', scripts.handleHeaderPosition);
		jqueryScripts.handleArrowKeyScroll();
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
				{this.state.headerIsLoading ? (
					<Loading />
				) : (
						<div id="main-wrapper" className="flex-column">
							<Header
								loading={this.state.headerIsLoading}
								details={this.state.mainPageTitles}
								logo={this.state.logo}
								id="header-wrapper"
							/>
							<ReactCSSTransisionGroup
								component="div"
								className="blank-slate-container"
								transitionName="slide"
								transitionEnterTimeout={1400}
								transitionLeaveTimeout={1400}
							>
								{this.state.renderBlankSlate ? <BlankSlate /> : null}
							</ReactCSSTransisionGroup>
							{this.state.renderBlankSlate || this.state.aboutIsLoading ? (
								null
							) : (
									<About
										loading={this.state.aboutIsLoading}
										blankSlate={this.state.renderBlankSlate}
										contentRendering={this.state.aboutContentIsRendering}
										arrow={this.state.arrow}
										details={this.state.about}
									/>
								)}
							{this.state.servicesIsLoading ? (
								null
							) : (
									<Services
										loading={this.state.servicesIsLoading}
										childPages={this.state.serviceChildPages}
										page={this.state.services}
										activeItem={this.state.activeItem}
										setActive={this.setActive}
										burgerMenu={this.burgerMenu}
										burgerMenuActive={this.state.burgerMenuActive}
										width={this.state.width}
									/>
								)}
							{this.state.contactIsLoading ? (
								<Loading />
							) : (
									<Contact
										loading={this.state.contactIsLoading}
										details={this.state.contact}
										showForm={this.state.showContactForm}
										toggleForm={this.toggleContactForm}
										footer={this.state.footer}
										menu={this.state.mainPageTitles}
									/>
								)}
							{this.state.footerIsLoading ? (
								null
							) : (
									<Footer
										loading={this.state.footerIsLoading}
										details={this.state.footer}
										menu={this.state.mainPageTitles}
									/>
								)}
						</div>
					)}
			</div>
		);
	}
}

export default Main;
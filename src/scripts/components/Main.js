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
import ContactForm from './ContactForm';

// Other
import model from '../helpers/model';
import scripts from '../helpers/scripts';
import jqueryScripts from '../helpers/jqueryScripts';

// A current timestamp for comparing local storage age.
const currentTimestamp = Math.floor((((new Date() / 1000) / 60) / 60) / 24);

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
		model.isLocalStorageSupported() ? (
			model.checkForLsTimestamp() ? (
				model.compareTimestamp(7, currentTimestamp) ? (
					localStorage.setItem('timestamp', JSON.stringify(currentTimestamp)),
					model.setLocalStorage(),
					model.apiCall.getHeaderContent('pages', 47, 'media', 'Ny_DKN_Logga')
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
					})
				) : (
						model.getLocalStorage()
							.then(lsData => {
								this.setState({
									headerIsLoading: false,
									logo: lsData.headerContent.logo,
									mainPageTitles: lsData.headerContent.mainPageTitles,
									about: lsData.aboutContent.about,
									aboutIsLoading: false,
									services: lsData.serviceContent.services,
									serviceChildPages: lsData.serviceContent.serviceChildPages,
									serviceChildPageTitles: lsData.serviceContent.serviceChildPageTitles,
									activeItem: lsData.serviceContent.activeItem,
									servicesIsLoading: false,
									contact: lsData.contactContent.contact,
									contactIsLoading: false,
									footer: lsData.footerContent.footer,
									footerIsLoading: false
								});
							})
					)
			) : (
					localStorage.setItem('timestamp', JSON.stringify(currentTimestamp)),
					model.setLocalStorage(),
					model.apiCall.getHeaderContent('pages', 47, 'media', 'Ny_DKN_Logga')
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
					})
				),

			this.interval = setTimeout(() => this.setState({ renderBlankSlate: false }), 3000)
		) : (
				model.apiCall.getHeaderContent('pages', 47, 'media', 'Ny_DKN_Logga')
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
					})
			);

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

		jqueryScripts.loadContactForm7Script();

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
							/>
							<ReactCSSTransisionGroup
								component="div"
								className="blank-slate-container"
								transitionName="slide"
								transitionEnterTimeout={1420}
								transitionLeaveTimeout={1420}
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
								null
							) : (
									<div>
										<Contact
											loading={this.state.contactIsLoading}
											details={this.state.contact}
											showForm={this.state.showContactForm}
											toggleForm={this.toggleContactForm}
											footer={this.state.footer}
											menu={this.state.mainPageTitles}
										/>

									</div>
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
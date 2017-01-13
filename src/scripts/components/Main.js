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
import model from '../model';
import scripts from '../scripts';

class Main extends React.Component {

	constructor() {
		super();

		this.handleScroll = this.handleScroll.bind(this);
		this.mediaQuery = this.mediaQuery.bind(this);
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
			scrollPosition: 0,
			width: 600,
			height: 400
		};

		this.interval = null;
		this.interval2 = null;

	};

	componentWillMount() {
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

				const header = document.getElementById('header-wrapper');

				window.addEventListener('scroll', this.handleScroll);
				scripts.init();

			});
	};

	componentDidMount() {
		this.mediaQuery();

		window.addEventListener('resize', this.mediaQuery);

		this.interval = setTimeout(() => this.setState({ renderBlankSlate: false }), 4000);
	};


	/**
	 * @desc toggles the header position from fixed to absolute
	 */
	handleScroll() {
		const services = document.getElementById('tjanster');
		const header = document.getElementById('header-wrapper');
		const headerHeight = header.offsetHeight;
		const topOfServices = services.offsetTop;
		const absPosition = 'position: absolute; top: ' + (topOfServices - headerHeight) + 'px';

		window.scrollY >= (topOfServices - headerHeight) ? header.style.cssText += absPosition : null;
		window.scrollY <= (topOfServices - headerHeight) ? header.style.cssText = window.getComputedStyle(header, null) - absPosition : null;
	};

	/**
	 * @desc Enables dynamic width and height for the map
	 */
	mediaQuery() {
		let updateWidth = window.innerWidth;
		let updateHeight = window.innerHeight;

		this.setState({
			width: updateWidth,
			height: updateHeight
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
								width={this.state.width}
								height={this.state.height}
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
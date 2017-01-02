// Libs
import React from 'react';
import ReactCSSTransisionGroup from 'react-addons-css-transition-group';
import axios from 'axios';

// Components
import Loading from './Loading';
import Header from './Header';
import BlankSlate from './BlankSlate';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';

import model from '../model';

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

	}

	componentWillMount() {
		model.apiCall.getAllContent('pages', 'posts', 'media')
			.then(data => {
				this.setState({
					pages: data.pages,
					logo: data.logo,
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

				document.body.style.paddingTop = header.offsetHeight + 'px';
				window.addEventListener('scroll', this.handleScroll);
			});
	}

	componentDidMount() {

		this.mediaQuery();
		window.addEventListener('resize', this.mediaQuery);

		this.interval = setTimeout(() => this.setState({renderBlankSlate: false}), 10000);
	}

	handleScroll() {
		const services = document.getElementById('tjanster');
		const header = document.getElementById('header-wrapper');
		const headerHeight = header.offsetHeight;
		const topOfServices = services.offsetTop;
		const absPosition = 'position: absolute; top: ' + (topOfServices - (headerHeight / 2) - 32) + 'px';

		window.scrollY >= (topOfServices - (headerHeight / 2) - 32) ? header.style.cssText += absPosition : null;
		window.scrollY <= (topOfServices - (headerHeight / 2) - 32) ? header.style.cssText = window.getComputedStyle(header,null) - absPosition : null;
	}

	mediaQuery() {
		let updateWidth = window.innerWidth;
		let updateHeight = window.innerHeight;

		this.setState({
			width: updateWidth,
			height: updateHeight
		});
	}

	setActive(itemId) {
		this.setState({ activeItem: itemId });
	}

	burgerMenu() {
		let action = !this.state.burgerMenuActive;
		this.setState({ burgerMenuActive: action });
	}

	toggleContactForm() {
		this.setState({ showContactForm: !this.state.showContactForm });

		const mainWrap = document.getElementById('main-wrapper');
		mainWrap.classList.toggle('no-padd');
	}

	render() {

		return (
			<div>
				{ this.state.isLoading ? (
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
							transitionName="slide"
							transitionEnterTimeout={ 500 } 
							transitionAppear={ true }
							transitionAppearTimeout={ 500 }
							transitionLeaveTimeout={ 500 }
						>
						{ this.state.renderBlankSlate ? <BlankSlate /> : null }
						</ReactCSSTransisionGroup>
						<About
							loading={this.state.isLoading}
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
		)
	}
}

export default Main;
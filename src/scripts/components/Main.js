// Libs
import React from 'react';
import axios from 'axios';

// Components
import Header from './Header';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import model from '../model';
import scripts from '../scripts';

class Main extends React.Component {

	constructor() {
		super();

		this.handleScroll = this.handleScroll.bind(this);
		this.setActive = this.setActive.bind(this);
		this.toggleContactForm = this.toggleContactForm.bind(this);

		this.state = {
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
			showContactForm: false,
			scrollPosition: 0
		};
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
					allPageTitles: data.allPageTitles,
					mainPageTitles: data.mainPageTitles,
					serviceChildPages: data.serviceChildPages,
					serviceChildPageTitles: data.serviceChildPageTitles,
					posts: data.posts,
					isLoading: false,
					activeItem: data.activeItem
				});
				
				window.addEventListener('scroll', this.handleScroll);
			});
	}

	componentDidMount() {


	}

	handleScroll() {
		const services = document.getElementById('tjanster');
		const contact = document.getElementById('kontakt');
		const topOfServices = services.offsetTop;
		const topOfContact = contact.offsetTop;
		window.scrollY >= topOfServices && window.scrollY <= topOfContact ? document.body.classList.remove('fixed-nav') : null;
		window.scrollY >= topOfContact ? document.body.classList.add('fixed-nav') : null;
		window.scrollY <= topOfServices ? document.body.classList.add('fixed-nav') : null;
	}

	setActive(itemId) {
		this.setState({ activeItem: itemId });
	}

	toggleContactForm() {
		this.setState({ showContactForm: !this.state.showContactForm });
	}

	render() {

		return (
			<div id="main-wrapper" className="flex-column">
				<Header
					loading={this.state.isLoading}
					details={this.state.mainPageTitles}
					logo={this.state.logo}
					/>
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
					/>
				<Contact
					loading={this.state.isLoading}
					details={this.state.contact}
					showForm={this.state.showContactForm}
					toggleForm={this.toggleContactForm}
					/>
			</div>
		)
	}
}

export default Main;
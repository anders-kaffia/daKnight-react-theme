// Libs
import React from 'react';
import axios from 'axios';

// Components
import Header from './Header';
import About from './About';
import Services from './Services';
import Contact from './Contact';

import model from '../model';
import helpers from '../helpers';


class Main extends React.Component {

	constructor() {
		super();

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
			showContactForm: false
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
			});
	}

	setActive( itemId ) {
		this.setState({ activeItem: itemId });
	}

	toggleContactForm() {
		this.setState({showContactForm: !this.state.showContactForm});
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
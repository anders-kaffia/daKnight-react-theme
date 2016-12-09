// Libs
import React from 'react';


import model from '../data';

// Components
import Header from './Header';
import About from './About';
import Services from './Services';
import Contact from './Contact';

// Stores data from WP REST API in local storage
model.dataInit();

class App extends React.Component {
	constructor() {
		super();
		// Enables the use of 'this'

		// Initial state
		this.state = {
			pages: {},
			posts: {},
			about: {},
			services: {},
			contact: {},
			titles: {}
		}
	}

	componentWillMount() {
		const 	pages = model.getPages(),
				about = model.getPage('om-oss'),
				services = model.getPage('tjanster'),
				contact = model.getPage('kontakt'),
				titles = model.getPageTitles();

		this.setState({
			pages: pages,
			about: about,
			services: services,
			contact: contact,
			titles: titles
		})
	}

	render() {
		return (
			<div  id="main-wrapper" className="flex-column">

			</div>
		)
	}
}

export default App;
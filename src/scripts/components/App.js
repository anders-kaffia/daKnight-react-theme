import React from 'react';

import { getData, pageContent } from '../data';
import pagesData from '../data';
console.log(pagesData);


// Components
import Header from './Header';
import About from './About';
import Services from './Services';
import Contact from './Contact';

class App extends React.Component {
	constructor() {
		super();
		// Enables the use of 'this'
		this.loadPages = this.loadPages.bind(this);

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

	loadPages() {

		this.setState({
			pages: pagesData,
			about: pagesData.about,
			services: pagesData.services,
			contact: pagesData.contact,
			// titles: pagesData.pages.map(key =>)
		});
	}
	
	componentWillMount() {
		// This runs right before the <App> is rendered
		this.loadPages();
	}

	

	render() {
		return (
			<div className="flex-column">
				<Header />
				<About details={ this.state.about } />
				<Services details={ this.state.services } />
				<Contact details={ this.state.contact } />
			</div>
		)
	}
}

export default App;
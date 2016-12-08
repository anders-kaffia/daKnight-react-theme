// Libs
import React from 'react';

import model from '../data';

// Components
import Header from './Header';
import About from './About';
import Services from './Services';
import Contact from './Contact';

// Sets local storage from the JSON response from the REST API
model.dataInit();

const pages = model.getPages();
console.log(pages);

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

	

	render() {
		return (
			<div  id="main-wrapper" className="flex-column">

			</div>
		)
	}
}

export default App;
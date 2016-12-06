import React from 'react';
import { pageContent } from '../helpers';

// Components
import Header from './Header';
import About from './About';
import Services from './Services';
import Contact from './Contact';

class App extends React.Component {
	constructor() {
		super();
		// Enables the use of 'this'
	}
	

	render() {
		const about = pageContent('om-oss');
		console.log(about.acf.bakgrund);
		return (
			<div>
				<h2>This is the App section</h2>
				<Header />
				<About>{ about.acf.bakgrund }</About>
				<Services />
				<Contact />
			</div>
		)
	}
}

export default App;
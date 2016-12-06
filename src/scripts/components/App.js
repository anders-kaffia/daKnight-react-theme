import React from 'react';

// Components
import Header from './Header';
import About from './About';
import Services from './Services';
import Contact from './Contact';

class App extends React.Component {
	render() {
		return (
			<div>
				<h2>This is the App section</h2>
				<Header />
				<About />
				<Services />
				<Contact />
			</div>
		)
	}
}

export default App;
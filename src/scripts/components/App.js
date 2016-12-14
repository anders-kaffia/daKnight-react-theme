// Libs
import React from 'react';
import { connect } from 'react-redux';

import model from '../model';
// import { responseArray } from '../model';

// Components
import Header from './Header';
import About from './About';
import Services from './Services';
import Contact from './Contact';

class App extends React.Component {
	render() {
		return (
			<div id="main-wrapper" className="flex-column">
				{ /*<Header details={this.state.about} /> 
				<About details={this.state.about} />
				<Services details={this.state.services} />
				<Contact details={this.state.contact} />*/}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		pages: state.pages
	};
}

export default connect(mapStateToProps)(App);
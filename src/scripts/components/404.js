import React from 'react';
import Header from './Header';

class FourOhFour extends React.Component {

	render() {
		return (
			<section id="404" className="flex-row">
				<Header/>
				<div>
					<h2>Oh no, sidan finns inte! :(</h2>
				</div>
			</section>
		);
	}
}

export default FourOhFour;
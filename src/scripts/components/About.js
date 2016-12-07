import React from 'react';

class About extends React.Component {

	render() {
		const details = this.props.details;
		return (
			<div className="flex-column">
				<section id="blank-slate">
					<div></div>
					<div></div>
					<div></div>
				</section>
				<section id="about-1" dangerouslySetInnerHTML={ {__html: details.acf.om_oss} } />
				<section id="about-2" dangerouslySetInnerHTML={ {__html: details.acf.bakgrund} } />
				<section id="about-3" dangerouslySetInnerHTML={ {__html: details.acf.arbetssatt} } />
			</div>
		)
	}
}

export default About;